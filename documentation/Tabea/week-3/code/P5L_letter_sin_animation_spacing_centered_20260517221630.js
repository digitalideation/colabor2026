// {"P5LIVE":{"name":"letter_sin_animation_spacing_centered","mod":1779056190912}} 

let word = "SOUND";
let spread = 40

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(255);
  textSize(20);
  textAlign(LEFT);
  
  for (let i = 0; i < 50; i++) {
    fill(255);
    let spac = abs(sin(frameCount * 0.013 + i * 0.2) * spread);
    textSpacing(word.repeat(30), spac, 20 * i);
  }
}

function textSpacing(txt, spacing, y) {
  let totalWidth = 0;
  for (let char of txt) {
    totalWidth += textWidth(char) + spacing;
  }

  let x = width / 2 - totalWidth / 2;

  for (let char of txt) {
    text(char, x, y);
    x += textWidth(char) + spacing;
  }
}