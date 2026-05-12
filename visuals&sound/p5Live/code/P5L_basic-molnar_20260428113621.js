// {"P5LIVE":{"name":"basic-molnar","mod":1777376181596}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
	rectMode(CENTER)
}
// let list= [100, 200, 300]
let dim = 200
let reduction = 30
let posX = 400
let posY = 300

function draw() {
	// 
	noFill()
	strokeWeight(1)
	stroke(0)
	square(posX, posY, dim)
	square(posX, posY, dim - (reduction * 1) )
	square(posX, posY, dim - (reduction * 2) )
	square(posX, posY, dim - (reduction * 3) )
	square(posX, posY, dim - (reduction * 4) )
	square(posX, posY, dim - (reduction * 5) )
	
	// for loop
	
	for(let i = 0; i < 6; i++){
		square(posX+300, posY, dim - (reduction * i))
	}
	
	for(let i = 0; i < 10; i++){
		square(posX+500, posY+100, (dim + 100) - (reduction * i))
	}
}