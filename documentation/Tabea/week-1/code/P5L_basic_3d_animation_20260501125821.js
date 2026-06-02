// {"P5LIVE":{"name":"basic_3d_animation","mod":1777640301721}} 

let posX = 0
let posY=0
let boxDim = 100
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	background(0)
	
}

function draw() {
	background(0)
	orbitControl()
	fill(255)
	stroke(0,255,0)
	
	//posX++ or posX+=1 or posX = posX+1 (to the right)
	//posX-- or posX = posX-1 (to the left)
	
	posX+=10
	posY = posY - 10
		
	if (posX > (width/2)+(boxDim/2)) {
		posX = 0 - (width/2)
	}
	
	if (posY < - (height/2)) {
		posY = 0
	}
	
	
		
	push()
	translate (posX,posY,0)
	box(boxDim)
	pop()
	
	

	
	
	// coordinate system
	strokeWeight(2)
	push()
	stroke(255, 0, 0)
	line(0,0,0, width, 0, 0)
	stroke(0, 255, 0)
	line(0,0,0, 0, height, 0)
	stroke(0, 0, 255)
	line(0,0,0, 0, 0, 1000)
	pop()

}