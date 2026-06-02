// {"P5LIVE":{"name":"2d-box-bewegung-farbe","mod":1777638331548}} 

let x, y;
let xspeed, yspeed;
let r, g, b;

// Grösse Rechteck
const rectW = 80;
const rectH = 60;

function setup() {
	// WEBGL: Ursprung in Mitte
	createCanvas(windowWidth, windowHeight, WEBGL);
	// Zufällige Startposition auf Bildschirm
	x = random(width - rectW);
	y = random(height - rectH);
	// Geschwindigkeit
	xspeed = 6;
	yspeed = 6;
	// Anfangsfarbe setzten
	pickcolor();
}

// Funktion zufällige Farbe
function pickcolor() {
	r = random(100, 255);
	g = random(100, 255);
	b = random(100, 255);
}

// Verschiebt Koordinatensystem
// von Mitte nach oben links
function draw() {
	translate(-width / 2, -height / 2);
	background(0);

	noStroke();
	fill(r, g, b); 
	rect(x, y, rectW, rectH);

// Position pro Frame verändern
	x += xspeed;
	y += yspeed;

// -------- Aufprall X-Achse --------
	// rechter Rand
	if (x + rectW >= width) {
    	xspeed *= -1; // Richtung umkehren
    	x = width - rectW; // Korrigieren, nicht aus Bild
    	pickcolor(); // neue Farbe
    } 
    // linker Rand
    else if (x <= 0) {
    	xspeed *= -1;
    	x = 0;
    	pickcolor();
	}

// -------- Aufprall Y-Achse --------
	// Unterer Rand
	if (y + rectH >= height) {
    	yspeed *= -1;
    	y = height - rectH;
		pickcolor();
	} 
	// Oberer Rand
    else if (y <= 0) {
    	yspeed *= -1;
    	y = 0;
    	pickcolor();
    }
}