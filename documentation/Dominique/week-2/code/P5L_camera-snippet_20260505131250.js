// {"P5LIVE":{"name":"camera-snippet","mod":1777986770574}} 

let capture, scl = 1, // Skalierungsfaktor Bild
	rot = 0

function setup() {
	createCanvas(windowWidth, windowHeight)

	// Aktiviert Webcam
	capture = createCapture(VIDEO)
	// Auflösung
	capture.size(200, 180)
	// versteckt originales html-videoelement
	capture.hide()
	// setzt Ursprung in Mitte
	imageMode(CENTER)
}

// gibt Kamera-Bild aus
function draw() {
	image(capture, mouseX, mouseY, capture.width * scl, capture.height * scl)
}