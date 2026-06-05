// {"P5LIVE":{"name":"recoding","mod":1777388310201}} 

let dimX= 300
let dimY=dimX
let num= 17
let reduction = dimX/ num
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

	fill(255,0,0)
	strokeWeight (1)
	stroke("magenta")
	dimX=(sin(frameCount*4)*300)
	num=20


	reduction=dimX/num 
	//for-loop
	for(let i=0;i<num;i++){
		rect(posX, posY,
		(dimX)-(reduction*i),
		
		(dimY/num*i))
		
	}
}

