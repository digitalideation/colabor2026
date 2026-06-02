// {"P5LIVE":{"name":"new_001","mod":1777988307010}} 

let penColor = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	stroke(0);
}

function draw() {

	let pen1 = map(sin(frameCount * 0.005), -1, 1, 10, 50)
	let differentX = map(mouseX, 0, width, 0, width / 2)

	// ellipse (width/2 + cos(frameCount*0.025)*200,height/2 + sin(frameCount*0.025)*200,100)


	if(mouseIsPressed) {
		stroke(penColor);

		strokeWeight(pen1);
		line(prevX, prevY, mouseX, mouseY);
		//ellipse(mouseX,mouseY, pen1, pen1)
		//ellipse (mouseX,height/2,20)
		//ellipse (differentX,height/2-100,20)
	}
	prevX = mouseX;
	prevY = mouseY;
	//random color for pen
	penColor = color((255), random(255), random(255));
}

function keyPressed() {
	if(key == 'S') {
		save('drawing.png')
	}
}