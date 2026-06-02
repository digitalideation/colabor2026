// {"P5LIVE":{"name":"rain","mod":1778162426607}} 

function setup() {
	createCanvas(windowWidth, windowHeight)

	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	let live = frameCount % 100;
	//frameCount%X maximiert die anzahl frames auf X
	let words = [",,,,,, ,,,, ,,,,, ,,,,", ",, ,,,,,,, ,", ", ,, ,, ,, ,, ,,,",
	",,, ,, ,, , , ,,,"]
	let rand = random(words)
	let sine = floor(10 * sin(frameCount / 10) + 5)

	frameRate(30)
	//geschwindigkeit des frameCounts
	background(0, 255, 0)
	fill(255, 0, 0)
	textSize(100)
	textWrap(CHAR)
	textFont('helvetica')
	textAlign(CENTER)
	textStyle(ITALIC)
	textLeading(20 * (live / 20))
	text(rand.repeat(100), 100, 10, windowWidth / 1.4, windowHeight)

}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/