// {"P5LIVE":{"name":"text_trace","mod":1779194706327}} 

let word1 = "SOUND"
let word2 = "*"
let word3 = "---"
let spac = 10
let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0
let x3 = 0
let y3 = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
		background(0)
}

function draw() {
	textSize (10)
	spac = abs(sin(frameCount * 0.02) * 30)
	x1 = sin(frameCount * 0.04) * 500
	y1 = cos(frameCount * 0.01) * 400
	fill(0,255,0)
	textSpacing(word1, spac, width/2 + x1, height/2 + y1)
	
	
	textSize(20)
	fill(255,0,255)
	x2 = sin(frameCount * 0.04) * 800
	y2 = sin(frameCount * 0.08) * 200
	textSpacing(word2, spac,width/2 + x2, height/2 + y2)
	
	
	textSize(20)
	fill(0,0,255)
	x3 = sin(frameCount * 0.02) * 900
	y3 = cos(frameCount * 0.03) * 700
	textSpacing(word3, spac -20 ,width/2 + x3, height/2 + y3)
	
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