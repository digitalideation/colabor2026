// {"P5LIVE":{"name":"basic_squares","mod":1777639865932}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background (0)
	
}

function draw() {
	fill(255,255,255)
	stroke(0,255,0)
	strokeWeight(10)
	square(400,200,100)
	
	
	fill(100,100,255)
	noStroke()
	square(600, 200, 150, 10)
	
	noFill()
	stroke(255,100,255)
	square(850, 200, 300)
}