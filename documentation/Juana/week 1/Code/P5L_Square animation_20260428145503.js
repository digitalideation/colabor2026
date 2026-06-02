// {"P5LIVE":{"name":"Square animation","mod":1777388103915}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0
function setup() {
	createCanvas(windowWidth, windowHeight)
	background (255)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2
}
function draw() {
	background(255)
	noFill()
	strokeWeight(1)
	stroke(19, 15, 247)
	// Animation
	// calculate the dimension of the square
	//based on a sin function	
	dimX = 200 + sin (frameCount * 1) * 50
	num = 20
	reduction = dimX / num
	// for loop 
	for (let i = 0; i < num; i++){
		let offsetX = random(7)
		let offsetY = random(7) 
		stroke(19, 15, 247)
		if (i >= 5){
			stroke(232, 16, 49)
		}
		square (
			posX + offsetX,
			posY + offsetY,
		(dimX) - (reduction * i)
		)
	}
	
}	