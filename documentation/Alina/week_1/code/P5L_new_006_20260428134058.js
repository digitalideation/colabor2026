// {"P5LIVE":{"name":"new_006","mod":1777383658865}} 

let dim= 300
let num= 17
let reduction = dim/ num
let posX= 0
let posY=0


function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX= width/2 //width 
	posY= height/2
	
}

function draw() {
	
	background(255)

	noFill()
	strokeWeight (1)
	stroke(0)
	dim=150+ (sin(frameCount)*50)
	num=20

	reduction=dim/num 
	//for-loop
	for(let i=0;i<num;i++){
		square(posX, posY,(dim)-(reduction*i))
	}
}

