// {"P5LIVE":{"name":"weight-changing-brush","mod":1777999050443}} 

function setup() {
	createCanvas(windowWidth,windowHeight);
	background(238, 255, 184);
	stroke(0);
}

function draw() {
  
	// Dynamische Stiftgrösse:
	// Sinus > puslierende Veränderung
	// map > übersetzt in Werte zwischen -1, 1 und 1, 30
	let pen1 = map(sin(frameCount*0.03),-1,1,1,30)
  
	// zeichnet, wenn Maus geklick
	if (mouseIsPressed) {
    	stroke(0);
    	strokeWeight(pen1);
    	line(prevX, prevY, mouseX, mouseY);
    	stroke(255)
  }
  // Linie der vorherigen Maus-Pos zur aktuellen
  prevX = mouseX;
  prevY = mouseY;
}

// Wenn Shift + s auf Tastatur gedrückt wird > Screenshot
function keyPressed(){
	if(key == 'S'){
		save('drawing.png')
	}
}