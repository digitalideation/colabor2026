// {"P5LIVE":{"name":"image_square","mod":1777546624476}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 224, 201)
	rectMode(CENTER)
}

let dim = 200
let reduction = 30
let posX = 800
let posY = 200

function draw() {
	noFill()
	strokeWeight(1)
	stroke(0)
	// basic variant square in square
	square(posX, posY, dim)
	square(posX, posY, dim - (reduction * 1))
	square(posX, posY, dim - (reduction * 2))
	square(posX, posY, dim - (reduction * 3))
	square(posX, posY, dim - (reduction * 4))
	square(posX, posY, dim - (reduction * 5))

	//for loop - multiple square
	for(let i = 0; i < 6; i++) {
		square(posX+300, posY, dim - (reduction * i))
	}
	 // for loop - brown-squares
	for(let i = 0; i < 10; i++) {
		square(posX+500, posY+100, dim - (reduction * i))
		stroke(117, 50, 0)
	}
}

