// {"P5LIVE":{"name":"letter_repetition_spacing_animation","mod":1779055818967}} 

let word = "GONE "
let lineHeight = 27
let varySpacing = 0
let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2];

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function drawBlock(yOffset) {

	for(let i = 0; i < rows.length; i++) {
		// code is repeated as long as there's a new argument in the rows array to put in 
		let txt = word.repeat(rows[i]);
		// word is repeated as many times as twice the argument in the rows array
		let naturalWidth = 0;
		for(let char of txt) naturalWidth += textWidth(char);
		// calculates natural width; goes through every character of the word and adds
		// it to the value of the variable naturalWidth -> when it's gone through all
		// letters, naturalWidth equals width of the letters without spacing
		let spacing = (width - naturalWidth) / (txt.length - 1);
		// spacing is calculated based by calculating the white space by subtracting
		// the naturalWidth of the overall width and then divided by the text length 
		// minus 1 because there's 1 less gap than there's letters

		varySpacing = abs(sin(frameCount * 0.03))


		textSpacing(txt, varySpacing * spacing, width / 2, yOffset + lineHeight * (i + 1))
	}
}

function draw() {
	background(0)
	fill(255)
	textSize(20)
	drawBlock(0)
	drawBlock(rows.length * lineHeight)
}

function textSpacing(txt, spacing, x, y) {
	let totalWidth = 0;
	for(let char of txt) {
		totalWidth += textWidth(char) + spacing;
	}
	totalWidth -= spacing;
	x -= totalWidth / 2;
	for(let char of txt) {
		text(char, x, y);
		x += textWidth(char) + spacing;
	}
}