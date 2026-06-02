// {"P5LIVE":{"name":"basic_molnar_animation","mod":1777462386488}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 255, 200)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width * 0.5
	posY = height * 0.5
}

function draw() {
	background (100,100,255)
	noFill()
	strokeWeight (2)
	stroke(0)
	let count = 20
	for (let i = 0; i < count; i++){
		let dimension = width /count
		let posX = dimension / 2 + (i * dimension)
		for (let j = 0; j < count; j++){
			let posY = dimension / 2 + (j * dimension)
			tmcs (posX, posY, dimension, 10, 400)
			
		}
		
	}
}




// this function draws squares at position
// posX and posY, and they moce randomly
// a tiny bit
function tmcs (x, y, dim, num, speed) {
	
	let dimension = dim + sin(frameCount * speed * 10)
	//num = 10
	reduction = dimension / num
	
	for(let i = 0; i < num; i++){
		let offsetX = random (7)
		let offsetY = random (7)
		stroke (255, 0, 255)
		strokeWeight (3)
		square(
			x + offsetX, 
			y + offsetY, 
			(dimension) - (reduction * i)
		)
	}
}