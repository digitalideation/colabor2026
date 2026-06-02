// {"P5LIVE":{"name":"new_003","mod":1777472506798}} 

let posX = 0
let posY=0
let boxDim = 100
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	
}

function draw() {
	background(0)
	//orbitControl()
	fill(255)
	
	//posX++ //or posX+=1 or posX = posX+1 (to the right)
	//posX-- or posX = posX-1 (to the left)
	//posY = 100 * sin(posX/50)
	
	posX+=10
	posY= posY -10	
	if (posX > (width/2)+(boxDim)) {
		posX = 0
	}
		
		if (posY < -(height / 2)){
			posY =0
		}
		
		
		
	push()
	translate (posX,posY,0)
	box(boxDim)
	pop()
	
	

	
	
	// coordinate system
	push()
	strokeWeight(3)
	stroke(255,0,0)
	line (0,0,0,width,0,0)
	stroke(0,255,0)
	line (0,height,0,0,0,0)
	stroke(0,0,255)
	line (0,0,0,0,0,-1000)
	pop()
}