// {"P5LIVE":{"name":"basic_square","mod":1777545391737}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(232, 222, 252)
}

function draw() {
	// left square with border-radius
	fill(105, 95, 125)
	stroke(193, 180, 219)
	strokeWeight(5)
	square(300, 200, 100, 20)
	
	// right square
	fill(114, 43, 255)
	noStroke()
	square(500, 200, 100)
}