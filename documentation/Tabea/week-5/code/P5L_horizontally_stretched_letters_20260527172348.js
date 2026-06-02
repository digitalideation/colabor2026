// {"P5LIVE":{"name":"horizontally_stretched_letters","mod":1779902628192}} 

let gridX = 20
let gridY = 5
let letter = "W"

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(3)
}

function draw() {
	background(0)
	fill(255)
	textAlign(LEFT, TOP)




	let gridWidth = width / gridX
	let gridHeight = height / gridY
	textSize(gridHeight*1.2)
	let y = 0

	for(let k = 0; k < gridY; k++) {
		let x = 0
		for(let i = 0; i < gridX; i++) {
			//
			let letterX = random(1) < 0.2 ? floor(random(3, 8)) : 1
			let letterWidth = letterX * gridWidth
			let scaleX = letterWidth / textWidth(letter)
			push()
			translate(x, y)
			scale(scaleX, 1)
			text(letter, 0, k*gridHeight)
			pop()
			x += letterWidth
		}
	}
}