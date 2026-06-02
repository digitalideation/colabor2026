// {"P5LIVE":{"name":"First day","mod":1777544644884}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
	rectMode(CENTER)
}

let dim = 200
let reduction = 20
let posX = 400
let posY = 200

function draw(){
	noFill()
	strokeWeight(1)
	stroke(255)
	square(400, 200, dim)
	square(400, 200, dim - (reduction * 1) )
	square(400, 200, dim - (reduction * 2) )
	square(400, 200, dim - (reduction * 3) )
	square(400, 200, dim - (reduction * 4) )
	square(400, 200, dim - (reduction * 5) ) 
	
	// for loop
	
	for(let i = 0; i < 6; i++){
square(posX+300, posY, dim - (reduction * i))
	}
	
	for(let i = 0; i < 10; i++){
    square(posX+500, posY, dim - (reduction * i))
    
}
}