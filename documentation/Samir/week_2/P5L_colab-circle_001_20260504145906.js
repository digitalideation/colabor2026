// {"P5LIVE":{"name":"colab-circle_001","mod":1777906746445}} 

function setup() {
	createCanvas(windowWidth, windowHeight)

	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	background(255,255,0, 30)
	circle(frameCount * 10 % width, height / 2, ampEase*60)
	fill (0)
	stroke (5)


}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/