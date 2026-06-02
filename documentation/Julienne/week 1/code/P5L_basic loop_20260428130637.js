// {"P5LIVE":{"name":"basic loop","mod":1777381597104}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background("#EDE8D0")
	rectMode(CENTER)
}


let dim = 200
let reduction = 20
let posX = 400
let posY = 400

function draw() {
	noFill()
	strokeWeight(1)
	stroke(0)
	square(posX,posY,dim)
	square(posX,posY,dim-(reduction*1))
	square(posX,posY,dim-(reduction*2))
	square(posX,posY,dim-(reduction*3))
	square(posX,posY,dim-(reduction*4))
	square(posX,posY,dim-(reduction*5))
	
	//loop
	for(let i = 0; i < 10; i++){
		square(posX + -100, posY, dim - (reduction * i))
	}
	
	for(let i = 0; i < 10; i++){
		square(posX, posY-100, dim - (reduction * i))
	}
	for(let i = 0; i < 10; i++){
		square(posX + 100, posY, dim - (reduction * i))
	}
	for(let i = 0; i < 10; i++){
		square(posX, posY+100, dim - (reduction * i))
	}
}