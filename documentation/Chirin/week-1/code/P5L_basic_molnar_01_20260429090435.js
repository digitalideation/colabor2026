// {"P5LIVE":{"name":"basic_molnar_01","mod":1777453475808}} 

let dimX = 400
let dimY = dimX
let num = 10
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(200, 0, 100)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2 
}

function draw() {
	//
	background(200, 0, 100)
	noFill()
	strokeWeight(1)
	stroke(0)
	//animation
	//calculate the dimension of the square
	// based on a sin function
	dimX = 200 + sin(frameCount * 3) * 100
	num = 10
	reduction = dimX / num
	// for loop
	for(let i = 0; i < num ; i++){
		let offsetX = random(10)
		let offsetY = random(10)
		stroke(255)
		if(i > 2){
			stroke(0, 255, 0)
		}
		square(
			posX + offsetX, 
			posY + offsetY, 
		(dimX) - (reduction * i)
		)
	}
	//text(frameCount, 400, 400)
}