// {"P5LIVE":{"name":"rechtecke loop","mod":1777637146288}} 

// {"P5LIVE":{"name":"basic-molnar-animation","mod":1777388069280}} 
// declare initiale variables for drawing a series of concentric squares
let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

// initialize the sketch
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
	// the following functions are very important for 
	// setting the squares origin point
	rectMode(CENTER)
	// and the angles to be calculated in the 0 - 360 mode
	// and not in radians 0 - 2*PI
	angleMode(DEGREES)
	// set initial posX and posY to half the canvas
	// so that the square sits in the center of the canvas
	posX = width / 2
	posY = height / 2
}

function draw() {
	background(255)
	noFill()
	strokeWeight(3)
	stroke(0)



	// for loop
	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 0)
		strokeWeight(3)
		if(i == 0) {
			stroke(0, 0, 255)
			strokeWeight(1)
		}

		if(i == 4) {
			stroke(0, 0, 255)
			strokeWeight(1)
		}
		square(
			posX + offsetX - 100,
			posY + offsetY,
			(dimX) - (reduction * i)
		)
	}

	dimX = 300 + sin(frameCount * 4) * 10
	num = 10
	reduction = dimX / num

	tmcs(300, 750, 300, 5, 10)
	tmcs(950, 750, 300, 10, 5)

}

// this function draws squars at position 
// X and Y and they move randomly a bit
function tmcs(x, y, dim, num, speed) {
	let dimension = dim + sin(frameCount * speed) * 10
	let reduction = dimension / num

	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 0)
		strokeWeight(3)
		square(
			x + offsetX,
			y + offsetY - 300,
			(dimension) - (reduction * i)
		)
	}
}