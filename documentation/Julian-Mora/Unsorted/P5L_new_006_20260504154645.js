// {"P5LIVE":{"name":"new_006","mod":1777909605115}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background (0,15,255) //r,g,b,a)
	fill (frameCount% 255)
	circle(mouseX, mouseY,frameCount%200)
}