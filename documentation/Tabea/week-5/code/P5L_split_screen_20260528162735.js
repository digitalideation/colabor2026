// {"P5LIVE":{"name":"split_screen","mod":1779985655656}} 

let leftLayer;
let centerLayer;
let rightLayer;

let blinkCount = 100

function setup() {
	createCanvas(windowWidth, windowHeight);
	leftLayer = createGraphics(width / 3, height);
	centerLayer = createGraphics(width / 3, height);
	rightLayer = createGraphics(width / 3, height);
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	let k = frameCount % blinkCount



	//LEFT LAYER
	leftLayer.background(0);
	leftLayer.fill(255)
	if(k < blinkCount / 2) {
		leftLayer.background(255)
		leftLayer.fill(0)
	}


	//

	// CENTER LAYER
	centerLayer.background(255);
	centerLayer.fill(0)

	if(k < blinkCount / 2) {
		centerLayer.background(0)
		centerLayer.fill(255)
	}

	//sinusTwist(centerLayer,width / 3, height, 0.3)
	//crossedTrigo(centerLayer, width / 3, height, 0.5, 0.1);
	sinusString(centerLayer, width / 3, height, 0.1, 80);
	//sinusSpacing(centerLayer, width / 3, height, 0.2);
	//


	// RIGHT LAYER
	rightLayer.background(0);
	rightLayer.fill(255)

	if(k < blinkCount / 2) {
		rightLayer.background(255)
		rightLayer.fill(0)
	}

	//


	image(leftLayer, 0, 0);
	image(centerLayer, width / 3, 0);
	image(rightLayer, width / 3 * 2, 0);

}

function crossedTrigo(g, w, h, bow, shape) {
	const elementY = 100;
	var charset = "000000000---------000000000";
	g.noStroke();
	g.textAlign(CENTER, CENTER);
	g.textSize(h / elementY);
	for(let row = 0; row < elementY + 1; row++) {
		for(let col = 0; col < charset.length + 1; col++) {
			let posY = map(row, 0, elementY, 0, h);
			let magX = map(tan(radians(posY * bow + frameCount * 0.5)), -1, 1, -w * shape, w * shape);
			let posX = map(col, 0, charset.length, -magX, magX);
			g.push();
			g.translate(w / 2 + posX, posY);
			g.text(charset[col], 0, 0);
			g.pop();
		}
	}
}


function sinusTwist(g, w, h, bow) {
	let word = "*/*##*/*";
	g.noStroke();
	g.textSize(20);
	g.textAlign(CENTER);

	for(let i = 0; i < 220; i++) {
		let varSpacing = abs(sin(frameCount * 0.03 + i * bow) * 10);

		let totalWidth = 0;
		for(let char of word) {
			totalWidth += g.textWidth(char) + varSpacing * 10;
		}
		totalWidth -= varSpacing * 10;
		let posX = w / 2 - totalWidth / 2;
		for(let char of word) {
			g.text(char, posX, 5 * i);
			posX += g.textWidth(char) + varSpacing * 10;
		}
	}
}


function sinusString(g, w, h, bow, spread) {
	let word = "!%!%!%!%";
	let letters = word.split('');
	g.noStroke();
	g.textSize(20);

	for(let j = 0; j < 50; j++) {
		for(let i = 0; i < letters.length; i++) {
			let offsetX = sin(frameCount * 0.03 + j * bow) * spread * i;
			g.text(letters[i], w / 2 + offsetX * 0.5, j * 20);
		}
	}
}

function sinusSpacing(g, w, h, bow) {
	let word = "[&*&]";
	let spread = 40;
	g.noStroke();
	g.textSize(20);
	g.textAlign(LEFT);

	for(let i = 0; i < 70; i++) {
		let spac = abs(sin(frameCount * 0.03 + i * bow) * spread);

		// embedded textSpacing
		let totalWidth = 0;
		for(let char of word.repeat(8)) {
			totalWidth += g.textWidth(char) + spac;
		}
		totalWidth -= spac;
		let posX = w / 2 - totalWidth / 2;
		for(let char of word.repeat(30)) {
			g.text(char, posX, 20 * i);
			posX += g.textWidth(char) + spac;
		}
	}
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/