// {"P5LIVE":{"name":"webcam snipped used","mod":1777910742845}} 

let capture, scl = 1,
	rot = 0

function setup() {
	createCanvas(windowWidth, windowHeight)

	createCanvas(windowWidth, windowHeight)
	capture = createCapture(VIDEO)
	capture.size(320, 240)
	capture.hide() // hide raw camera
	imageMode(CENTER)
}

function draw() {
	//option shift s = snippet bearbeiten
	//ctrl shift s = snippet einfügen
scl = 2
	image(capture, mouseX, mouseY, capture.width * scl, capture.height * scl)

}