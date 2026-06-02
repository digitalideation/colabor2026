// {"P5LIVE":{"name":"basic molar animation","mod":1777461045843}} 

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
	background(255)
	noFill()
	strokeWeight(3)
	stroke(0)


for(let i =0; i <2;i++){
	let dimension = width/2
	let posX = i*dimension
	tmcs(posX, 400, 4,dimension, 10) 
	
	
}


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
		stroke(255, 0, 0)
		strokeWeight(3)
		square(
			x+offsetX,
			y+offsetY,
			(dimension) - (reduction * i)
		)
	}
}