// {"P5LIVE":{"name":"3d-box-yann","mod":1777637243628}} 

let posX = 0
let posY = 0
let boxDim = 100

function setup() {
	// WEBGL = 3D
	createCanvas(windowWidth, windowHeight, WEBGL)
	
}

function draw() {
	background(0)
	// Maussteuerung der Kamera (Sicht von Kamera)
	orbitControl()
	// Füllung Würfel
	fill(255)

	// Bewegung x-Achse
	posX++
	// Geschwindigkeit
	posX+=10
	// Bewegung y-Achse
	posY = posY - 1
	
	// Wenn Würfel rechts aus Bild geht, 
	// wieder links starten
	if(posX > width/2 + boxDim){
		posX = -width/2
	}
	
	// Wenn Würfel zu weit nach oben geht,
	// zurückseten
	if(posY < -(height / 2)){
		posY = 0
	}
	
	// Transformation starten!
	push()
	// Würfel an neue Pos verschieben
	translate(posX, posY, 0)
	// Würfel zeichnen
	box(boxDim)
	// Transformation beenden!
	pop()

	// 3D-Achsen zeichnen (rot, blau, grün)
	strokeWeight(3)
	push()
	stroke(255, 0, 0)
	line(0,0,0, width, 0, 0)
	stroke(0, 255, 0)
	line(0,0,0, 0, -height, 0)
	stroke(0, 0, 255)
	line(0,0,0, 0, 0, 1000)
	pop()
	
}