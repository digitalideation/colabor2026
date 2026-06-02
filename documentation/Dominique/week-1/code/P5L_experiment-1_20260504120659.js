// {"P5LIVE":{"name":"experiment-1","mod":1777896419992}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// halb transparenter HG -> "Spuren"
	background(0, 20)
	
	// Anz Kreise
	let lc = 15;
	
	// for-loop > zeichnet mehrere Kreise
	for(let i = 0; i < lc; i++) {
		// X-Pos mit Sinus > frameCount = Animation über Zeit
		let x = sin(i * .4 + frameCount * .02) * width / 3;
		// Y-Pos mit Cosinus > frameCount = Animation über Zeit
		let y = cos(i * 2.6 + frameCount * .025) * height / 3;
		// Grösse der Animation
		let s = sin(i * .5 + frameCount * .02) * 100;
		// Zeichnet Ellipse 
		ellipse(width / 2 + x, height / 2 + y, s)
	}
}
