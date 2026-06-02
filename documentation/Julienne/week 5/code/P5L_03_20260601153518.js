// {"P5LIVE":{"name":"03","mod":1780328118126}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
// H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
	//scroll effect
	.scrollX(1, -.5)

	.out()
// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
	setupAudio(true)
}

function draw() {
	updateAudio()

	let size = 250
	//Color change speed (lower value = faster)
	let blink = 50
	background(255)
	noStroke()

	k = frameCount % blink

	fill(0, 0, 255)
	if(k > blink / 2) {
		fill(255)
		background(0, 0, 255)
	}
	rect(0, 0, width / 4, height / 2)
	rect(width / 2, 0, width / 4, height / 2)
	rect(width / 4, height / 2, width / 4, height / 2)
	rect(3 / 4 * width, height / 2, width / 4, height / 2)

	//Alternating circle colors 
	fill(255)
	if(k > blink / 2) {
		fill(0, 0, 255)
	}
	ellipse(1 / 8 * width, 1 / 4 * height, size * fftEase[10] * 0.01)
	ellipse(5 / 8 * width, 1 / 4 * height, size * fftEase[50] * 0.01)
	ellipse(3 / 8 * width, 3 / 4 * height, size * fftEase[90] * 0.01)
	ellipse(7 / 8 * width, 3 / 4 * height, size * fftEase[110] * 0.01)

	//Alternating circle colors
	fill(0, 0, 255)
	if(k > blink / 2) {
		fill(255)
	}
	ellipse(3 / 8 * width, 1 / 4 * height, size * fftEase[30] * 0.01)
	ellipse(7 / 8 * width, 1 / 4 * height, size * fftEase[70] * 0.01)
	ellipse(5 / 8 * width, 3 / 4 * height, size * fftEase[100] * 0.01)
	ellipse(1 / 8 * width, 3 / 4 * height, size * fftEase[80] * 0.01)

}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/