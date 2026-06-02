// {"P5LIVE":{"name":"experiment-4","mod":1777897331984}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// leicht transparenter HG > Spuren
	background(0, 5)
	stroke(255)
	noFill()
	
	// Anz Kreise
	let lc = 5;
	// for-loop > mehrere Kreise
	for(let i = 0; i < lc; i++) {
		// X-Pos durch Sinus 
		// i = versetzte Darstellung
		// frameCount = langsame Animation
		let x = sin(i*3.4+frameCount*.01)*width/3;
		// Y-Pos durch Cosinus
		let y = cos(i*9+frameCount*.05)*height/3;
		// Grösse der Ellipse
		let s = sin(i*.5+frameCount*.0012)*300;
		// Zeichnet Ellipsen relativ zur Bildschimgrösse
		ellipse(width/2+x, height/2+y, s)
	}
}
