// {"P5LIVE":{"name":"background snippet","mod":1780347193865}} 

let texts = ["BÄÄH BÄHH BÄÄH", "MÄÄH MÄHH MÄÄÄ", "BLÖÖÖK", "I AM A SHEEEEEP"]
let bgString = texts [0];
let dynamicLines = 40;
let textColor;
let textScale = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
  textColor = color(255);
}

function draw() {
  background(5);

  textSize(windowWidth / textScale);
  textFont("monospace");
  textAlign(LEFT, TOP);

  let completeLineText = bgString.repeat(
    floor(25 * sin(frameCount * 0.05) + 45)
  );

  for (let i = 0; i < dynamicLines; i++) {
    let b = map(i, 0, dynamicLines, 1, 0.2);

    fill(
      red(textColor) * b,
      green(textColor) * b,
      blue(textColor) * b
    );

    text(
      completeLineText,
      -100 + (i % 2 === 0 ? 1 : -1) * ((frameCount * 4) % 150),
      i * (windowHeight / dynamicLines)
    );
  }
}

function mousePressed() {
  textColor = color(random(255), random(255), random(255));
  textScale = random(200);
  bgString = random(texts);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}