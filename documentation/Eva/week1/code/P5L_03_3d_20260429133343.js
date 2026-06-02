// {"P5LIVE":{"name":"03_3d","mod":1777469623794}} 

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	
}

function draw() {
	background(0)
	orbitControl()
	fill(255)
	
	push()
	translate(100, -100, -500)
	box(200)
	pop()
	
	
	strokeWeight(3)
	
	push()
	stroke (255,0,0)
	line(0,0,0, width,0,0)
	stroke (0,255,0)
	line(0,0,0, 0,-height,0)
	stroke(0,0,255)
	line(0,0,0, 0,0,1000)
	pop()
}