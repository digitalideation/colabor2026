// {"P5LIVE":{"name":"talking_star","mod":1777997093311}} 

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

	let speedX = sin(frameCount * .0002) * 5 + sin(frameCount * .01) * ampEase * 30
	let speedY = cos(frameCount * .0002) * 5 + cos(frameCount * .01) * ampEase * 30

	fill(random(200 - 255), random(255), random(255))
	stroke (random (255),random(255), random (255))
	// ellipse(width / 2 + speedX, height / 2 + speedY, 100)
	line (width/2 +speedX ,height/2 + speedY, width/2,height/2)


}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/