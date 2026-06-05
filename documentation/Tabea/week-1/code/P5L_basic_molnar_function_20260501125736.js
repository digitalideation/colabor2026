// {"P5LIVE":{"name":"basic_molnar_function","mod":1777640256266}} 

let dimX = 300
let dimY = dimX
let num = 20
let reduction = dimX / num
let posX = 0
let posY = 0
let x = 0
let y = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 255, 245)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2
}


function draw() {
	background(255, 255, 245)
	noFill()
	stroke(0)
	
	
	// for-loop (this draws several multicolour
	// squares wiggling within each other)
	//global animation
	//calculate the dimension of the square
	//based on a sin function
	//size dimX changes from 300 +1 to -1 (sin)
	dimX = 300 + sin(frameCount * 4) * 10
	num = 10
	reduction = dimX / num
	
	
	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 255)
		strokeWeight(3)
		if(i < 5) {
			strokeWeight(2)
			stroke(255, 255, 0)
		}
		if(i == 2) {
			stroke(0, 255, 255)
			strokeWeight(4)
		}
		if(i == 8) {
			stroke(0, 255, 0)
		}

		square(
			posX + offsetX,
			posY + offsetY,
			(dimX) - (reduction * i)
		)
		
	// here we implement function tmcs on the
	// position posX = 100 and posY = 100

	}
		tmcs(1200, 400, 250, 5, 7)
}

// this function draws swaures at position
// x and y, and the ymove randomly
// a tiny bit

function tmcs(x, y, dim, speed, num) {
	
	let dimension = dim + sin(frameCount * speed) * 10
	let reduction = dimension / num
	// adding let in front of a variable, the
	// variable is (re)defined. the definition
	// of the variable is only relevant for 
	// this function as the definition is 
	// within the function (local to function)
	// changing the function will not affect
	// anything outside the function
	
	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 255)
		strokeWeight(3)

		square(
			x + offsetX,
			y + offsetY,
			(dimension) - (reduction * i)
			)
	}
}