// {"P5LIVE":{"name":"basic molar animation","mod":1777387578539}} 

let dimX = 400
let dimY = dimX
let num = 17
let reduction = dimX/num
let posX=0 
let posY=0 




function setup() {
	createCanvas(windowWidth, windowHeight)
	background (255)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width /2
	posY = height * 0.5
	

}



function draw() {
	background(255)
	noFill()
	strokeWeight(3)
	stroke(0)
	//animation
	//calculate the dimension of the SQUARE
	//based on a sin function
	
	
	
	
 	dimX=200 + (sin(frameCount * 4) *100)
	num=10

	reduction = dimX/num
	

	
	// for loop 
	
	for(let i=0; i<num; i++){
	let offsetX= random (7)
	let offsetY = random (7)
	stroke (255,0,0)
	if (i=<2){
		stroke (0,0,255)
	}
	
	square(
		posX + offsetX, 
		posY + offsetY,
	(dimX) - (reduction * i), 
	
	)	
	}

text (frameCount, 400, height - 20)

}

