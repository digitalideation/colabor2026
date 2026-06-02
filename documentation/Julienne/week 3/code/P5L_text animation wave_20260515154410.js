// {"P5LIVE":{"name":"text animation wave","mod":1778859850754}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
	.modulate(noize(
		() => 2 + ampEase * 0.1,
		() => 0.8 + ampEase * 0.1
	))
	.out()
// sandbox - end

function setup() {
	createCanvas(windowWidth, windowHeight)

	setupAudio(true) // global vars
	// a5.ease = .075 // set easing 
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	let live = frameCount % 10
	let words = ["MANGO ", "GRAPEFRUITE ", "STRAWBERRY ", "BLUEBERRY ", "BANNANA ","MANGO ", "GRAPEFRUITE ", "STRAWBERRY ", "BLUEBERRY ", "BANNANA "];
	let rand = random(words);
	let sine = floor(5 * sin(frameCount / 2) + 5)
	//Damit Framecount weniger schnell ist
	frameRate(2)
	background(0, 0, 255)
	fill(random(255), random(255), random(255))
	textSize(10 * live)
	//Zeilenumbruch bei Wort oder Character
	textWrap(CHAR)
	textFont('monospace')
	textAlign(LEFT)
	textStyle(NORMAL)
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(50)
	//.repeat um Text zu wiederholen
	text(words[sine].repeat(3000), 0, 0,
		windowWidth, windowHeight)

}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/