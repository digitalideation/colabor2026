// {"P5LIVE":{"name":"new_004","mod":1779382518646}} 

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
	background('#00f')
	noFill()
	strokeWeight(3)
	stroke(0)
	let bruh = 26
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

	let dimension = dim + sin(frameCount * speed) * 50
	// num = 10
	let reduction = dimension / num

	for(let i = 0; i < num; i++) {
		let offsetX = noise(frameCount * 0.01, frameCount * 0.01, i)*1
		let offsetY = random(1)
		stroke(255, 0, 0)
		strokeWeight(3)
		square(
			x+offsetX,
			y+offsetY,
			(dimension) - (reduction * i)
		)
	}
}