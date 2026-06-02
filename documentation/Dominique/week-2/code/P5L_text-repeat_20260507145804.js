// {"P5LIVE":{"name":"text-repeat","mod":1778165885016}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	frameRate(5)
	
	background(230)
	fill(10)
	textSize(100)
	textFont("Parkinsans")
	// Schriftschnitte von System 
	textStyle(NORMAL)
	// WORD => Umbruch nach Wörtern / CHAR => Umbruch nach einzelnen Buchstaben
	textWrap(WORD)
	// Ausrichtung => LEFT / CENTER / RIGHT
	textAlign(LEFT)
	// LineHeight => Ausgang gleiche Grösse wie Schrift
	textLeading(40)
	// repeat wiederholt den text
	
	text("oaooopoo  ".repeat(100), 
		100, 100, windowWidth/1.2, windowHeight)
}