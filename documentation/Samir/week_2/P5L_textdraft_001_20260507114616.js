// {"P5LIVE":{"name":"textdraft_001","mod":1778154376778}} 

function setup() {
	createCanvas(windowWidth, windowHeight)

}

function draw() {
	let live = frameCount%50;
	frameRate(10)
	background(0,255,0)
	fill(255,0,0)
	textSize(100)
	textWrap(CHAR)
	textFont('monospace')
	textAlign(CENTER)
	textStyle(ITALIC)
	textLeading(32*(live/10))
	text("creative coding".repeat(100),10,10, windowWidth/1.1, windowHeight)
}