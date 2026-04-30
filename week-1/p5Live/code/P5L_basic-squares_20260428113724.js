// {"P5LIVE":{"name":"basic-squares","mod":1777376244394}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
}

function draw() {
	// 
	fill(255, 100, 100)
	strokeWeight(2)
	stroke(0, 255, 0)
	square(300, 200, 100)
	fill(100, 255, 100)
	noStroke()
	square(500, 200, 100)
}