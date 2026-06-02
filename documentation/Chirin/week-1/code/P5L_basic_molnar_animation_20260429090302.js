// {"P5LIVE":{"name":"basic_molnar_animation","mod":1777453382053}} 

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
	dimX = 200 + (sin(frameCount * 5) * 200) 
	num = 20
	reduction = dimX / num
	// for loop
	for(let i = 0; i < num ; i++){
		rect(posX, posY, 
		(dimX) - (reduction * i), 
		(dimY) - (dimY / num * i)
		)
	}
	//text(frameCount, 400, 400)
}
