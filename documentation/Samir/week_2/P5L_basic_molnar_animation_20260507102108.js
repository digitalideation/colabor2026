// {"P5LIVE":{"name":"basic_molnar_animation","mod":1778149268994}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)

	.modulate(noize(1.5,.5))
	.out()
// sandbox - end

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 255, 200)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width * 0.5
	posY = height * 0.5
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing

}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	background(100, 100, 255)
	noFill()
	strokeWeight(2)
	stroke(0)
	let count = 20
	for(let i = 0; i < count; i++) {
		let dimension = width / count
		let posX = dimension / 2 + (i * dimension)
		for(let j = 0; j < count; j++) {
			let posY = dimension / 2 + (j * dimension)
			tmcs(posX, posY, dimension, 10, 400)

		}

	}


}




// this function draws squares at position
// posX and posY, and they moce randomly
// a tiny bit
function tmcs(x, y, dim, num, speed) {

	let dimension = dim + sin(frameCount * speed * 10)
	//num = 10
	reduction = dimension / num

	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 255)
		strokeWeight(3)
		square(
			x + offsetX,
			y + offsetY,
			(dimension) - (reduction * i)
		)
	}
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/