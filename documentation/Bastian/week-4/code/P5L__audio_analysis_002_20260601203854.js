// {"P5LIVE":{"name":"_audio_analysis_002","mod":1780346334337}} 

/*	
	_audio_analysis // cc teddavis.org 2019-24
	
	revamp of P5LIVE's Audio snippet, now built-in the background!
	add snippet to other sketches: CTRL + SHIFT + A 
*/

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
    a5.ease = .075 // customize ease speed
}

function draw() {
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	background(0)
	sphere(200) + fftEase[0]
	noFill()
	stroke(255, 0, 0)
	




	/* fftEase */
	// stroke(255)
//	for(let i = 0; i < fftEase.length; i++) {
	//	let freq = fftEase[i]; // (0, 255)
	//	let x = map(i, 0, fftEase.length, 0, width)
	//	let w = width / fftEase.length
	//	rect(x, height * .805, w, freq)
//	}
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/