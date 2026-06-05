// {"P5LIVE":{"name":"basic squares","mod":1777636869610}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
}

function draw() {
	fill(255,0,100)
	stroke(255)
	square(300,200,100)
	strokeWeight(10)
	
	fill(20,0,100)
	stroke(255)
	square(400,200,200)
	strokeWeight(10)
	
	fill(100,0,10)
	square(600,200,300,50)
	
}