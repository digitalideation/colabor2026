// {"P5LIVE":{"name":"3d music_003","mod":1779786560461}} 

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

function draw() {
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	orbitControl()
	updateAudio()
	lights()
	background(17, 0, 255)
	noFill()
	noStroke()
	ambientLight(10)
	ambientMaterial(255, 127, 80)
	
	// orange
	fill(255, 115, 0)
	sph(0, fftEase[0] * .72, -50, 50 +fftEase[100])

	// pink
	fill(255, 156, 238)
	sph(50, 50, 30, 50 +fftEase[20])
	
	// grün
	fill(194, 255, 161)
	//specularMaterial(255, 255, 0)
	trs(-50, 50, 100, 50 +fftEase[60], 5)
}

function sph(x, y, z, size) {
	push()
	translate(x, y, z)
	sphere(size)
	pop()
}

function trs(x, y, z, size, rSpeed) {
	push()
	translate(x, y, z)
	rotateY(rSpeed * frameCount * 0.01)
	torus(size)
	pop()
}


	// /* fftEase */
	// for(let i = 0; i < fftEase.length; i++) {
	// 	let freq = fftEase[i]; // (0, 255)
	// 	let x = map(i, 0, fftEase.length, 0, width)
	// 	let w = width / fftEase.length
	// 	rect(x, height * .805, w, freq)
	// }

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/