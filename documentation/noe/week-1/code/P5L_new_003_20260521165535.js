// {"P5LIVE":{"name":"new_003","mod":1779382535348}} 

function setup() {
	createCanvas(1000, 1000, WEBGL)
	background(0)
}

let posX = 0
let posY = 0
let boxDim = 100

function draw() {
	background(1)
	orbitControl()
	fill('#ff')


	posX++
	posY++
	//posY--
	if(posX > (width / 2) + (boxDim / 2)) {
		posX = 0+(boxDim/2)
	}
	if(posY > (height/2)+(boxDim/2)){
	posY=0+(boxDim/2)	
	}
	// if(posY < -(height / 2) - (boxDim / 2)) {
	//	posY = 0
	 //}
	push()
	translate(posX, posY*-1, 0)
	box(100)
	pop()

	push()
	stroke(255, 0, 0)
	line(0, 0, 0, width, 0, 0)
	stroke(0, 255, 0)
	line(0, 0, 0, 0, -height, 0)
	stroke(0, 0, 255)
	line(0, 0, 0, 0, 0, 1000)
	pop()

}