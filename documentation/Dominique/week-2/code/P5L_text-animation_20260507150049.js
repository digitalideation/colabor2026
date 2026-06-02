// {"P5LIVE":{"name":"text-animation","mod":1778166049426}} 

let live

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	live = frameCount%10
	frameRate(5)
	
	background(230)
	fill(10)
	textSize(100)
	textFont("monospace")
	// Schriftschnitte von System 
	textStyle(ITALIC)
	// WORD => Umbruch nach Wörtern / CHAR => Umbruch nach einzelnen Buchstaben
	textWrap(CHAR)
	// Ausrichtung => LEFT / CENTER / RIGHT
	textAlign(LEFT)
	// LineHeight => Ausgang gleiche Grösse wie Schrift
	textLeading(32*(live/4))
	// repeat wiederholt den text
	
	text("aaoo aooo oaaa".repeat(100), 
		10, 10, windowWidth/1.1, windowHeight)
	
	
	// text("oaooopoo  ".repeat(100), 
	// 	100, 100, windowWidth/1.2, windowHeight)
		
	
	// text("see this is a word that is breaking no matter what just break everything", 
	// 	100, 100, windowWidth/1.2, windowHeight)
}