// {"P5LIVE":{"name":"bouncing sqaures","mod":1777544657101}} 

let dimX = 500
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
	strokeWeight(2)
	stroke(0)
	let numX = 10
	noLoop()
	
	for(let i = 0; i < numX; i++){
		let dimension = width / numX
		let posX = dimension / 2 + (i * dimension)
		for(let j = 0; j < 10; j++){
		    let posY = dimension / 2 + (j * dimension)
		coffee(posX, posY, dimension, 10, 5)
		}
	}
}

// this function draws sqaures at position xy
function coffee(posX, posY, dim, num, speed) {
	
	let dimension = dim + (sin(frameCount * speed) * 30)
	//num = 5
	let reduction = dimension / num
	
		for(let i = 0; i < num; i++){
		let offsetX = noise (10)
		let offsetY = noise (10)
		stroke(0, 0, 255)
		if(i < 1){
			stroke(random(0,255),random(0,255), random(0,255))
	}
square(posX + offsetX, posY + offsetY,(dimension) - (reduction * i))
}
	
}





