// {"P5LIVE":{"name":"typo_spacing_left_audio","mod":1779055861704}} 

let word = "SOUND "
let spread = 40

function setup() {
	createCanvas(windowWidth, windowHeight);
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	background(0);
	fill(255)
	textSize(20)
	textAlign(CENTER)

	let target = ampEase * 35;
	spread = lerp(spread, target, ampEase > spread / 100 ? 0.1 : 0.03);


	for(let i = 0; i < 50; i++) {
		fill(255)
		let spac = abs(sin(frameCount * 0.02 + i * 0.2) * spread)
		textSpacing(word.repeat(30), spac, 0, 20 * i)
	}
}

function textSpacing(txt, spacing, x, y) {
	let totalWidth = 0;

	for(let char of txt) {
		totalWidth += textWidth(char) + spacing;
	}

	for(let char of txt) {
		text(char, x, y);
		x += textWidth(char) + spacing;
	}
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/