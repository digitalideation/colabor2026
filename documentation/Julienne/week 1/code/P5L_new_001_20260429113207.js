// {"P5LIVE":{"name":"new_001","mod":1777462327873}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background("#0000ff")
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2
}

function draw() {
	background("#0000ff")
	noFill()
	strokeWeight(3)
	stroke(0)
	let numX = 10

	for(let i = 0; i < numX; i++) {
		let dimension = width / numX
		let posX = dimension / 2 + (i * dimension)
		for (let j = 0; j < numX; j ++){
			let posY = dimension / 2  + (j * dimension)
		tmcs(posX, posY, 4, dimension, 10)
		}
	}
}
// this function draws squares at position
// x and y, and they move randomly 
// a tiny bit
function tmcs(x, y, speed, dim, num) {

	let dimension = dim + sin(frameCount * speed) * 10
	// num = 10
	let reduction = dimension / num

	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255)
		strokeWeight(3)
		square(
			x + offsetX,
			y + offsetY,
			(dimension) - (reduction * i)
		)
	}
}