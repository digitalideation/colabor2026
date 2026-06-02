// {"P5LIVE":{"name":"basic_paint_program","mod":1777639699958}} 

function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(200)
	background(0)
	
}

function draw() {
	// very basic paint program
	noStroke();
	ellipse(mouseX,mouseY,20);
}