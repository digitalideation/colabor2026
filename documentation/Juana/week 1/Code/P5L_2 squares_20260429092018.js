// {"P5LIVE":{"name":"2 squares","mod":1777454418897}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	//
	fill(255, 100, 100)
	stroke(0, 255, 0)
	strokeWeight(2)
	square(300, 200, 100)

	fill(100, 255, 100)
	noStroke()
	square(500, 200, 100, 10)
	
}