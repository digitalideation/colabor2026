// {"P5LIVE":{"name":"Week 2, 7 ","mod":"1778584964583"}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  textFont("monospace");
  textSize(18);
}
function draw() {
  background(10);
  let line = "10".repeat(80);
  for (let i = 0; i < 30; i++) {
    let y = (frameCount * 4 + i * 30) % height;
    if ((i + floor(frameCount / 5)) % 2 === 0) {
      fill(0, 220, 80);    // green
    } else {
      fill(220, 40, 40);   // red
    }
    text(line, 0, y);
  }
}