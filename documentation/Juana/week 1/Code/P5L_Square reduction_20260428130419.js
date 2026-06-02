// {"P5LIVE":{"name":"Square reduction","mod":1777381459996}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background (245, 153, 49)
	rectMode(CENTER)
}

let dim = 200
let reduction = 20
let posX = 400
let posY = 300

function draw() {
	//
	noFill()
	strokeWeight(2)
	stroke(19, 15, 247)
	square(posX, posY, dim)
	square(posX, posY, dim - (reduction * 1) )
	square(posX, posY, dim - (reduction * 2) )
	square(posX, posY, dim - (reduction * 3) )
	square(posX, posY, dim - (reduction * 4) )
	square(posX, posY, dim - (reduction * 5) )
	square(posX, posY, dim - (reduction * 6) )
	square(posX, posY, dim - (reduction * 7) )
	square(posX, posY, dim - (reduction * 8) )
	
	// for loop 
	
	for (let i = 0; i <9; i++){
		square(posX +210, posY, dim -(reduction * i))
	}
	
	for (let i = 0; i <9; i++){
		square(posX +420, posY, dim -(reduction * i))
	}
	
		for (let i = 0; i <9; i++){
		square(posX +630, posY, dim -(reduction * i))
	}
}	