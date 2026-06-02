// {"P5LIVE":{"name":"new_001","mod":1780346049683}} 

// {"P5LIVE":{"name":"Morse Eyebrow Control","mod":1779614887334}}
// ──────────────────────────────────────────────
//  STEUERUNG:
//  🤨 Rechte Augenbraue hochziehen  →  · (Punkt)
//  🤨 Linke  Augenbraue hochziehen  →  – (Strich)
//  ⏱  1.5 Sek. Pause                →  Buchstabe dekodieren
//
//  Tastatur-Fallback:
//  .  →  Punkt    -  →  Strich    Space  →  jetzt dekodieren
//  Backspace  →  letztes Symbol / Buchstaben löschen
//
//  Kalibrierung läuft automatisch:
//  Die ersten ~3 Sekunden neutral schauen, dann beginnen.
// ──────────────────────────────────────────────

let libs = ['https://unpkg.com/ml5@1/dist/ml5.js'];

// ── Morse ────────────────────────────────────────
let bgColor;
let typedText  = "";
let morseItems = [];
let synth;
const morseSize = 2;

const morse = {
  a:".-",   b:"-...", c:"-.-.", d:"-..",
  e:".",    f:"..-.", g:"--.",  h:"....",
  i:"..",   j:".---", k:"-.-", l:".-..",
  m:"--",   n:"-.",   o:"---", p:".--.",
  q:"--.-", r:".-.",  s:"...", t:"-",
  u:"..-",  v:"...-", w:".--", x:"-..-",
  y:"-.--", z:"--.."
};
const morseReverse = {};
for (let l in morse) morseReverse[morse[l]] = l;

// ── FaceMesh ─────────────────────────────────────
let faceMesh;
let video;
let faces = [];
const faceOptions = { maxFaces: 1, refineLandmarks: false, flipped: true };

// ── Gestensteuerung ──────────────────────────────
let morseBuffer   = "";
let lastInputTime = 0;
const LETTER_TIMEOUT  = 1500; // ms Pause → Buchstabe dekodieren
const BROW_COOLDOWN   = 800;  // ms zwischen zwei Auslösungen
const RAISE_THRESHOLD = 0.09; // normierter Anstieg über Baseline → auslösen

let rightBrowTimer = 0;
let leftBrowTimer  = 0;

// Laufende Baseline (Neutral-Position)
let rBaseline = null;
let lBaseline = null;
const BASELINE_ALPHA = 0.012; // wie schnell sie sich anpasst (langsam!)

// Geglättete Raise-Werte für Visualisierung
let smoothRRight = 0;
let smoothRLeft  = 0;
const SMOOTH_A   = 0.25;

// ── MediaPipe Landmark-Indices ───────────────────
//
//  Rechte Augenbraue (anatomisch): Mitte ~ 105
//  Rechtes Auge oben (anatomisch): 159
//  Rechtes Auge Ecken: außen=33, innen=133
//
//  Linke Augenbraue (anatomisch): Mitte ~ 334
//  Linkes Auge oben (anatomisch): 386
//  Linkes Auge Ecken: innen=362, außen=263
//
//  (Mit flipped:true erscheint rechts auf der linken Bildschirmseite)

// ── Setup ─────────────────────────────────────────
function preload() {
  faceMesh = ml5.faceMesh(faceOptions);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(255, 0, 127);

  synth = new p5.Oscillator('sine');
  synth.start();
  synth.amp(0);
  textFont('monospace');

  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();

  faceMesh.detectStart(video, gotFaces);
}

// ── Draw ──────────────────────────────────────────
function draw() {
  background(bgColor);

  // Auto-Dekodierung nach Timeout
  if (morseBuffer.length > 0 && millis() - lastInputTime > LETTER_TIMEOUT) {
    decodeLetter();
  }

  // Gestenanalyse
  if (faces.length > 0) {
    detectEyebrows(faces[0]);
  }

  // Schwebende Morsezeichen
  for (let item of morseItems) {
    item.targetX += random(-0.3, 0.3);
    item.targetY += random(-0.3, 0.3);

    for (let other of morseItems) {
      if (item !== other) {
        let d = dist(item.x, item.y, other.x, other.y);
        if (d < 170) {
          let angle = atan2(item.y - other.y, item.x - other.x);
          let force  = (170 - d) * 0.05;
          item.targetX += cos(angle) * force;
          item.targetY += sin(angle) * force;
        }
      }
    }
    item.targetX = constrain(item.targetX, 100, width - 100);
    item.targetY = constrain(item.targetY, 100, height - 200);
    item.x = lerp(item.x, item.targetX, 0.03);
    item.y = lerp(item.y, item.targetY, 0.03);
    drawMorse(item);
  }

  // Getippter Text
  fill(255);
  noStroke();
  textAlign(CENTER);
  textSize(40);
  text(typedText, width / 2, height - 80);

  // Morsepuffer + Fortschrittsbalken
  let progress = morseBuffer.length > 0
    ? map(millis() - lastInputTime, 0, LETTER_TIMEOUT, 0, 1, true) : 0;
  drawBuffer(progress);

  // HUD
  drawHUD();
}

// ── Augenbrauen-Erkennung ─────────────────────────
function detectEyebrows(face) {
  let kp = face.keypoints;

  // Augenbreiten zur Normierung
  let rEyeW = eyeWidth(kp, 33, 133);
  let lEyeW = eyeWidth(kp, 362, 263);

  // Normierter Abstand: Augenbraue → Augenlid (höher = Braue weiter oben)
  let rDist = browEyeDist(kp, 105, 159, rEyeW);
  let lDist = browEyeDist(kp, 334, 386, lEyeW);

  // Baseline initialisieren
  if (rDist !== null && rBaseline === null) rBaseline = rDist;
  if (lDist !== null && lBaseline === null) lBaseline = lDist;
  if (rBaseline === null || lBaseline === null) return;

  // Raise = Abstand über Baseline (positiv = Braue hochgezogen)
  let rRaise = rDist - rBaseline;
  let lRaise = lDist - lBaseline;

  // Smooth für Anzeige
  smoothRRight = lerp(smoothRRight, rRaise, SMOOTH_A);
  smoothRLeft  = lerp(smoothRLeft,  lRaise, SMOOTH_A);

  let now = millis();

  // Rechte Braue → Punkt (nur wenn linke Braue ruhig)
  if (rRaise > RAISE_THRESHOLD && now - rightBrowTimer > BROW_COOLDOWN) {
    if (lRaise < RAISE_THRESHOLD * 0.55) {
      addSymbol(".");
      rightBrowTimer = now;
    }
  } else if (rRaise < RAISE_THRESHOLD * 0.35) {
    // Baseline nur anpassen wenn neutral
    rBaseline = lerp(rBaseline, rDist, BASELINE_ALPHA);
  }

  // Linke Braue → Strich (nur wenn rechte Braue ruhig)
  if (lRaise > RAISE_THRESHOLD && now - leftBrowTimer > BROW_COOLDOWN) {
    if (rRaise < RAISE_THRESHOLD * 0.55) {
      addSymbol("-");
      leftBrowTimer = now;
    }
  } else if (lRaise < RAISE_THRESHOLD * 0.35) {
    lBaseline = lerp(lBaseline, lDist, BASELINE_ALPHA);
  }

  // Visuelles Feedback
  drawBrowFeedback(kp, rRaise, lRaise);
}

function eyeWidth(kp, a, b) {
  if (!kp[a] || !kp[b]) return 0;
  return dist(kp[a].x, kp[a].y, kp[b].x, kp[b].y);
}

function browEyeDist(kp, browIdx, eyeIdx, eyeW) {
  if (!kp[browIdx] || !kp[eyeIdx] || eyeW === 0) return null;
  // Differenz Y (Braue hat kleineres Y als Auge → positiv)
  return (kp[eyeIdx].y - kp[browIdx].y) / eyeW;
}

function drawBrowFeedback(kp, rRaise, lRaise) {
  let sides = [
    { browIdx: 105, raise: rRaise, label: "R  →  ·", col: color(80, 220, 160)  },
    { browIdx: 334, raise: lRaise, label: "L  →  –", col: color(255, 180, 60) }
  ];

  for (let s of sides) {
    if (!kp[s.browIdx]) continue;
    let x = kp[s.browIdx].x;
    let y = kp[s.browIdx].y;
    let active = s.raise > RAISE_THRESHOLD;

    // Bogen über der Augenbraue
    noFill();
    stroke(active ? s.col : color(255, 255, 255, 60));
    strokeWeight(active ? 3 : 1.5);
    arc(x, y, 50, 24, PI, TWO_PI);

    // Pfeil nach oben wenn aktiv
    if (active) {
      stroke(s.col);
      strokeWeight(2);
      line(x, y - 20, x, y - 40);
      line(x, y - 40, x - 7, y - 32);
      line(x, y - 40, x + 7, y - 32);

      fill(s.col);
      noStroke();
      textSize(14);
      textAlign(CENTER, CENTER);
      text(s.label, x, y - 55);
    }
    noStroke();
  }
}

// ── Eingabe & Dekodierung ─────────────────────────
function addSymbol(sym) {
  morseBuffer  += sym;
  lastInputTime = millis();
  bgColor = color(random(255), random(255), random(255));
  playMorse(sym);
}

function decodeLetter() {
  let letter = morseReverse[morseBuffer];
  if (letter) {
    typedText += letter;
    let item = {
      code:    morse[letter],
      x:       width / 2,
      y:       height / 2,
      targetX: random(150, width - 150),
      targetY: random(150, height - 150)
    };
    morseItems.push(item);
    for (let other of morseItems) {
      other.targetX += random(-100, 100);
      other.targetY += random(-100, 100);
      other.targetX = constrain(other.targetX, 100, width - 100);
      other.targetY = constrain(other.targetY, 100, height - 100);
    }
    bgColor = color(random(255), random(255), random(255));
  }
  morseBuffer = "";
}

// ── Zeichnen ──────────────────────────────────────
function drawMorse(item) {
  let spacing = 30 * morseSize;
  for (let i = 0; i < item.code.length; i++) {
    let sym = item.code[i];
    let px  = item.x + (i - item.code.length / 2) * spacing;
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(40 * morseSize);
    if (sym === ".") text("·", px, item.y);
    if (sym === "-") text("–", px, item.y);
  }
}

function drawBuffer(progress) {
  let bx = width / 2;
  let by = height - 38;
  let barW = 220;
  noStroke();
  fill(0, 0, 0, 80);
  rect(bx - barW / 2, by + 12, barW, 6, 3);
  fill(255, 220, 0, 200);
  rect(bx - barW / 2, by + 12, barW * progress, 6, 3);
  fill(255, 240, 80);
  noStroke();
  textSize(26);
  textAlign(CENTER, CENTER);
  text("[ " + morseBuffer + " ]", bx, by);
}

function drawHUD() {
  // Kalibrierungshinweis solange keine Baseline
  if (rBaseline === null) {
    fill(255, 255, 100, 220);
    textSize(20);
    textAlign(CENTER);
    noStroke();
    text("⏳ Bitte neutral in die Kamera schauen...", width / 2, 50);
    return;
  }

  fill(255, 255, 255, 150);
  noStroke();
  textAlign(LEFT);
  textSize(15);
  let x = 18, y = 25;
  text("🤨 Rechte Augenbraue  →  · (Punkt)",  x, y);
  text("🤨 Linke  Augenbraue  →  – (Strich)", x, y + 22);
  text("⏱  Pause 1.5s         →  Buchstabe",  x, y + 44);
  text("⌨  .  –  Space        (Fallback)",    x, y + 66);

  // Raise-Balken als Echtzeit-Feedback
  drawRaiseBar(width - 120, height / 2, smoothRRight, "R · ", color(80, 220, 160));
  drawRaiseBar(width -  60, height / 2, smoothRLeft,  "L – ", color(255, 180, 60));
}

function drawRaiseBar(x, cy, raise, label, col) {
  let maxH = 120;
  let barH = constrain(map(raise, 0, RAISE_THRESHOLD * 1.5, 0, maxH), 0, maxH);
  let triggered = raise > RAISE_THRESHOLD;

  // Hintergrund
  noStroke();
  fill(0, 0, 0, 100);
  rect(x - 14, cy - maxH / 2, 28, maxH, 4);

  // Füllstand
  fill(triggered ? col : lerpColor(col, color(100), 0.5));
  rect(x - 12, cy + maxH / 2 - barH, 24, barH, 3);

  // Schwellenlinie
  let threshY = cy + maxH / 2 - map(RAISE_THRESHOLD, 0, RAISE_THRESHOLD * 1.5, 0, maxH);
  stroke(255, 255, 255, 120);
  strokeWeight(1);
  line(x - 16, threshY, x + 16, threshY);
  noStroke();

  // Label
  fill(255, 255, 255, 160);
  textSize(12);
  textAlign(CENTER);
  text(label, x, cy + maxH / 2 + 18);
}

// ── Sound ─────────────────────────────────────────
function playMorse(code) {
  let time = 0;
  for (let sym of code) {
    let dur = sym === "." ? 120 : 350;
    setTimeout(() => {
      synth.freq(440);
      synth.amp(0.3, 0.01);
      setTimeout(() => { synth.amp(0, 0.05); }, dur);
    }, time);
    time += dur + 100;
  }
}

// ── FaceMesh Callback ─────────────────────────────
function gotFaces(results) {
  faces = results;
}

// ── Tastatur-Fallback ─────────────────────────────
function keyTyped() {
  let k = key.toLowerCase();
  if (k === "." || k === ",") { addSymbol("."); return; }
  if (k === "-")               { addSymbol("-"); return; }
  if (k === " ")               { if (morseBuffer.length > 0) decodeLetter(); return; }
  if (morse[k]) {
    typedText += k;
    bgColor = color(random(255), random(255), random(255));
    let item = {
      code: morse[k],
      x: width / 2, y: height / 2,
      targetX: random(150, width - 150),
      targetY: random(150, height - 150)
    };
    morseItems.push(item);
    for (let other of morseItems) {
      other.targetX += random(-100, 100);
      other.targetY += random(-100, 100);
      other.targetX = constrain(other.targetX, 100, width - 100);
      other.targetY = constrain(other.targetY, 100, height - 100);
    }
    playMorse(morse[k]);
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    if (morseBuffer.length > 0) {
      morseBuffer = morseBuffer.slice(0, -1);
    } else {
      typedText = typedText.slice(0, -1);
      if (morseItems.length > 0) morseItems.pop();
    }
  }
}