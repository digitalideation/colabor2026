// {"P5LIVE":{"name":"blindensprache","mod":1779376291748}} 

let input;
let words = [];
let wordIndex = 0;
let letterIndex = 0;

let t = 0;
let bgColor;
let started = false;

let synth;
let lastChar = "";

let braille = {
  a: [1], b: [1, 3], c: [1, 2], d: [1, 2, 4], e: [1, 4],
  f: [1, 2, 3], g: [1, 2, 3, 4], h: [1, 3, 4], i: [2, 3], j: [2, 3, 4],
  k: [1, 5], l: [1, 3, 5], m: [1, 2, 5], n: [1, 2, 4, 5], o: [1, 4, 5],
  p: [1, 2, 3, 4, 5], r: [1, 3, 4, 5], s: [2, 3, 5], t: [2, 3, 4, 5],
  u: [1, 5, 6], v: [1, 3, 5, 6], w: [2, 3, 4, 6],
  x: [1, 2, 5, 6], y: [1, 2, 4, 5, 6], z: [1, 4, 5, 6]
};

let notes = {
  a: 110, b: 116, c: 123, d: 131, e: 147,
  f: 165, g: 175, h: 196, i: 220, j: 247,
  k: 262, l: 294, m: 330, n: 349, o: 392,
  p: 440, r: 494, s: 523, t: 587,
  u: 659, v: 698, w: 784,
  x: 880, y: 988, z: 1047
};

let anim = [0, 0, 0, 0, 0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);

  bgColor = color(0, 0, 255);

  // Sound
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

  // Tempo
  if (millis() - t > 180) {
    letterIndex++;
    t = millis();
  }

  let word = words[wordIndex % words.length] || "";
  let ch = word[letterIndex] || "";

  // SOUND (nur wenn neuer Buchstabe!)
  if (ch !== lastChar) {
    let freq = notes[ch];

    if (freq) {
      synth.freq(freq);
      synth.amp(0.35, 0.05);

      setTimeout(() => {
        synth.amp(0, 0.08);
      }, 80);
    }

    lastChar = ch;
  }

  // Wortwechsel
  if (letterIndex >= word.length) {
    wordIndex++;
    letterIndex = 0;

    bgColor = color(
      random(50, 255),
      random(50, 255),
      random(50, 255)
    );
  }

  let dots = braille[ch] || [];

  for (let n = 1; n <= 6; n++) {
    let target = dots.includes(n) ? 1 : 0;
    anim[n - 1] = lerp(anim[n - 1], target, 0.25);
  }

  drawBraille();

  fill(255);
  textAlign(CENTER);
  textSize(28);
  text(word, width / 2, height / 2 + 200);
}

function drawBraille() {
  let cx = width / 2;
  let cy = height / 2;

  let s = min(width, height) * 0.13;

  let pos = [
    [-0.6, -0.8], [0.6, -0.8],
    [-0.6, 0], [0.6, 0],
    [-0.6, 0.8], [0.6, 0.8]
  ];

  for (let n = 1; n <= 6; n++) {
    let x = cx + pos[n - 1][0] * s;
    let y = cy + pos[n - 1][1] * s;

    let a = anim[n - 1];

    fill(255, 120);
    noStroke();
    circle(x, y, s * 0.2);

    fill(255);
    circle(x, y, s * 0.2 + a * (s * 0.4));
  }
}