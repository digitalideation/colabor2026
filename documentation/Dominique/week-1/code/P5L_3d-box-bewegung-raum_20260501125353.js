// {"P5LIVE":{"name":"3d-box-bewegung-raum","mod":1777640033126}} 

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
// Farbe
let r, g, b;

// WEBGL = 3D! & Ursprung in Mitte
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	// Zufällige Startposition auf Bildschirm
	x = random(width);
	y = random(height);
	z = random(-depth, 100);
	// Geschwindigkeit
	xspeed = 4;
	yspeed = 4;
	zspeed = 4;
	// Anfangsfarbe setzen
	pickcolor();
}

// Funktion zufällige Farbe
function pickcolor() {
	r = random(255);
	g = random(255);
	b = random(255);
}

function draw() {
	background(255, 255, 255);
	// Kamera bewegen
	orbitControl();
	// Licht für 3D-Optik
	ambientLight(100);
	pointLight(255, 255, 255, 0, 0, 500);

// -------- RAUM-WÜRFEL --------
	push();
	noFill();              // nur Kanten sichtbar
	stroke(100);           // graue Linien
	strokeWeight(1);
	box(width, height, depth);
	pop();

// -------- BEWEGTE BOX --------
	noStroke();
	fill(r, g, b);
	// Transformation starten!
	push();
	// Würfel an Pos verschieben
	translate(x - width / 2, y - height / 2, z);
	// Würfel zeichnen
	box(100);
	// Transformation beenden!
	pop();

// -------- BEWEGUNG --------
	x += xspeed;
	y += yspeed;
	z += zspeed;

// -------- Aufprall Z-Achse --------
	if (z >= depth / 2) {
		zspeed *= -1;
		z = depth / 2;
		pickcolor();
	} 
	else if (z <= -depth / 2) {
		zspeed *= -1;
		z = -depth / 2;
		pickcolor();
	}

 // -------- Aufprall X-Achse --------
	if (x >= width) {
		xspeed *= -1;
		x = width;
		pickcolor();
	} 
	else if (x <= 0) {
		xspeed *= -1;
		x = 0;
		pickcolor();
	}

 // -------- Aufprall >-Achse --------
	if (y >= height) {
		yspeed *= -1;
		y = height;
		pickcolor();
	} 
	else if (y <= 0) {
		yspeed *= -1;
		y = 0;
		pickcolor();
	}
}