// {"P5LIVE":{"name":"text animation_004","mod":1778164220498}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
	.rotate(10)
	.out()
// sandbox - end
function setup() {
	createCanvas(windowWidth, windowHeight)
	
// setupAudio(true) // global vars
// a5.ease = .075 // set easing 
}


function draw() {
 /* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
//updateAudio() 
	let live = frameCount%10
	let words = ["-- --","jjj jj","hässig ","222 22","o00o 00","dunnstig ",".. ...","namittag ","xx x","%% %%"];
	let rand = random(words);
	let sine = floor(5*sin(frameCount/10)+5)
	//Damit Framecount weniger schnell ist
	frameRate(5)
	background(127,255,0)
	fill(0)
	textSize(100)
	//Zeilenumbruch bei Wort oder Character
	textWrap(CHAR)
	textFont('monospace')
	textAlign(LEFT)
	textStyle(random([NORMAL,ITALIC]))
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(100)
	//.repeat um Text zu wiederholen
	text(words[sine].replace(/ /g,"!!!").repeat(1000), 100,100, 
	windowWidth-200,windowHeight-200)
  
}



/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/