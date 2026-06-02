// {"P5LIVE":{"name":"random_letter_pos","mod":1779809631337}} 

let word = "SOUND";
let letters = [];
let offsetX = 0

function setup() {
	createCanvas(windowWidth, windowHeight);
	letters = word.split('');
	frameRate(3)
}

function draw() {
	background(0,90);
	fill(255)
	textSize(60)
	

	for(let i = 0; i < letters.length; i++) {
		text(letters[i], random(width), random(height));
	}
}