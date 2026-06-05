// {"P5LIVE":{"name":"moving box","mod":1777472826881}} 

let posX = 0
let posY = 0
let boxDim = 100

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	
}

function draw() {
background(255)
orbitControl()
fill(255)
posX++
posY  = posY - 10
if (posX > (width/ 2) + (boxDim / 2)){
	//posX = 0
	posX = - (width/2)
}

if (posY < - (height / 2 )){
	posY = 0
}

push()
translate(posX,posY,0)
stroke(0)
box(boxDim)
pop()

stroke (255,0,0)
strokeWeight(5)
push()
line(0,0,0, width, 0,0)
stroke (0,255,0)
line(0,0,0, 0, -height,0)
stroke (0,0,255)
line(0,0,0, 0, 0,1000)
pop()
	
}