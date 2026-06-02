// {"P5LIVE":{"name":"textdraft_001","mod":1778159151731}} 

function setup() {
	createCanvas(windowWidth, windowHeight)

}

function draw() {
	let live = frameCount % 100;
	let words = ["hmm", "lecker", "schmecker"]

	frameRate(10)
	background(0, 255, 0)
	fill(255, 0, 0)
	textSize(100)
	textWrap(CHAR)
	textFont('monospace')
	textAlign(CENTER)
	textStyle(ITALIC)
	textLeading(40 * (live / 50))
	text(words[0].repeat(100), 10, 10, windowWidth / 1.1, windowHeight)
}