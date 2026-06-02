// {"P5LIVE":{"name":"drawing","mod":1777998126717}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  stroke(0);
  
}
function draw() { 
	// Dynamische Stiftgrösse:
	// Sinus = pulsierende Veränderung > Ergebnis Wert zwischen 40 – 60
	let pen1 = map(sin(frameCount * 0.025), -1, 1, 40, 60)

	// Wenn die Maus gecklickt wird:
	if (mouseIsPressed == true) {
		// 1. Ellipse schwarz
  		stroke(0)
  		strokeWeight(pen1)
  		ellipse(mouseX, mouseY, pen1, pen1);
  		
  		// 1. Ellipse weiss
  		stroke(255)
  		ellipse(mouseX+20, mouseY+30, pen1, pen1);
	}
}

// Wenn Shift + s auf Tastatur gedrückt wird > Screenshot
function keyPressed(){
	if(key == 'S') {
		save('drawing.png')
	}
}