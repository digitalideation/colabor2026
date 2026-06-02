// {"P5LIVE":{"name":"moving_ellipse","mod":1778074860868}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)

	.modulate(voronoi(100,100))
	.out()
// sandbox - end

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 102, 0)
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()

	fill(255, 100, 255, 30)
	circle(width / 2 + sin(frameCount * .7) * 300, height / 2 + cos(frameCount * .7) * 250, 60)
	circle(width / 2 + sin(frameCount * .7) * 500, height / 2 + cos(frameCount * .7) * 50, 60)

	}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/