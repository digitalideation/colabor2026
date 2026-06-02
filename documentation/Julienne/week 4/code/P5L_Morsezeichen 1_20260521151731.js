// {"P5LIVE":{"name":"Morsezeichen 1","mod":1779376651413}} 

let input;
let words = [];
let wordIndex = 0;
let letterIndex = 0;
let symbolIndex = 0;

let t = 0;
let bgColor;
let started = false;

let synth;
let lastSymbol = "";

let morseSize = 4; 

let morse = {
  a: ".-",    b: "-...",  c: "-.-.",  d: "-..",   e: ".",
  f: "..-.",  g: "--.",   h: "....",  i: "..",    j: ".---",
  k: "-.-",   l: ".-..",  m: "--",    n: "-.",    o: "---",
  p: ".--.",  q: "--.-",  r: ".-.",   s: "...",   t: "-",
  u: "..-",   v: "...-",  w: ".--",   x: "-..-",  y: "-.--",
  z: "--.."
};

let currentSymbols = "";

function setup() {
  createCanvas(windowWidth, windowHeight);

  bgColor = color(20, 80, 180);

  synth = new p5.Oscillator('sine');
  synth.start();
  synth.amp(0);

  input = createInput("");
  input.position(20, 20);

  input.input(() => {
    let text = input.value().toLowerCase().trim();

    if (text.length > 0) {
      words = text.split(" ").filter(w => w.length > 0);
      wordIndex = 0;
      letterIndex = 0;
      symbolIndex = 0;
      started = true;
    } else {
      started = false;
    }
  });
}

function draw() {
  background(bgColor);

  if (!started) {
    fill(255);
    textAlign(CENTER);
    textSize(20);
    text("Text eingeben um zu starten", width / 2, height / 2);
    return;
  }

  if (millis() - t > 200) {
    stepMorse();
    t = millis();
  }

  drawMorse();

  let word = words[wordIndex % words.length] || "";
  fill(255);
  textAlign(CENTER);
  textSize(150);
  text(word, width / 2, height / 2 + 200);
}

function stepMorse() {
  let word = words[wordIndex % words.length] || "";
  let ch = word[letterIndex];

  if (!ch) return;

  let code = morse[ch] || "";
  currentSymbols = code;

  symbolIndex++;

  if (symbolIndex >= code.length) {
    symbolIndex = 0;
    letterIndex++;

    if (letterIndex >= word.length) {
      wordIndex++;
      letterIndex = 0;

      bgColor = color(
        random(50, 255),
        random(50, 255),
        random(50, 255)
      );
    }
  }

  triggerSound(code[symbolIndex]);
}

function triggerSound(sym) {
  if (!sym) return;

  // immer gleiche Tonhöhe
  synth.freq(400);

  // Punkt = kurz
  if (sym === ".") {
    synth.amp(0.35, 0.02);

    setTimeout(() => {
      synth.amp(0, 0.05);
    }, 80);
  }

  // Strich = lang
  if (sym === "-") {
    synth.amp(0.35, 0.02);

    setTimeout(() => {
      synth.amp(0, 0.05);
    }, 240);
  }
}

function drawMorse() {
  let x = width / 2 + 70;
  let y = height / 2;

  let spacing = 40 * morseSize;

  for (let i = 0; i < currentSymbols.length; i++) {
    let sym = currentSymbols[i];

    let px = x + (i - currentSymbols.length / 2) * spacing;


    if (sym === ".") {
      fill(255);
      noStroke();
      circle(px, y, 12 * morseSize);
    }


    if (sym === "-") {
      fill(255);
      noStroke();
      rect(
        px - 15 * morseSize,
        y - 6 * morseSize,
        30 * morseSize,
        12 * morseSize,
        4 * morseSize
      );
    }
  }
}