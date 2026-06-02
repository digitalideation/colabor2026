// {"P5LIVE":{"name":"new_001","mod":1777909661134}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background(0,15,255,15) // r,g,b,a
	fill(frameCount % 255)
	circle(mouseX,mouseY,frameCount % 200)
	
	print(frameCount)
}