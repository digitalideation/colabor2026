// {"P5LIVE":{"name":"basic_molnar_size-animation_offset","mod":1777640235312}} 

let dimX = 300
let dimY = dimX
let num = 20
let reduction = dimX / num
let posX = 0
let posY = 0

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
	strokeWeight(1)
	stroke(0)
	//animation
	//calculate the dimension of the square
	//based on a sin function
	dimX = 200 +(sin(frameCount * 4) * 150)
	num = 20
	reduction = dimX / num

	// for-loop
	for(let i = 0; i < num; i++) {
		let offsetX = random(40)
		let offsetY = random(40)
		square(
			posX + offsetX, 
			posY + offsetY,
			(dimX) - (dimX / num * i))
	}
}