// {"P5LIVE":{"name":"snippet 1","mod":1778792750834}} 

let lines = `Das isch en Text wo 
nur so da staht. Er bedütet 
nüt aber ich bruche ihn, 
demit ich chan luege wies 
usgseh.`.split('\n');
//split n = textstring wird bei jedem Zeilenumbruch gebrochen
// t = startpunkt bei 0 
let t = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont('Helvetica');
	textSize(54);
}

function draw() {
	background(240);
	noStroke();
	// spacing animiert zwischen 0 und 35.
	// sin(t) geht zwischen -1 und 1 → map() rechnet es auf 0–35 um
	let spacing = map(sin(t), -1, 1, 0, 20);
	let y = 120;
	//für alle Linien von line durchgehen
	for(let line of lines) {
		// Linie startet horizonzal bei 500
		let x = 500;
		//für alle Buchstaben von line durchgehen
		for(let char of line) {
			// w = länge der Buchstaben messen
			let w = textWidth(char);
			fill(0);
			//schwarzer block hinter buchstaben 
			// fängt bei -2 vertikal und -48 horizontal an bei jedem Buchstaben
			rect(x - 2, y - 48, w + 4, 56);
			fill(255);
			// nimmt text von char funktion , position wie x und y definiert sind
			text(char, x, y);
			//x um die Buchstabenbreite + wert in variabel spacing vergrössern
			x += w + spacing;
		}
		//damit jede linie 70 weiter unten startet
		y += 70;
	}
	// t = geschwindigkeit
	t += 0.04;

}