// {"P5LIVE":{"name":"02_VeraMolnar","mod":1777384696152}} 

let dimX = 400
let dimY = dimX
let num = 10
let reduction = dimX / num
let posX = 0
let posY = 0 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(12, 23, 134)
	// rectMode describes where a rectangle is drawn from – usually from top left corner
	rectMode(CENTER)
	angleMode(DEGREES)
	
	// width and height are automatically from the canvas 
	// and we defined it as WindowWidth and WindowHeight
	posX = width/2
	posY = height/2
}

function draw() {
	background(255)
	noFill()
	strokeWeight(1)
	stroke (0)
	dimX = 300 + (sin(frameCount * 2) * 300)	// = 50+1
	num = 20

	reduction = dimX / num 
	
	// square(posX, posY, dim - (reduction * 1))
	// square(posX, posY, dim - (reduction * 2))
	// square(posX, posY, dim - (reduction * 3))
	// square(posX, posY, dim - (reduction * 4))
	// square(posX, posY, dim - (reduction * 5))
	// square(posX, posY, dim - (reduction * 6))

// for loop
for (let i = 0; i < num; i++){
	rect(posX, posY, 
	(dimX) - (reduction * i), 
	(dimY)-(dimY/num * i))}
}