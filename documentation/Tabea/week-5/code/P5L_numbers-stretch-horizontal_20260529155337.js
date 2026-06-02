// {"P5LIVE":{"name":"numbers-stretch-horizontal","mod":1780070017695}} 

let amountX = 9

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(3)
}

function draw() {
	background(0)
	fill(255)
	textAlign(CENTER, TOP)
	let letter = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
	let letterNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	let letterHeight = height / amountX
	textSize(letterHeight)

	for(let k = 0; k < amountX; k++) {
	let i = (frameCount + k * floor(random(1,9))) % letterNumber.length
		let letterWidth = width / letterNumber[i]


		let scaleX = letterWidth / textWidth(letter[i])
		push()
		scale(scaleX, 1)
		text(letter[i].repeat(letterNumber[i]), (width / 2) / scaleX, k * letterHeight)
		pop()
	}
}