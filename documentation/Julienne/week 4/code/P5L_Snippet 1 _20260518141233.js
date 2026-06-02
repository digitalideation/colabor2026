// {"P5LIVE":{"name":"Snippet 1 ","mod":1779113553772}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)

      .rotate(() => mouse.x * 0.005)
      .out()
// sandbox - end



let lines = `Das isch en Text wo 
nur so da staht. Er bedütet 
nüt aber ich bruche ihn, 
demit ich chan luege wies 
usgseht.`.split('\n');

let t = 0;
let spacing = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont('Helvetica');
	textSize(54);
}

function draw() {
	background(255, 0, 127);
	noStroke();
	//wenn Maus gedrückt wird
	if(mouseIsPressed) {
		//MausX wert ganz links = spacing 0, ganz rechts = spacing 20
		spacing = map(mouseX, 0, width, 0, 20);
	} else {
		// Sonst spacing animiert zwischen 0 und 20
		// sin(t) geht zwischen -1 und 1 → map() rechnet es auf 0–20 um
		spacing = map(sin(t), -1, 1, 0, 20);
	}

	let y = 200;
	//für alle Linien von line durchgehen
	for(let line of lines) {
		// Linie startet horizonzal bei 500
		let x = 300;
		//für alle Buchstaben von line durchgehen
		for(let char of line) {
			// w = länge der Buchstaben messen
			let w = textWidth(char);
			//schwarzer block hinter buchstaben 
			// fängt bei -2 vertikal und -48 horizontal an bei jedem Buchstaben
			fill(0);
			rect(x - 2, y - 48, w + 4, 56);
			fill(255);
			// nimmt text nach durchlauf des char loops, position wie x und y definiert sind
			text(char, x, y);
			//x um die Buchstabenbreite + wert in variabel spacing vergrössern
			x += w + spacing;
		}
		//damit jede linie 70 weiter unten startet
		y += 70;
	}
	// t = geschwindigkeit
	t += 0.08;
}