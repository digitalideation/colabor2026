// {"P5LIVE":{"name":"3D square","mod":1779371656873}} 

let posX = 0
let posY = 0
let boxDim = 100
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	
}



function draw() {
	background(0)
	orbitControl()
	fill(255)
	
	posX+= 5
	posY = posY - 10
	if(posX > (width / 2)+(boxDim / 2)){
		posX = -width/2
	}
	
	if(posY < height / 2){
		posY = posX
	}
	push()
	translate(posX, posY, 0)
	box(100)
	pop()
	
	strokeWeight(3)
	push()
	stroke(255, 0, 0)
	line(0,0,0, width, 0, 0)
	stroke(0, 255, 0)
	line(0,0,0,0, -height, 0)
	stroke(0, 0, 255)
	line(0,0,0,0,0, 1000)
	pop()
	
	
	
	
}