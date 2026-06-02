// {"P5LIVE":{"name":"29.04 3D cube ","mod":1778007057422}} 

let posX = 0
let posY = 0
let boxDim = 100
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	
}

function draw() {
	background (215, 235, 250)
	//orbitControl()
	fill (255)
	
	//posX = posX + 1 
	// posX += 1
	posX ++
	posY -= posY - 10
	if (posX > (width/2) + (boxDim)){
		posX = 0
	}
	
	if (posY < - (height / 2)) {
		posY = 0		
	}
	push()
	translate(posX, posY, 0)
	box (boxDim)
	pop()
}