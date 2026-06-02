// {"P5LIVE":{"name":"basic_molnar_tunnel","mod":1777994789362}} 

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
	background (255, 25)
	noFill()
	strokeWeight(1)
	stroke(0)
	dimX = 300 + (tan(frameCount * 3) * 600)*(sin(frameCount * 2))
	num = 20
	reduction = dimX / num
	//for loop
	for(let i = 0; i < num; i++){
		rect(posX, posY, 
		(dimX) - (reduction * i))
	}
	text (frameCount, 400, 400)
}