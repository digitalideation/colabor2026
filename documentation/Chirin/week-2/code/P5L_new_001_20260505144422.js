// {"P5LIVE":{"name":"new_001","mod":1777992263022}} 

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  background(0);
  
}

function draw() {
  fill(255,40,240,30);
  if (mouseIsPressed == true) {
    ellipse(mouseX, mouseY, 50, 50);
  }
}