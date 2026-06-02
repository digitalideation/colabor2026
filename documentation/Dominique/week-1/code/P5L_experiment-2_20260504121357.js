// {"P5LIVE":{"name":"experiment-2","mod":1777896837200}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// leicht transparenter HG > Spursen
	background(0, 15)
	stroke(255)
	noFill()
	
	// Anz Ellipsen
	let lc = 55;
	// for-loop > Schleife für mehrere Kreise
	for(let i = 0; i < lc; i++) {
		// X-Pos durch Sinus 
		// i = versetzte Darstellung
		// frameCount = langsame Animation
		let x = sin(i*1.4+frameCount*.001)*width/3;
		// Y-Pos durch Cosinus
		let y = cos(i*6+frameCount*.005)*height/3;
		// Grösse der Ellipse
		let s = sin(i*.5+frameCount*.0012)*100;
		// Zeichnet Ellipsen relativ zur Bildschimgrösse
		ellipse(width/2+x, height/2+y, s)
	}
}
