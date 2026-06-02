// {"P5LIVE":{"name":"Week 2, 4","mod":1779129420662}} 

// {"P5LIVE":{"name":"text","mod":1778153322582}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background (230);
	fill(10);
	textSize(100)
	textWrap(WORD)
	textFont ("american typewriter")
	textAlign (CENTER)
	textLeading(240)
	text("creative coding hslu ", 0, 400, windowWidth, windowHeight)
}