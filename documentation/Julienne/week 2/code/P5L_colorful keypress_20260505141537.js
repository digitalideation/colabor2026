// {"P5LIVE":{"name":"colorful keypress","mod":1777990537599}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(80);
  fill(255);
  background(200);
}

function draw() {
  strokeWeight(4)
  stroke(0);
  fill(random(255), random(255), random(255));
  text(key, mouseX, mouseY); // Draw at coordinate (20,75)
}