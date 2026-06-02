// {"P5LIVE":{"name":"letter_sin_animation_spacing","mod":1778866986902}} 

let word = "SOUND "

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);
	fill(255)
	textSize(20)
	textAlign(CENTER)
	let cycle = frameCount % 9 + 1
	print(cycle)

	for(let i = 0; i < 50; i++) {
	fill (255)
	 let spac = abs(sin(frameCount * 0.02 + i * 0.2) * 40)
	textSpacing(word.repeat(cycle * 15),spac, 0,20*i)
	}
	
	

}

function textSpacing(txt, spacing, x, y) {
	let totalWidth = 0;

	for(let char of txt) {
		totalWidth += textWidth(char) + spacing;
	}

	//let x = width / 2 - totalWidth / 2;
	//let y = height / 2;

	for(let char of txt) {
		text(char, x, y);
		x += textWidth(char) + spacing;
	}
}