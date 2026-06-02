// {"P5LIVE":{"name":"new_001","mod":1777989094987}} 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
	stroke(0);
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()


	let pen1 = map(sin(frameCount * .075), -1, 1, 50, 10)
	let differentX = map(mouseX, 0, width, 0, width / 2)
	// ellipse(width/2 + cos(frameCount*.025)*200, height/2 + sin(frameCount*.025)*200, 100)
	// ellipse(mouseX, height / 2 + sin(frameCount*0.025)*200, 20)
	if(mouseIsPressed) {
		stroke(random(255), 255, random(255));
		strokeWeight(pen1);
		line(prevX, prevY, mouseX, mouseY);
		// ellipse(mouseX,mouseY, pen1, pen1)
		// stroke(255,random (255),random (255))
		// ellipse(mouseX-50, mouseY+50, pen1, pen1)

	}
	prevX = mouseX;
	prevY = mouseY;

}

function keyPressed() {
	if(key == 'S') {
		save('drawing.png')
	}
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/