// {"P5LIVE":{"name":"Week 1,2","mod":1779129420662}} 

// {"P5LIVE":{"name":"molnar day 3 ","mod":1777468155606}} 

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
	background(255, 100,50)
	noFill()
	strokeWeight(3)
	stroke(0)
	let numX = 27
	for(let i = 0; i < numX; i++){
		let dimension = width / numX 
		let posX = dimension / numX + (i * dimension) 
		for (let j = 0; j < 18; j++){
			let posY = dimension / 2 + (j * dimension)
					tmcs(posX, posY, 4, dimension, 10)
		}
	}
	// animation!
	// calculate the dimension of the square
	// based on a sin function

	// for 

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
		let col = color (random(255),random(255),random(255))
		stroke(col)
		strokeWeight(1)
		square(
			x + offsetX,
			y + offsetY,
			(dimension) - (reduction * i), 10, 80, 50, 100
		)
	}
}