// {"P5LIVE":{"name":"01_audio reactive pen","mod":1777906728974}} 

// control shift A = audioreactive snippet

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0, 0, 255)
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	circle(mouseX, mouseY, amp)


}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/