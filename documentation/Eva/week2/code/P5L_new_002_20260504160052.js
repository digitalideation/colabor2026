// {"P5LIVE":{"name":"new_002","mod":"1777910452433"}} 

let capture, scl = 1,
	rot = 0

function setup() {
	createCanvas(windowWidth, windowHeight)

	capture = createCapture(VIDEO)
	capture.size(320, 240)
	capture.hide() // hide raw camera
	imageMode(CENTER)
}

function draw() {

	image(capture, mouseX, mouseY, capture.width * scl, capture.height * scl)
}