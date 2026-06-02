// {"P5LIVE":{"name":"ii_audiosphere","mod":1779457680389}} 

/*	
	_audio_analysis // cc teddavis.org 2019-24
	
	revamp of P5LIVE's Audio snippet, now built-in the background!
	add snippet to other sketches: CTRL + SHIFT + A 
*/

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	// a5.ease = .075 // customize ease speed
}

function draw() {
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	orbitControl)
	lights()
	ambientLight(10);
	ambientMaterial(100,100,255); 
	noStroke()

	background(0)
	fill(0,0,255)
	
	
	push()
	specularMaterial(80,139,11)
	translate(200, 0)
	sphere(50 + fftEase[100])
	pop()


	push()
	fill(0, 100, 100)
	specularMaterial(80,139,11)
	translate(-100, 0)
	sphere(50 + fftEase[20])
	pop()
	
	specularMaterial(80,139,11)
	sph(0,fftEase[0] * .7, -50, 50 + fftEase[60])


	/* fftEase */
	for(let i = 0; i < fftEase.length; i++) {
		let freq = fftEase[i]; // (0, 255)
		let x = map(i, 0, fftEase.length, 0, width)
		let w = width / fftEase.length
		rect(x, height * .805, w, freq)
	}
}

function sph(x,y,z, size, rspeed){
	push()	
	//rotate(frameCount * .1)
	noStroke()
	fill(255, 255, 0)
	translate(50, 0)
	sphere(50 + fftEase[60])
	pop()	
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/