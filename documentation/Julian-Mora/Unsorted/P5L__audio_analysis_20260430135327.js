// {"P5LIVE":{"name":"_audio_analysis","mod":1777557207531}} 

/*	
	_audio_analysis // cc teddavis.org 2019-24
	
	revamp of P5LIVE's Audio snippet, now built-in the background!
	add snippet to other sketches: CTRL + SHIFT + A 
*/

function setup() {
	createCanvas(windowWidth, windowHeight)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	// a5.ease = .075 // customize ease speed
}

function draw() {
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()

	background(0)
	noFill()
	stroke(255)
	textAlign(CENTER, CENTER)

	/* average */
	text("MIX", width * .5, height / 4)
	ellipse(width / 2, height / 4, amp)
	text("L", width * .25, height / 4)
	ellipse(width * .25, height / 4, ampL)
	text("R", width * .75, height / 4)
	ellipse(width * .75, height / 4, ampR)

	/* waveform */
	beginShape()
	for(let i = 0; i < waveform.length; i++) {
		let freq = waveform[i] * height / 4 // (-1, 1)
		let x = map(i, 0, waveform.length, 0, width)
		curveVertex(x, height * .5 + freq)
	}
	endShape()

	/* waveformEase */
	beginShape()
	for(let i = 0; i < waveformEase.length; i++) {
		let freq = waveformEase[i] * height / 4 // (-1, 1)
		let x = map(i, 0, waveformEase.length, 0, width)
		curveVertex(x, height * .5 + freq)
	}
	endShape()

	/* fft */
	for(let i = 0; i < fft.length; i++) {
		let freq = fft[i]; // (0, 255)
		let x = map(i, 0, fft.length, 0, width)
		let w = width / fft.length
		rect(x, height * .8, w, -freq)
	}

	/* fftEase */
	for(let i = 0; i < fftEase.length; i++) {
		let freq = fftEase[i]; // (0, 255)
		let x = map(i, 0, fftEase.length, 0, width)
		let w = width / fftEase.length
		rect(x, height * .805, w, freq)
	}
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/