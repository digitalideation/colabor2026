// {"P5LIVE":{"name":"Morsecode 3","mod":1780319932110}} 

let bgColor;
let typedText = "";
let morseItems = [];

let synth;

// Größe der Morsezeichen
const morseSize = 2;

// Morse Alphabet
const morse = {
  a: ".-", b: "-...", c: "-.-.", d: "-..",
  e: ".", f: "..-.", g: "--.", h: "....",
  i: "..", j: ".---", k: "-.-", l: ".-..",
  m: "--", n: "-.", o: "---", p: ".--.",
  q: "--.-", r: ".-.", s: "...", t: "-",
  u: "..-", v: "...-", w: ".--",
  x: "-..-", y: "-.--", z: "--.."
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(255, 0, 127);

  // Sound
  synth = new p5.Oscillator('sine');
  synth.start();
  synth.amp(0);

  textFont('monospace');
}

function draw() {
background(bgColor);

  // Morsezeichen zeichnen
for (let item of morseItems) {

  // leichte Eigenbewegung
  item.targetX += random(-0.3, 0.3);
  item.targetY += random(-0.3, 0.3);

  // Abstand zu anderen prüfen
  for (let other of morseItems) {
    if (item !== other) {
      let d = dist(item.x, item.y, other.x, other.y);

      // Mindestabstand
      if (d < 170) {
        let angle = atan2(
          item.y - other.y,
          item.x - other.x
        );
        let force = (170 - d) * 0.05;
        item.targetX += cos(angle) * force;
        item.targetY += sin(angle) * force;
      }
    }
  }

  // im Bildschirm halten
  item.targetX = constrain(item.targetX, 100, width - 100);
  item.targetY = constrain(item.targetY, 100, height - 200);

  // weiche Bewegung
  item.x = lerp(item.x, item.targetX, 0.03);
  item.y = lerp(item.y, item.targetY, 0.03);

  drawMorse(item);
}
  // Getippter Text unten
  fill(255);
  textAlign(CENTER);
  textSize(40);
  text(typedText, width / 2, height - 80);
}

// Tastatureingabe
function keyTyped() {

  let k = key.toLowerCase();

  // Buchstaben
  if (morse[k]) {
    typedText += k;
    bgColor = color(random(255), random(255), random(255));
let item = {
  code: morse[k],

  // startet in der Mitte
  x: width / 2,
  y: height / 2,

  // Zielposition
  targetX: random(150, width - 150),
  targetY: random(150, height - 150)
};

morseItems.push(item);

// alle bestehenden Zeichen verschieben
for (let other of morseItems) {
  other.targetX += random(-100, 100);
  other.targetY += random(-100, 100);

  // innerhalb Bildschirm halten
  other.targetX = constrain(other.targetX, 100, width - 100);
  other.targetY = constrain(other.targetY, 100, height - 100);
}

    playMorse(morse[k]);
  }

  // Leerzeichen = nur Pause
  if (k === " ") {
    typedText += " ";
    // kleine stille Pause
    setTimeout(() => {}, 500);
  }
}

// Backspace
function keyPressed() {
  if (keyCode === BACKSPACE) {
    typedText = typedText.slice(0, -1);
    // nur löschen wenn letztes Zeichen Morse war
    if (morseItems.length > 0) {
      morseItems.pop();
    }
  }
}

// Morse zeichnen
function drawMorse(item) {
  let spacing = 30 * morseSize;
  for (let i = 0; i < item.code.length; i++) {

    let sym = item.code[i];

    let px = item.x + (i - item.code.length / 2) * spacing;
    let py = item.y;

    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(40 * morseSize);
    if (sym === ".") {
      text(".", px, py);
    }
    if (sym === "-") {
      text("–", px, py); // echter Gedankenstrich (en dash)
    }
  }
}
// Morse Sound
function playMorse(code) {

  let time = 0;

  for (let sym of code) {
    let duration = sym === "." ? 120 : 350;
    setTimeout(() => {
      synth.freq(400);
      synth.amp(0.35, 0.02);
      setTimeout(() => {
        synth.amp(0, 0.05);
      }, duration);
    }, time);
    time += duration + 120;
  }
}