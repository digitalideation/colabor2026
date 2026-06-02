// {"P5LIVE":{"name":"bouncing_cube_01","mod":1777474659473}} 

let posX = 0 
let posY = 0 
let boxDim = 100
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	background(255)
}

function draw() {
	background(0,0,255)
	orbitControl()
	fill(255)
	
	posX+= 5
	posY = posY - 5
	if(posX > (width / 2)+(boxDim / 2)){
		//posX = 0
		posX =- width/2 
	}
	
	if(posY < -(height / 2)){
		posY = 0
	}
	
	push()
	translate(posX, posY, 0)
	box(boxDim)
	pop()
	stroke(0)
	
	stroke(255,0,0)
	strokeWeight(3)
	push()
	line(0,0,0, width, 0, 0)
	line(0,0,0,0,-height,0)
	stroke(255)
	line(0,0,0,0,0,1000)
	pop()
}