// {"P5LIVE":{"name":"typo_spacing_center","mod":1779055873559}} 

let word = "FLOAT"
let lineHeight = 27
let varySpacing = 0
let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2];

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function drawBlock(yOffset) {
	for(let i = 0; i < rows.length; i++) {
		let txt = word.repeat(rows[i]);
		let naturalWidth = 0;
		for(let char of txt) naturalWidth += textWidth(char);
		let spacing = (width - naturalWidth) / (txt.length - 1);
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