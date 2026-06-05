// {"P5LIVE":{"name":"basic molar animation","mod":1777468077636}} 

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
	let numX = 10 //number of squares






	//forloop
	for(let i = 0; i < numX; i++) { //here we use i variable because it is numX
		let dimension = width / numX //define dimension
		let posX = dimension / 2 + (i * dimension)
		for(let j = 0; j < numX; j++) { //here we use j variable because it is numY the number here defines the ammount of rows, we use numX
			let posY = dimension / 2 + (j * dimension)
			tmcs(posX, posY, 4, dimension, 5) //5 is the num parameter, if i affect it here it affects the ammount of squares


		}
	}



}



// this function draws squares at position
// x and y, and they move randomly 
// a tiny bit
function tmcs(x, y, speed, dim, num) {

	let dimension = dim + sin(frameCount * speed) * 10
	// num = 10
	let reduction = dimension / num

	for(let i = 0; i < num; i++) {
		let offsetX = noise(frameCount * 0.00001 , frameCount * 0.00003, i) *10
		let offsetY = noise(frameCount * 0.00001 , frameCount * 0.0003, i) *10
		let r = random(255)
		let g = random(255)
		let b = random(255)
		fill (255) //fill the little square with color
		if(i == num-1) { //the center square is defined by num-1 for the fill
			fill(random(255))
		}
		stroke(r, g, b)
		strokeWeight(3)
		square(
			x + offsetX,
			y + offsetY,
			(dimension) - (reduction * i)
		)
	}
}