// {"P5LIVE":{"name":"Week 2, 8","mod":"1779129420662"}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
background(200);
  stroke(0);
}

function draw() {
  
  let pen1 = map(sin(frameCount*0.025),-1,1,2,100)
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(pen1);
    line(prevX, prevY, mouseX, mouseY);
    // ellipse(mouseX,mouseY, pen1, pen1)
  }
  prevX = mouseX;
  prevY = mouseY;
}

function keyPressed(){
	if(key == 'S'){
		save('drawing.png')
	}
}
