// {"P5LIVE":{"name":"Circle growing","mod":1778008235568}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	// background(0, 15, 255,15) // r, g, b, a
	fill(frameCount %  255 ,255,0 )
	circle(mouseX, mouseY, frameCount % 200)
	
	print(frameCount % 200) //BIGnumber % (limited by) smallnumber
}