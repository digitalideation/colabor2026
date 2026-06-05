// {"P5LIVE":{"name":"basic_molnar_rotation","mod":1777641062350}} 

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
	dimX = (sin(frameCount * 4) * 300)
	num = 20
	reduction = dimX / num

	// for-loop
	for(let i = 0; i < num; i++) {
		rect(posX, posY,
			(dimX) - (dimX / num * i),
			(dimY) - (dimY / num * i)
		)
	}
}