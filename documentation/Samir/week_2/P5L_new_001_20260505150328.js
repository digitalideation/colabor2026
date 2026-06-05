// {"P5LIVE":{"name":"new_001","mod":1777993408985}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
background(255)
}

function draw() {
	fill(noise(frameCount * 10) * 100, noise(frameCount * 10) * 100, noise(frameCount* 10) * 100)
	noStroke()
	ellipse(width / 2 + sin(frameCount * .01)*400 + cos(frameCount*.05)*200,
	height / 2 + sin(frameCount * .01)*400 + cos(frameCount*.03)*50, 40)
}