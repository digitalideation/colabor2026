// {"P5LIVE":{"name":"03_3d","mod":1777468964513}} 

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	
}

function draw() {
	background(0)
	orbitControl()
	fill(255)
	translate(100, -100, -500)
	box(200)
	
	line(0,0,0, width,0,0)
	stroke (255,0,0)
}