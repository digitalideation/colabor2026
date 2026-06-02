// {"P5LIVE":{"name":"rotating_letters_fullscreen","mod":1779460614494}} 

let word = "&&"
let letters = []
let positions = []
let amount = 100

function setup() {
	createCanvas(windowWidth, windowHeight)
	letters = word.split('')

	// calculates as many random x and y positions as prescribed in amount
	for(let j = 0; j < amount; j++) {
		positions.push({
			x: random(width),
			y: random(height)
		})
	}
}

function draw() {
	background(0)
	fill(255)
	textSize(10)
	let radius = 80

	// for each repetition of the j loop, a different precalculated random
	// x,y combination is drawn
	for(let j = 0; j < positions.length; j++) {
		let posX = positions[j].x
		let posY = positions[j].y

		for(let i = 0; i < letters.length; i++) {
			let angle = i * (360 / letters.length) + frameCount
			push()
			translate(posX, posY)
			rotate(radians(-1 * angle))
			text(letters[i], radius, 0)
			pop()
		}
	}
}