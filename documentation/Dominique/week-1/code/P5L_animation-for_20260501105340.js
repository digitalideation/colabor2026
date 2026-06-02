// {"P5LIVE":{"name":"animation-for","mod":1777632820826}} 

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
	// HG neu füllen für Animation
	background(141, 186, 165)
	noFill()
	strokeWeight(1)
	stroke(0)
	
	// animation - Wellenbewegung
	// calculate the dimension of the square
	// based on a sin function
	dimX = 200 + (sin(frameCount * 4) * 50)
	// Anz Quadrate
	num = 10
	// Berechnung Verkleinerung Quadrate
	reduction = dimX / num

	// for-loop -> zeichnet mehrere Quadrare
	for(let i = 0; i < num; i++) {
		// Zufällige Verschiebung 0-20px
		let offsetX = random(20)
		let offsetY = random(20)
		// quadrate werden gezeichnet, immer kleiner
		square(
			posX + offsetX, 
			posY + offsetY, 
		(dimX) - (reduction * i), 
		)
	}
	//(text(frameCount, 400, 400)
	//noLoop()
}