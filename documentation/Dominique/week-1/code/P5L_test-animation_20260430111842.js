// {"P5LIVE":{"name":"test-animation","mod":1777547922298}} 

let dimX = 450
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(141, 186, 165)
	// The rectangle is drawn from the center
	rectMode(CENTER)
	angleMode(DEGREES)
	// Position in the center of the screen
	posX = width / 2
	posY = height / 2
}

function draw() {
	// Redraw the background, important for animation
	background(141, 186, 165)
	noFill()
	strokeWeight(1)
	stroke(0)
	// Animation: Width changes due to
	// frameCount increases → pulsating movement
	dimX = (sin(frameCount * 4) * 300)
	// number of rectangles
	num = 20
	// Recalculating distance between sizes
	reduction = dimX / num

	// for-loop - draws multiple squares
	for(let i = 0; i < num; i++) {
		rect(posX, posY, 
		(dimX) - (reduction * i), 
		(dimY) - (dimY/num * 1))
	}
	//(text(frameCount, 400, 400)
}

