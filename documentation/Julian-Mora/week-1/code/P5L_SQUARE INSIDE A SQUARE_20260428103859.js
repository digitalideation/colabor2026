// {"P5LIVE":{"name":"SQUARE INSIDE A SQUARE","mod":1777372739563}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background (0)
	frameRate(10)
	rectMode(CENTER)
	
	//this is ignored
}

let dim = 200
let reduction = 20
let posX = 700
let posY = 300




function draw() {
	//paint program very basic
	fill(0)
	stroke(255)
	strokeWeight(3)
	square(posX,posY,dim)
	square(posX,posY,dim - (reduction * 1))
	square(posX,posY,dim - (reduction * 2))
	square(posX,posY,dim - (reduction * 3))
	square(posX,posY,dim - (reduction * 4))
	square(posX,posY,dim - (reduction * 5))
	
	// for loop 
	
	for(let i=0; i<6; i++){
	square(posX+300, posY, dim-(reduction * i))
}
	for(let i=0; i<10; i++){
	square(posX+500, posY+100, (dim+100) -(reduction * i))
	
		
	}


}

