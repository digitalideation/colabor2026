// {"P5LIVE":{"name":"sqwuare","mod":1779382502022}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(230)
	rectMode(CENTER)
}

//let list= [100, 200 ,300]
let bigness = 200
let reduction = 20
let posX = 700
let posY = 400
let mm = 1

function draw() {

noFill()
strokeWeight(1)
stroke(0)
square(posX-100, posY, bigness)
square(posX-100, posY, bigness- (reduction * 1))



for (let i=0;i<110;i++) {
	square(posX, posY, bigness-(reduction*i))
	strokeWeight(mm*i-50)
	stroke(1)
	
	}
	
for (let i=0; i<10; i++){
	square(posX+200, posY+100, (bigness+100)-(reduction*1))
}
for (let i=0; i<10; i++){
	
}
}