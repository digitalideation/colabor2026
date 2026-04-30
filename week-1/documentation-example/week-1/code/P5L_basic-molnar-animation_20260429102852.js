// {"P5LIVE":{"name":"basic-molnar-animation","mod":1777458532143}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2
}

function draw() {
	background(255)
	noFill()
	strokeWeight(3)
	stroke(0)
	// animation!
	// calculate the dimension of the square
	// based on a sin function

	// for loop
	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 0)
		strokeWeight(3)
		if(i == 0) {
			// fill(0, 255, 0)
			stroke(0, 0, 255)
			strokeWeight(1)
		}

		if(i == 4) {
			// fill(0, 255, 0)
			stroke(0, 0, 255)
			strokeWeight(1)
		}

		square(
			posX + offsetX,
			posY + offsetY,
			(dimX) - (reduction * i)
		)
	}
	
		// for loop
	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 0)
		strokeWeight(3)
		if(i == 0) {
			// fill(0, 255, 0)
			stroke(0, 0, 255)
			strokeWeight(1)
		}

		if(i == 4) {
			// fill(0, 255, 0)
			stroke(0, 0, 255)
			strokeWeight(1)
		}

		square(
			posX + offsetX,
			-330 + posY + offsetY,
			(dimX) - (reduction * i)
		)
	}
	
		// for loop
	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 0)
		strokeWeight(3)
		if(i == 0) {
			// fill(0, 255, 0)
			stroke(0, 0, 255)
			strokeWeight(1)
		}

		if(i == 4) {
			// fill(0, 255, 0)
			stroke(0, 0, 255)
			strokeWeight(1)
		}

		square(
			-330 + posX + offsetX,
			posY + offsetY,
			(dimX) - (reduction * i)
		)
	}
	// global animation parameters
	dimX = 300 + sin(frameCount * 4) * 10
	num = 10
	reduction = dimX / num

	tmcs(1200, 200, 2, 250, 10)
	tmcs(1200, 500, 6, 350, 13)
}
// this function draws squares at position
// x and y, and they move randomly 
// a tiny bit
function tmcs(x, y, speed, dim, num){
	
	let dimension = dim + sin(frameCount * speed) * 10
	// num = 10
	let reduction = dimension / num
	
	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 0)
		strokeWeight(3)
		square(
			x,
			y,
			(dimension) - (reduction * i)
		)
	}
}