// {"P5LIVE":{"name":"3d-box-bewegung","mod":1777639556260}} 

// Position 3D-Raum
let x;
let y;
let z;
// Geschwindigkeit pro Richtung
let xspeed;
let yspeed;
let zspeed;
// Raumtiefe
let depth = 2000;
// Farben
let r, g, b;

// WEBGL = 3D & Ursprung in Mitte
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	// Zufällige Startposition auf Bildschirm
	x = random(width);
	y = random(height);
	z = random(-depth,0);
	// Geschwindigkeit
	xspeed = 4;
	yspeed = 4;
	zspeed = 4;
	// Anfangsfarbe setzten
	pickcolor();
}

// Funktion zufällige Farbe
function pickcolor() {
	r = random(255);
	g = random(255);
	b = random(255);
}

// Verschiebt Koordinatensystem
// von Mitte nach oben links
function draw() {
	translate(-width/2, -height/2)
	background(0);
	fill(255);
	fill(r, g, b);

	// Transformation starten!
	push()
	// Würfel an Pos verschieben
	translate (x, y, z)
	// Würfel zeichnen
	box (100)
	// Transformation beenden!
	pop()

// -------- Bewegung --------
	x = x + xspeed; // rechts / links
	y = y + yspeed; // unten / oben
	z = z + zspeed; // tiefe
  
 // -------- Aufprall Z-Achse --------
	// vor
	if (z >= 100) {
		zspeed = -zspeed; // Richtung umkehren
		z = 100;	// Pos korrigieren, nicht aus Bild
		pickcolor(); // neue Farbe
	} 
	// zurück
	else if (z <= -depth) {
		zspeed = -zspeed;
		z = -depth;
	pickcolor();
	}

 // -------- Aufprall X-Achse --------
	if (x >= width) {
		xspeed = -xspeed;
    	x = width;
    	pickcolor();
	} 
	else if (x <= 0) {
    	xspeed = -xspeed;
		x = 0;
    	pickcolor();
	}

 // -------- Aufprall Y-Achse --------
	if (y >= height) {
    	yspeed = -yspeed;
    	y = height;
    	pickcolor();
	} 
	else if (y <= 0) {
    	yspeed = -yspeed;
    	y = 0;
    	pickcolor();
	}
}