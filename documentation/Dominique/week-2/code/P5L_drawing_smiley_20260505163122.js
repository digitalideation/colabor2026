// {"P5LIVE":{"name":"drawing_smiley","mod":1777998682466}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  stroke(0);
  
}
function draw() { 
	
	// Dynamische Stiftgrösse:
	// Sinus > zwischen -1 bis 1
	// map > übersetzt in Werte zwischen 1 und 20
	let pen1 = map(sin(frameCount * 0.025), -1, 1, 1, 20)
	
	// nur zeichnen, wenn Maus geklickt wird: 
	if (mouseIsPressed == true) {
  		stroke(0)
  		strokeWeight(pen1)
  		// 1. Ellipse bei Maus
  		ellipse(mouseX, mouseY, pen1, pen1);
  		// 2. Ellipse leicht versetzt zur Maus
  		ellipse(mouseX+50, mouseY+50, pen1);
  		// 3. Ellipsen versetzt zur Maus & 
  		ellipse(mouseX-50+ cos(frameCount*0.025) * 200, mouseY + sin (frameCount*0.025) *200, pen1, pen1);
	}
}

// Wenn Shift + s auf Tastatur gedrückt wird > Screenshot
function keyPressed(){
	if(key == 'S') {
		save('drawing.png')
	}
}