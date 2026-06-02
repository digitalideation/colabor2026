// {"P5LIVE":{"name":"basic molar animation","mod":1777383428320}} 

let dim = 400
let num = 10
let reduction = dim/num
let posX=0 
let posY=0 




function setup() {
	createCanvas(windowWidth, windowHeight)
	background (255)
	frameRate(10)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width /2
	posY = height * 0.5
	

}



function draw() {
	background(255)
	noFill()
	strokeWeight(1)
	stroke(0)
 	dim=150 + (sin(frameCount) *50)
	num=20

	reduction = dim/num
	

	
	// for loop 
	
	for(let i=0; i<num; i++){
	square(posX, posY, (dim) - (reduction * i))
	
		
	}


}

