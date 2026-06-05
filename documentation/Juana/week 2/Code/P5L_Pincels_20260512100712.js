// {"P5LIVE":{"name":"Pincels","mod":1778580432311}} 

let moveX = 0;
let moveY = 0;
let position = 0;

function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(155) 

  if (keyIsDown(49)) { // 49 = Taste "1"
  
	fill (0,0,255)
	noStroke()
	ellipse(mouseX, mouseY, 20);
	ellipse(mouseX + 40, mouseY + 40, 20);
	ellipse(mouseX - 40, mouseY - 40, 20);
	
  }

  if (keyIsDown(50)) { // 39 = Taste "2"
    noStroke()
    fill (100,0,200)
    rect(mouseX + sin(frameCount * 0.05) *100, mouseY + cos(frameCount * 0.05)* 100, 40);
  }
  
  if (keyIsDown(39)) {
    position -= 2;
  }

  fill(255, 0, 0);
  ellipse(width / 2 + position, height / 2, 50 + moveX, 50 + moveY);

  text("keyCode: " + keyCode, 50, 100);
}1