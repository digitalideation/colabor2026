// {"P5LIVE":{"name":"new_001","mod":1777993192841}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
background(255)
}

function draw() {
	fill(sin(frameCount * 0.001) * 300, sin(frameCount * 0.001) * 400, sin(frameCount* 0.001) * 30)
	noStroke()
	ellipse(width / 2 + sin(frameCount * .01)*400 + cos(frameCount*.05)*200, height / 2 + sin(frameCount * .01)*400, 20)
}