// {"P5LIVE":{"name":"draw_webcam","mod":1777913052437}} 

let capture, scl = 1,
	rot = 0

function setup() {
	createCanvas(windowWidth, windowHeight)

	capture = createCapture(VIDEO)
	capture.size(320, 240)
	capture.hide() // hide raw camera
	imageMode(CENTER)
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	image(capture, frameCount * 10 % width, height / 2, capture.width * ampEase *.05,capture.height * ampEase* .05)

}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/