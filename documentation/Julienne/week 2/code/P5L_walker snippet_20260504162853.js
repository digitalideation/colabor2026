// {"P5LIVE":{"name":"walker snippet","mod":1777912133985}} 

//library einbetten mit let libs tab
let libs = ['https://tetunori.github.io/BMWalker.js/dist/v0.6.1/bmwalker.js']

const bmw = new BMWalker();

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0, 0, 255)

}
//code aus dem snippet an richtigen Ort kopieren
//parameter nach Wunsch anpassen
function draw() {
	clear()
	//Grösse des Walkers
	const walkerHeight = 600;
	const markers = bmw.getMarkers(walkerHeight);

	//Position des Walkers bestimmen
	translate(width / 3, height / 2)
	markers.forEach((m) => {
		//Grösse der Kreise bestimmen
		circle(m.x, m.y, 80);
	});
}