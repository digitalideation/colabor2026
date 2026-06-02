// {"P5LIVE":{"name":"sinus-cosinus","mod":1777999454347}} 

let number = 5
let speedX
let speedY

function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(255, 0, 157)
	background(12, 117, 0)
}

function draw() {
	// X-Bewegung > Kombi aus 2 Sinus-Wellen unterschiedliche Geschwindigkeit
	speedX = sin(frameCount * 0.02) * 100 + sin(frameCount * 0.08)*50
	// Y-Bewegung > Kombi aus 2 Cosinus-Wellen unterschiedliche Geschwindigkeit
	speedY = cos(frameCount * 0.02) * 100 + cos(frameCount * 0.02)*30
  
    // Zeichnet Kreis relativ zur Mitte des Bildschirms
	// Position durch speedX und speedY
	ellipse(width/2 + speedX,height/2 + speedY,100)
}
