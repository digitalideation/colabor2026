// {"P5LIVE":{"name":"rechtecke","mod":1779103459697}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// leicht transparenter HG > Spuren 
	// >> Spuren (5, 50, 200) / HG / Kontur
	background(0, 10)
	stroke(255)
	noFill()
	// zeichnet Rechteck von Mitte aus
	rectMode(CENTER)
	
	// Anz Rechtecke
	let lc = 10;
	// for-Loop > zeichnet mehrere Rechtecke
	for(let i = 0; i < lc; i++) {
		// X-Pos durch Sinus > horizontale Bewegung
		// >> frameCount *X -> Geschwindigkeit (0.01 / 0.05)
		// >> width / x -> Bewegungsgeschwindigkeit (1, 10)
		let x = sin(i * 3.4 + frameCount * .001) * width / 2;
		// Y-Pos durch Cosinus > vertikale Bewegung
		let y = cos(i * 9 + frameCount * .005) * height / 2;
		// Grösse der Rechtecke > an Fensterbreite anpassen
		let s = sin(i * .5 + frameCount * .0012) * width;
		
		// Transformation starten!
		push()
		// Verschiebt Position von Ursprung
		translate(width / 2 + x, height / 2 + y, s)
		// Dreht Rechteck 
		// >> frameCount / 2 -> Geschwindigkeit
		rotate(radians(i + 5 + frameCount / 1))
		rect(0,0,s)
		// // Transformation beenden!
		pop()
	}
}
