// {"P5LIVE":{"name":"Basic-1-Framecount","mod":1777981133150}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	// transparenter HG > Spuren
	background(0, 0, 255, 55)
	// zeichnet Kreis, von rechts nach links
	// startet immer wieder links
	circle(frameCount*10%width, height/2, 250)
	noStroke()
	print(mouseX)
	fill(255, 0, 153)
	
	// Text Styling
	textSize(200)
	textAlign(CENTER) //bla bla bla 
	// zeichnet zuletzt gedrückte Taste
	text(key, width/2, height/2)

}