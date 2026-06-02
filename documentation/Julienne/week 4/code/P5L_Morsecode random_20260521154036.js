// {"P5LIVE":{"name":"Morsecode random","mod":1779378036408}} 

/*
	_HY5_p5_hydra // cc teddavis.org 2024
	pass p5 into hydra
	docs: https://github.com/ffd8/hy5


let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5
src(s0)
	.modulate(noize(2))
	.out()

// sandbox - end
*/
let typedText = "";
let morseItems = [];
let synth;
const morseSize = 2;

const morse = {
  a: ".-", b: "-...", c: "-.-.", d: "-..",
  e: ".", f: "..-.", g: "--.", h: "....",
  i: "..", j: ".---", k: "-.-", l: ".-..",
  m: "--", n: "-.", o: "---", p: ".--.",
  q: "--.-", r: ".-.", s: "...", t: "-",
  u: "..-", v: "...-", w: ".--",
  x: "-..-", y: "-.--", z: "--.."
};

// Loop-State
let lastTypedTime = 0;
let loopIndex = 0;
let loopTimeout = null;
let isLooping = false;
const IDLE_DELAY = 2000; // ms bis Loop startet

function setup() {
  createCanvas(windowWidth, windowHeight);
  synth = new p5.Oscillator('sine');
  synth.start();
  synth.amp(0);
  textFont('monospace');
  lastTypedTime = millis();
}

function draw() {
  background(20, 30, 60);

  for (let item of morseItems) {
    drawMorse(item);
  }

  fill(255);
  textAlign(CENTER);
  textSize(40);
  text(typedText, width / 2, height - 80);

  // Loop starten wenn idle und Zeichen vorhanden
  if (!isLooping && morseItems.length > 0 && millis() - lastTypedTime > IDLE_DELAY) {
    isLooping = true;
    loopIndex = 0;
    playNextLoopItem();
  }
}

function keyTyped() {
  let k = key.toLowerCase();

  if (morse[k]) {
    typedText += k;
    morseItems.push({
      code: morse[k],
      x: random(150, width - 150),
      y: random(150, height - 150)
    });
    playMorse(morse[k]);
  }

  if (k === " ") {
    typedText += " ";
  }

  // Loop unterbrechen bei Eingabe
  stopLoop();
  lastTypedTime = millis();
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    typedText = typedText.slice(0, -1);
    if (morseItems.length > 0) {
      morseItems.pop();
    }
  }
  stopLoop();
  lastTypedTime = millis();
}

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
    if (sym === ".") text(".", px, py);
    if (sym === "-") text("–", px, py);
  }
}

function playMorse(code) {
  let time = 0;
  for (let sym of code) {
    let duration = sym === "." ? 120 : 350;
    setTimeout(() => {
      synth.freq(400);
      synth.amp(0.35, 0.02);
      setTimeout(() => synth.amp(0, 0.05), duration);
    }, time);
    time += duration + 120;
  }
  // Gesamtdauer zurückgeben (für Loop-Timing)
  return time;
}

function getMorseDuration(code) {
  let time = 0;
  for (let sym of code) {
    let duration = sym === "." ? 120 : 350;
    time += duration + 120;
  }
  return time;
}

function playNextLoopItem() {
  if (!isLooping || morseItems.length === 0) return;

  let item = morseItems[loopIndex % morseItems.length];
  let duration = getMorseDuration(item.code);

  playMorse(item.code);

  loopIndex++;

  // Pause zwischen Zeichen: 400ms, dann nächstes
  loopTimeout = setTimeout(() => {
    playNextLoopItem();
  }, duration + 400);
}

function stopLoop() {
  isLooping = false;
  if (loopTimeout !== null) {
    clearTimeout(loopTimeout);
    loopTimeout = null;
  }
  synth.amp(0, 0.05);
}