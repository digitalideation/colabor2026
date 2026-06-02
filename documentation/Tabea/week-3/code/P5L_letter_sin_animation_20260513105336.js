// {"P5LIVE":{"name":"letter_sin_animation","mod":1778669616205}} 

let word = "SOUND";
let letters = [];
let offsetX = 0

function setup() {
	createCanvas(windowWidth, windowHeight);
	letters = word.split('');
}

function draw() {
	background(0);
	fill(255)
	textSize(22)
	
	for(let j = 0; j < 50; j++) {
		for(let i = 0; i < letters.length; i++) {
			offsetX = sin(frameCount * 0.07 + j * 0.08) * width/4 * i
			text(letters[i], width/2 + offsetX * 0.5, 20 * j);
		}
	}
}