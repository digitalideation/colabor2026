// {"P5LIVE":{"name":"audio circle ","mod":1777907066017}} 

function setup() {
	createCanvas(windowWidth, windowHeight)

	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	//Fade Out hinzugügen mit background
	background(0, 0, 255, 15)
	fill(255, 0, 0)
	//Kreis der von links nach rechts geht und auf Audio reagiert
	circle(frameCount * 10 % width, height / 2, ampEase * 10)




}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/