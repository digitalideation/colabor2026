// {"P5LIVE":{"name":"word_walker_extended","mod":1779194628962}} 

let word = "SOUND"
let size = 80

let x0 = 1100,
	y0 = 0 * size
let x1 = 100,
	y1 = 1 * size
let x2 = 500,
	y2 = 2 * size
let x3 = 300,
	y3 = 3 * size
let x4 = 900,
	y4 = 4 * size
let x5 = 1300,
	y5 = 5 * size
let x6 = 600,
	y6 = 6 * size
let x7 = 0,
	y7 = 7 * size
let x8 = 800,
	y8 = 8 * size
let x9 = 100,
	y9 = 9 * size
let x10 = 1500,
	y10 = 10 * size
let x11 = 700,
	y11 = 11 * size
let x12 = 200,
	y12 = 12 * size
let x13 = 900,
	y13 = 13 * size
let x14 = 400,
	y14 = 14 * size

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(15)
}

function draw() {
	background(0, 5)
	textAlign(LEFT, TOP)
	textSize(size)
	stroke(255)
	fill(0)
	//fill(255)
	let speed0 = abs(sin((frameCount + 0) * 0.03) * 10)
	let speed1 = abs(sin((frameCount + 20) * 0.05) * 10)
	let speed2 = abs(sin((frameCount + 40) * 0.04) * 10)
	let speed3 = abs(sin((frameCount + 60) * 0.04) * 10)
	let speed4 = abs(sin((frameCount + 80) * 0.02) * 10)
	let speed5 = abs(sin((frameCount + 100) * 0.03) * 10)
	let speed6 = abs(sin((frameCount + 120) * 0.04) * 10)
	let speed7 = abs(sin((frameCount + 140) * 0.05) * 10)
	let speed8 = abs(sin((frameCount + 160) * 0.02) * 10)
	let speed9 = abs(sin((frameCount + 180) * 0.04) * 10)
	let speed10 = abs(sin((frameCount + 200) * 0.04) * 10)
	let speed11 = abs(sin((frameCount + 220) * 0.03) * 10)
	let speed12 = abs(sin((frameCount + 240) * 0.02) * 10)
	let speed13 = abs(sin((frameCount + 260) * 0.05) * 10)
	let speed14 = abs(sin((frameCount + 280) * 0.04) * 10)

	text(word, x0, y0)
	x0 += speed0
	if(x0 >= width) {
		x0 = 0
	}

	text(word, x1, y1)
	x1 += speed1
	if(x1 >= width) {
		x1 = 0
	}

	text(word, x2, y2)
	x2 += speed2
	if(x2 >= width) {
		x2 = 0
	}

	text(word, x3, y3)
	x3 += speed3
	if(x3 >= width) {
		x3 = 0
	}

	text(word, x4, y4)
	x4 += speed4
	if(x4 >= width) {
		x4 = 0
	}

	text(word, x5, y5)
	x5 += speed5
	if(x5 >= width) {
		x5 = 0
	}

	text(word, x6, y6)
	x6 += speed6
	if(x6 >= width) {
		x6 = 0
	}

	text(word, x7, y7)
	x7 += speed7
	if(x7 >= width) {
		x7 = 0
	}

	text(word, x8, y8)
	x8 += speed8
	if(x8 >= width) {
		x8 = 0
	}

	text(word, x9, y9)
	x9 += speed9
	if(x9 >= width) {
		x9 = 0
	}

	text(word, x10, y10)
	x10 += speed10
	if(x10 >= width) {
		x10 = 0
	}

	text(word, x11, y11)
	x11 += speed11
	if(x11 >= width) {
		x11 = 0
	}

	text(word, x12, y12)
	x12 += speed12
	if(x12 >= width) {
		x12 = 0
	}

	text(word, x13, y13)
	x13 += speed13
	if(x13 >= width) {
		x13 = 0
	}

	text(word, x14, y14)
	x14 += speed14
	if(x14 >= width) {
		x14 = 0
	}
}