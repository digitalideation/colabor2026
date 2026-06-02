// {"P5LIVE":{"name":"letter_sin_animation_central","mod":1778866999771}} 

let word = "zündhölzli"

function setup() {
	createCanvas(windowWidth, windowHeight)

}

function draw() {
	background(0)
	fill(255)
	textSize(20)
	textAlign(CENTER)

	for(let i = 0; i < 50; i++) {
		let varSpacing = abs(sin(frameCount * 0.03 + i *0.3) * 10)
		textSpacing(word, 10 * varSpacing, width / 2, 40 * i)
	}
}



function textSpacing(txt, spacing, x, y) {
	let totalWidth = 0;
	for(let char of txt) {
		totalWidth += textWidth(char) + spacing;
	}
	totalWidth -= spacing; // remove trailing spacing after last char

	x -= totalWidth / 2; // ← shift left by half, so center stays fixed

	for(let char of txt) {
		text(char, x, y);
		x += textWidth(char) + spacing;
	}
}