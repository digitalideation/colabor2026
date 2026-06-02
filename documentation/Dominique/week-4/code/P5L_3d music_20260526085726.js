// {"P5LIVE":{"name":"3d music","mod":1779785846910}} 

/*	
	_audio_analysis // cc teddavis.org 2019-24
	
	revamp of P5LIVE's Audio snippet, now built-in the background!
	add snippet to other sketches: CTRL + SHIFT + A 
*/

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	a5.ease = .275 // customize ease speed (kleiner wert = smooth)
}

function draw() {€
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	background(17, 0, 255)
	noFill()
	
	// orange
	stroke(255, 115, 0)
	push()
	translate(0, 20)
	sphere(50 + fftEase[100])
	pop()
	
	// pink
	stroke(255, 0, 170)
	push()
	translate(50, 50)
	sphere(50 + fftEase[20])
	pop()

	// grün
	stroke(194, 255, 161)
	push()
	translate(-50, 50)
	sphere(50 + fftEase[60])
	pop()

	// /* fftEase */
	// for(let i = 0; i < fftEase.length; i++) {
	// 	let freq = fftEase[i]; // (0, 255)
	// 	let x = map(i, 0, fftEase.length, 0, width)
	// 	let w = width / fftEase.length
	// 	rect(x, height * .805, w, freq)
	// }
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/