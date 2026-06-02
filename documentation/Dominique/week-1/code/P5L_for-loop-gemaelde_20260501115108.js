// {"P5LIVE":{"name":"for-loop-gemaelde","mod":1777636268167}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
	// Rechtecke von Mitte aus zeichnen
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2
}

function draw() {
	// HG-Farbe neu gesetzt -> Animation
	background(115, 0, 54)
	noFill()
	strokeWeight(3)
	stroke(0)
	// nested loops
	// Anz Spalten
	let numX = 10
	// 1 loop - Spalten
	for(let i = 0; i < numX; i++){
		// Breite eines Grid-Feldes
		let dimension = width / numX
		// X-Pos pro Spalte
		let posX = dimension / 2 +  (i * dimension)
		// 2 loop - Reihen
		
		for(let j = 0; j < 5; j++){
			// Y-Pos pro Reihe
			let posY = dimension / 2 +  (j * dimension)
			// Funktion für jede Grid-Zelle
			tmcs(posX, posY, dimension, 1, 10)	
		}
	}
}

// Funktion zum Zeichnen der Quadrate
function tmcs(x, y, dim, speed, num){
	// Animation Pulsieren
	let dimension = dim + sin(frameCount * speed) * 10
	// Berechnung Verkleinerung der Quadrate
	let reduction = dimension / num
	// loop - mehrere quadrate ineinanderf
	for(let i = 0; i < num; i++) {
		// zufällige verschiebung für zitter-effekt
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(191, 2, 93)
		strokeWeight(3)
		// Quadrate zeichnen
		square(
			x+offsetX,
			y+offsetY,
			(dimension) - (reduction * i)
		)
	}
	//noLoop()
}