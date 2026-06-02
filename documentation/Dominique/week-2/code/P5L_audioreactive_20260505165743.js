// {"P5LIVE":{"name":"audioreactive","mod":1778000263609}} 

function setup() {
	createCanvas(windowWidth, windowHeight)

	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	
	// Kreis von links nach rechts
	background(0, 0, 255, 10)
	fill(255)
	circle(frameCount * 10 % width, height / 2, 250)
	noStroke()
	print(mouseX)
	
	// Kreis der mit der Maus hinterhergeht
	// ändert sich auf Basis der Lautstärke des Mikrofons
	fill (255, 0, 123)
	circle(mouseX, mouseY, ampEase*10)

	// text that appears whenever you press a key
	push()
	fill(0, 255, 0)
	textSize(200)
	textAlign(CENTER, CENTER)
	text(key, width / 2, height / 2)
	pop()
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/