// {"P5LIVE":{"name":"3d_audio","mod":1779460566929}} 

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
	updateAudio()
	lights()
	
	noFill()
	background(0)
	
// green torus
	stroke(126, 255, 1)
	// fftEase[0] -> only analyses the lowest sounds of the audio analysis
	// the higher the number, the higher the sounds that are influencing it
	// fftEase is the smoothened out version of command fft
	trs(50, 50, 30, 50 + fft[20], 2 )
	

// pink cube
	stroke(211, 1, 255)
	cube(0, 20, -50, 100 + fftEase[100], 2)

// orange sphere
	stroke(255, 116, 1)
	sph(-100, 50, 100, 10 + fftEase[60], 3)

}

function sph(x,y,z,size, rSpeed) {
	push()
	translate(x,y,z)
	rotateY(frameCount * 0.01 * rSpeed)
	sphere(size)
	pop()
}

function cube(x,y,z,size,rSpeed) {
	push()
	translate(x,y,z)
	rotateZ(frameCount * 0.01 * rSpeed)
	rotateY(frameCount * 0.01 * rSpeed)
	box(size)
	pop()
}

function trs(x, y, z, size, rSpeed) {
	push()
	translate(x,y,z)
	rotateY(frameCount * 0.01 * rSpeed)
	torus(size, 20)
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