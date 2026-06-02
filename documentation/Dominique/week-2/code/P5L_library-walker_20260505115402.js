// {"P5LIVE":{"name":"library-walker","mod":1777982042368}} 

// externe Bibliothek wird geladen
let libs = ['https://tetunori.github.io/BMWalker.js/dist/v0.6.1/bmwalker.js']

const bmw = new BMWalker();

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background(115, 0, 73)
	//clear()
	// Grösse der Figur
	const walkerHeight = 200;
	// holt die aktuellen Punkte des Walkers
	// > Körperpunkte / Gelenke
	const markers = bmw.getMarkers(walkerHeight);
	
	// Alternative: Walker läuft mit Maus
	//translate(mouseX, mouseY)
	// verschiebt Pos von Ursprung in Mitte
	translate(width / 2, height / 2)
	// zeichnet um jeden Marker einen Kreis
	markers.forEach((m) => {circle(m.x, m.y, 30);});
}

