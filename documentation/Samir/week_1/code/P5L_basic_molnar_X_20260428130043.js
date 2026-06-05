// {"P5LIVE":{"name":"basic_molnar_X","mod":1777381243456}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 255, 200)
	rectMode(CENTER)
}

let dim = 200
let reduction = 10
let posX = 500
let posY = 300


function draw() {
	noFill()
	strokeWeight(1)
	stroke(0)
	square(posX, posY, dim)
	square(posX, posY, dim - (reduction * 1))
	square(posX, posY, dim - (reduction * 2))
	square(posX, posY, dim - (reduction * 3))
	square(posX, posY, dim - (reduction * 4))
	square(posX, posY, dim - (reduction * 5))
	square(posX, posY, dim - (reduction * 6))
	
	for(let i = 0; i < 20; i++){
		square(posX, posY, dim - (reduction * i))
		square(posX+250, posY, dim - (reduction * i))
		square(posX+500, posY, dim - (reduction * i))
		square(posX+750, posY, dim - (reduction * i))
		//up
		square(posX, posY+50, dim - (reduction * i))
		square(posX+250, posY+50, dim - (reduction * i))
		square(posX+500, posY+50, dim - (reduction * i))
		square(posX+750, posY+50, dim - (reduction * i))
		//down
	}
}