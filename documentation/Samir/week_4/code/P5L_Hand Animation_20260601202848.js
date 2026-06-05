// {"P5LIVE":{"name":"Hand Animation","mod":1780345728389}} 

// {"P5LIVE":{"name":"Morse HandPose Control","mod":1779614887334}}
// ──────────────────────────────────────────────
//  STEUERUNG:
//  🤙 Daumen + kleiner Finger zusammen  →  · (Punkt)
//  🤘 Daumen + Mittelfinger zusammen    →  – (Strich)
//  ⏱  1.5 Sek. Pause                    →  Buchstabe dekodieren
//
//  Tastatur-Fallback:
//  .  →  Punkt    -  →  Strich    Space  →  jetzt dekodieren
//  Backspace  →  letztes Symbol / Buchstaben löschen
// ──────────────────────────────────────────────

let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];

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

// ── HandPose ─────────────────────────────────────
let handPose;
let video;
let hands = [];
const handOptions = { maxHands: 1, flipHorizontal: true };

// ── Gestensteuerung ──────────────────────────────
let morseBuffer   = "";
let lastInputTime = 0;
const LETTER_TIMEOUT  = 1500; // ms Pause → Buchstabe
const PINCH_THRESHOLD = 0.28; // normierter Abstand → Pinch aktiv

// Zustandsmaschine: löst nur beim ersten Kontakt aus, nicht bei Halten
let dotWasPinching  = false; // Daumen + kleiner Finger
let dashWasPinching = false; // Daumen + Mittelfinger

// Geglättete Abstände für Visualisierung
let smoothDotDist  = 1;
let smoothDashDist = 1;
const DIST_SMOOTH  = 0.25;

// ── MediaPipe Hand-Landmarks ──────────────────────
//  0  = Handgelenk
//  4  = Daumen-Spitze
//  8  = Zeigefinger-Spitze
//  12 = Mittelfinger-Spitze
//  16 = Ringfinger-Spitze
//  20 = Kleiner-Finger-Spitze
//  9  = Mittelfinger-MCP (für Handgrösse)

// ── Setup ─────────────────────────────────────────
function preload() {
  handPose = ml5.handPose(handOptions);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(255, 0, 127);

  synth = new p5.Oscillator('sine');
  synth.start();
  synth.amp(0);
  textFont('monospace');

  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();

  handPose.detectStart(video, gotHands);
}

// ── Draw ──────────────────────────────────────────
function draw() {
  background(bgColor);

  // Auto-Dekodierung nach Timeout
  if (morseBuffer.length > 0 && millis() - lastInputTime > LETTER_TIMEOUT) {
    decodeLetter();
  }

  // Hand-Analyse
  if (hands.length > 0) {
    detectPinches(hands[0]);
    drawHandSkeleton(hands[0]);
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

  // Puffer + Fortschrittsbalken
  let progress = morseBuffer.length > 0
    ? map(millis() - lastInputTime, 0, LETTER_TIMEOUT, 0, 1, true) : 0;
  drawBuffer(progress);

  drawHUD();
}

// ── Pinch-Erkennung ───────────────────────────────
function detectPinches(hand) {
  let kp = hand.keypoints;

  // Handgrösse: Handgelenk → Mittelfinger-MCP
  let scale = dist(kp[0].x, kp[0].y, kp[9].x, kp[9].y);
  if (scale === 0) return;

  let thumb  = kp[4];   // Daumen-Spitze
  let pinky  = kp[20];  // Kleiner-Finger-Spitze
  let middle = kp[12];  // Mittelfinger-Spitze

  let dotDist  = dist(thumb.x, thumb.y, pinky.x,  pinky.y)  / scale;
  let dashDist = dist(thumb.x, thumb.y, middle.x, middle.y) / scale;

  // Smooth für Visualisierung
  smoothDotDist  = lerp(smoothDotDist,  dotDist,  DIST_SMOOTH);
  smoothDashDist = lerp(smoothDashDist, dashDist, DIST_SMOOTH);

  // DOT: Daumen + kleiner Finger
  if (dotDist < PINCH_THRESHOLD) {
    if (!dotWasPinching) {
      addSymbol(".");
      dotWasPinching = true;
    }
  } else {
    dotWasPinching = false;
  }

  // DASH: Daumen + Mittelfinger
  if (dashDist < PINCH_THRESHOLD) {
    if (!dashWasPinching) {
      addSymbol("-");
      dashWasPinching = true;
    }
  } else {
    dashWasPinching = false;
  }

  // Visuelles Feedback zwischen den Fingern
  drawPinchLine(thumb, pinky,  smoothDotDist,  "·", color(80, 220, 160));
  drawPinchLine(thumb, middle, smoothDashDist, "–", color(255, 180, 60));
}

function drawPinchLine(a, b, normDist, label, col) {
  let active = normDist < PINCH_THRESHOLD;
  let alpha   = active ? 255 : 100;

  // Linie zwischen den Fingerspitzen
  stroke(red(col), green(col), blue(col), alpha);
  strokeWeight(active ? 3 : 1.5);
  line(a.x, a.y, b.x, b.y);

  // Punkte auf den Spitzen
  noStroke();
  fill(red(col), green(col), blue(col), alpha);
  circle(a.x, a.y, active ? 22 : 14);
  circle(b.x, b.y, active ? 22 : 14);

  // Label beim Pinch
  if (active) {
    fill(255);
    textSize(22);
    textAlign(CENTER, CENTER);
    let mx = (a.x + b.x) / 2;
    let my = (a.y + b.y) / 2 - 30;
    text(label, mx, my);
  }
  noStroke();
}

function drawHandSkeleton(hand) {
  let kp = hand.keypoints;

  // Verbindungen zeichnen (Fingerstruktur)
  let connections = [
    [0,1],[1,2],[2,3],[3,4],       // Daumen
    [0,5],[5,6],[6,7],[7,8],       // Zeigefinger
    [0,9],[9,10],[10,11],[11,12],  // Mittelfinger
    [0,13],[13,14],[14,15],[15,16],// Ringfinger
    [0,17],[17,18],[18,19],[19,20],// Kleiner Finger
    [5,9],[9,13],[13,17]           // Handfläche
  ];

  stroke(255, 255, 255, 50);
  strokeWeight(100);
  for (let [a, b] of connections) {
    if (kp[a] && kp[b]) line(kp[a].x, kp[a].y, kp[b].x, kp[b].y);
  }

  // Keypoints
  for (let j = 0; j < kp.length; j++) {
    // Spitzen der relevanten Finger hervorheben
    let isKey = [4, 12, 20].includes(j);
    fill(
      map(j, 0, kp.length, 0, 255),
      200,
      map(j, 0, kp.length, 255, 0),
      isKey ? 220 : 120
    );
    noStroke();
    circle(kp[j].x, kp[j].y, isKey ? 12 : 7);
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
  fill(255, 255, 255, 150);
  noStroke();
  textAlign(LEFT);
  textSize(15);
  let x = 18, y = 25;
  text("🤙 Daumen + kleiner Finger  →  · (Punkt)",  x, y);
  text("🤘 Daumen + Mittelfinger    →  – (Strich)", x, y + 22);
  text("⏱  Pause 1.5s               →  Buchstabe",  x, y + 44);
  text("⌨  .  –  Space              (Fallback)",    x, y + 66);
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

// ── HandPose Callback ─────────────────────────────
function gotHands(results) {
  hands = results;
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