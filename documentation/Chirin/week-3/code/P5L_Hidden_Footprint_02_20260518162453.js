// {"P5LIVE":{"name":"Hidden_Footprint_02","mod":1779121493764}} 

const words = "AI Hidden Water Footprint";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(5, 15, 30);
  textFont('monospace');
  textSize(24);
  textWrap(WORD);
}

function mousePressed() {
  let x = mouseX;
  let y = mouseY;
  
  for (let i = 0; i < 15; i++) {
    let angle = noise(x * 0.005, y * 0.005) * TWO_PI * 2;
    
    x += cos(angle) * 25;
    y += sin(angle) * 25;
    
    fill(0, random(100, 200), random(200, 255), 40);
    
    push();
    translate(x, y);
    rotate(angle * 0.1);
    text(words, 0, 0, 200);
    pop();
  }
}

function keyPressed() {
  if (key === 'c' || key === 'C') background(5, 15, 30);
}