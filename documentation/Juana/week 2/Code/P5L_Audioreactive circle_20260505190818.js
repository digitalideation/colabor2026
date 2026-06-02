// {"P5LIVE":{"name":"Audioreactive circle","mod":1778008098409}} 

// ctrl + shift + a = audioreactive snippet

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0, 0, 255)

	setupAudio(true) // global vars
	// a5.ease = .1 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	circle(mouseX, mouseY, ampEase*10)
	
	
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/