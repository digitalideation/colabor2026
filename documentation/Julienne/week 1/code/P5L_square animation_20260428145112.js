// {"P5LIVE":{"name":"square animation","mod":1777387872447}} 

let dimX = 500
let dimY = dimX
let num = 30
let reduction = dimX/ num
let posX = 0
let posY = 0


function setup() {
	createCanvas(windowWidth, windowHeight)
	background("#ff00ff")
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width * 0.5
	posY = height * 0.5
	
}


function draw() {
	background("#ff00ff")
	noFill()
	strokeWeight(2)
	stroke(0)
	dimX = 200 + (sin(frameCount*4)* 100)
	num = 20
	reduction = dimX / num
	//loop
	for(let i = 0; i < num; i++){
		let offsetX = (random(15))
		let offsetY = (random(15))
		stroke(0,0,255)
		if (i < 7){
			stroke("#00ebf4")
		}
		square(
			posX + offsetX,
			posY + offsetY, 
			(dimX) - (reduction * i)
			)
			
	}
	

}