// {"P5LIVE":{"name":"02_VeraMolnar","mod":1777385901971}} 

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
	
	//animation
	// calculte the dimension of the square based on sin fuction
	dimX = 200 + sin(frameCount * 4) * 50	// = 50+1
	num = 10
	reduction = dimX / num 
// for loop
for (let i = 0; i < num; i++){
	let offsetX = random(40)
	let offsetY = random(40)
	square (
		posX + offsetX,
		posY + offsetY,
	(dimX) - (reduction * i), 
	)}
}