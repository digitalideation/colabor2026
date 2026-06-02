// {"P5LIVE":{"name":"new_002","mod":1778153308900}} 

function setup() {
	createCanvas(windowWidth, windowHeight)

}

function draw() {
	background(230)
	fill(10)
	textSize(100)
	textWrap(WORD)
	textFont('monospace')
	textAlign(LEFT, CENTER)
	textStyle(BOLDITALIC)
	textLeading(-40)
	text("having trouble reading this?", 100, 100, windowWidth / 1.5, windowHeight)
}