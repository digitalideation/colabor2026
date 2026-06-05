// {"P5LIVE":{"name":"many sqwuares","mod":1779382423570}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background('#ff0')
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
	let bruh = 16
	for(let i = 0; i < bruh; i++) {
		let dimension = width / bruh
		let posX = dimension / 2 + (i * dimension)
		for(let n = 0; n < bruh; n++) {
			let posY = dimension / 2 + (n * dimension)
			tmcs(posX, posY, dimension, 1, i)
		}



	}
}

function tmcs(x, y, dim, speed, num) {

	let dimension = dim + sin(frameCount * speed)*5
	// num = 10
	let reduction = dimension / num

	for(let i = 4; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
	
		stroke(19, 0, 0)
		strokeWeight(2)
		square(
			x, + //offsetX,
			y -offsetY,
			(dimension) - (reduction * i)
		)
	}
}