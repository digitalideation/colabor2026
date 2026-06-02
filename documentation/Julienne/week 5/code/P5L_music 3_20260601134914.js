// {"P5LIVE":{"name":"musik 3","mod":1780321754047}} 

function setup() {
	createCanvas(windowWidth, windowHeight)

	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()

	let size = 250
	let blink = 60
	background(255)
	noStroke()
	
	k = frameCount%blink

	

	
	fill(0, 0, 255)
		if (k > blink/2) {
		fill(255)
		background(0,0,255)
	}
	rect(0, 0, width / 2, height / 2)
	rect(width / 2, height / 2, width / 2, height / 2)

	
	fill(255)
	
	if (k > blink/2) {
		fill(0,0,255)
	}
	ellipse(width / 4, height / 4, size * fftEase[80] * 0.01 )
	ellipse(3 / 4 * width, 3 / 4 * height, size * fftEase[100] * 0.01)

	fill(0, 0, 255)
	if (k > blink/2) {
		fill(255)
	}
	ellipse(3 / 4 * width, height / 4, size * fftEase[50] * 0.01)
	ellipse(1 / 4 * width, 3 / 4 * height, size * fftEase[0] * 0.01)

}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/