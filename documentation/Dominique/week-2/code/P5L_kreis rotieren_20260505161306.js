// {"P5LIVE":{"name":"kreis rotieren","mod":1777997586221}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(7, 29, 232);
  // Anfangsstrichfarbe
  stroke(255, 76, 5);
  
}
function draw() { 
	
	// Dynamische Stiftgröse:
	// Sinus > zwischen -1 und 1
	// map > übersetzt in Werte zwischen 10 und 50
	let pen1 = map(sin(frameCount * 0.025), -1, 1, 10, 50)
	
	// Mapping der Maus-X-Pos auf halbe Breite
	let diffrentX = map(mouseX, 0, width, 0, width / 2)
	// zeichent Ellipse, bewegt sich kreisförmit in Mitte 
	ellipse(width/2 + cos(frameCount*0.025) * 200, height/2 + sin(frameCount * 0.025) * 200, 100)
	
	// Wenn Maus gedrückt wird:
	// gibt es Strichfarbe & dynamische Breite
	if (mouseIsPressed == true) {
  		stroke(255, 76, 5)
  		strokeWeight(pen1)
	}
	// Speichert aktuelle Maus-Pos
	prevX = mouseX;
	prevY = mouseY;
}

// Bild wird gespeichert, wenn Shift + s geklickt wird
function keyPressed(){
	if (key == 'S') {
		save('drawing.png')
	}
}