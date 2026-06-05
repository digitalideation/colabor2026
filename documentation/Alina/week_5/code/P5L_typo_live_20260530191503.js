// {"P5LIVE":{"name":"typo_live","mod":1780168503451}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	a5.ease = .075
}



function draw() {
	updateAudio();
	background(2,0,200)
	let live= (frameCount%10)
	//frameRate -> 
	frameRate(1);
	background(230);
	textFont("futura")
	//Pixelwert
	textSize(80);
	fill(fftEase/100);
	//BOLD,ITALIC,BOLDITALIC
	textStyle(random([ITALIC,NORMAL]));
	// WORD Zeilenumbruch nach ganzem Wort, CHAR Zeilenumbruch no matter what
	textWrap(CHAR);
	//LEFT linksbündig, RIGHT rechtsbündig, CENTER 
	textAlign(LEFT);
	//default ist textSize 100 -> Leading 100
	textLeading(32*live);
	// um eine Textbox zu machen,die einen Zeilenumbruch macht ("string",posx,posy,wW,wH)
	text("did you hear about the windrush generation before?".repeat(random(20)),100,100,windowWidth/1.2,
	windowHeight);

}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/