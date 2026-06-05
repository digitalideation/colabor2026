// {"P5LIVE":{"name":"basic_molnar_lines+rows_colourful","mod":1777640290406}} 

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
}



// this function draws swaures at position
// x and y, and the ymove randomly
// a tiny bit

function tmcs(x, y, dim, num, speed) {

	let dimension = dim + sin(frameCount * speed) * 10
	let reduction = dimension / num

	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		let r = random (255)
		let g = random (255)
		let b = random (255)
		stroke(r, g, b)
		strokeWeight(2)

		square(
			x + offsetX,
			y + offsetY,
			(dimension) - (reduction * i)
		)
	}
}