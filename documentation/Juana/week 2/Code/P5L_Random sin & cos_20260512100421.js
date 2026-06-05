// {"P5LIVE":{"name":"Random sin & cos","mod":1778580261667}} 

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200);
  stroke(0);
}

function draw() {
  //background (100)
  
  let pen1 = map(sin(frameCount*0.055),-1,1,2,50)
  
  let diffrentX = map(mouseX, 0, width, 0, width/2)
  
  let speedX = sin(frameCount * 0.02) * 300 + sin(frameCount * 0.08)*50
  let speedY = cos(frameCount * 0.02) * 300 + cos(frameCount * 0.08)*50

    ellipse(mouseX -50,speedX, mouseY +50,speedY, pen1)
  
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(pen1);
    
    line(prevX, prevY, mouseX, mouseY);
    ellipse(mouseX,mouseY, pen1, pen1)
  
	// ellipse (diffrentX, height/2 -100,20)	
  }
  
  prevX = mouseX;
  prevY = mouseY;
}

function keyPressed(){
	if(key == 'S'){
		save('drawing.png')
	}
}