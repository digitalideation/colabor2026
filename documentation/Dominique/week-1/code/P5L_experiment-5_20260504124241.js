// {"P5LIVE":{"name":"experiment-5","mod":1777898561077}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// leicht transparenter HG > Spuren
	background(0, 5)
	stroke(255)
	noFill()
	// zeichnet Rechteck von Mitte aus
	rectMode(CENTER)
	
	// Anz Rechtecke
	let lc = 5;
	// for-Loop > zeichnet mehrere Rechtecke
	for(let i = 0; i < lc; i++) {
		// X-Pos durch Sinus > horizontale Bewegung
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
		rotate(radians(i + 5 + frameCount / 2))
		rect(0,0,s)
		// // Transformation beenden!
		pop()
	}
}
