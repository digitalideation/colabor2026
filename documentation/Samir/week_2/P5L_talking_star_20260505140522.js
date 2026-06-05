// {"P5LIVE":{"name":"talking_star","mod":1777989922175}} 

let number = 5
let speedX

function setup() {
	createCanvas(windowWidth, windowHeight)

	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()

	let speedX = sin(frameCount * .02) * 20 + sin(frameCount * .01) * ampEase*40
	let speedY = cos(frameCount * .02) * 20 + cos(frameCount * .01) * ampEase*40

	fill(random(1255), random (255), 255)
	ellipse(width / 2 + speedX, height / 2 + speedY, 100)


}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/