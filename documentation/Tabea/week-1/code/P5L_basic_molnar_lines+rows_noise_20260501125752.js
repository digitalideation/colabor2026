// {"P5LIVE":{"name":"basic_molnar_lines+rows_noise","mod":1777640272566}} 

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
	background(0)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2
}


function draw() {
	background(0)
	noFill()
	stroke(0)
	let numX = 10

	for(let i = 0; i < numX; i++) {
		let dimension = width / numX
		let posX = (dimension / 2) + (i * dimension)
		for(let j = 0; j < 5; j++) {
			let posY = dimension / 2 + (j * dimension) 
			tmcs(posX, posY, dimension, 10, 4)
		}
	}
	//noLoop()
}



// this function draws swaures at position
// x and y, and the ymove randomly
// a tiny bit

function tmcs(x, y, dim, num, speed) {

	let dimension = dim + sin(frameCount * speed) * 10
	let reduction = dimension / num

	for(let i = 0; i < num; i++) {
		let offsetX = noise (frameCount * 0.001, frameCount * 0.003, i) * 10
		let offsetY = noise (frameCount * 0.01, frameCount * 0.03, i) * 10
		stroke(255,255,255)
		strokeWeight(2)

		square(
			x + offsetX,
			y + offsetY,
			(dimension) - (reduction * i)
		)
	}
}