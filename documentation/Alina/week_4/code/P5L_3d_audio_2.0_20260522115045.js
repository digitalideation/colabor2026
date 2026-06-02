// {"P5LIVE":{"name":"3d_audio_2.0","mod":1779450645522}} 

// how to include audio with yann

function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	a5.ease = .075 // customize ease speed, lower values make it smoother
}

function draw() {
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	
	ambientLight(255,0,200)
	
	updateAudio()
	background(0)
	stroke(255)
	fill(fft)
	sph(0,0,0,100+fftEase[20])// low frequency
	
	noFill()
	stroke(fftEase)
	sph(200,200,200,100+fftEase[100])//high frequency
	
	
	
	/* fftEase 
	for(let i = 0; i < fftEase.length; i++) {
		let freq = fftEase[i]; // (0, 255)
		let x = map(i, 0, fftEase.length, 0, width)
		let w = width / fftEase.length
		rect(x, height * .805, w, freq)
	}
	console.log(fftEase)
	*/
}

//define functions outside the for-Loop

function sph(x,y,z,size){
	
	push()
	translate(x,y,z)
	sphere(size)
	pop()
} 

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/