// {"P5LIVE":{"name":"type_drawing","mod":1777994742730}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	map(mouseX, 0, windowWidth, 0, 255)
	map(mouseY, 0, windowHeight, 0 ,255)
	textSize(80);
	fill(255);
	background(200);
}

function draw() {
	let red = mouseX
	let green = mouseY
	let blue = 100
	let moveX = sin(frameCount * .02) * 300
	let moveY = sin(frameCount * .01) * 300
	strokeWeight(4)
	stroke(0);
	fill(red, green, blue);
	// text(key, width / 2 + moveX, height / 2 + moveY); // Draw at coordinate (20,75)
	text(key, mouseX, mouseY)
}