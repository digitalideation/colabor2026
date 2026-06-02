// {"P5LIVE":{"name":"recoding","mod":1777910165193}} 

//COMMAND + SHIFT + S
//OPTION + SHIFT + S

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background (0,15,255,15) //r,g,b,a)
	fill (frameCount% 255)
	circle(mouseX, mouseY,100)
	
	
	print (frameCount%200) //BIG number % (limited by) smallnumber
	
}
