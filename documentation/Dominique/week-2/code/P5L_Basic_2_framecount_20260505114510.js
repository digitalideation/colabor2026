// {"P5LIVE":{"name":"Basic_2_framecount","mod":1777981510438}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	// transparenter HG > Spuren
	background(0, 15, 255, 15)
	// ändert die Farbe mit der Zeit:
	// Rot variiert (0–255), Grün 100% an, Blau 0%
	// erzeugt fliessenden Übergang zwischen Grün und Gelb
	fill(frameCount % 255, 255, 0)
	// zeichnet Kreis an Maus-Pos, änder Grösse
	circle(mouseX, mouseY, frameCount % 200)
	
	// gibt aktuelle Frame-Nummer aus > Debuging
	print(frameCount)
}