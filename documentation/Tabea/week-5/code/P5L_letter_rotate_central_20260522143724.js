// {"P5LIVE":{"name":"letter_rotate_central","mod":1779460644227}} 

let word = "SOUND"
let letters = []
let wordCount = 10
function setup() {
	createCanvas(windowWidth, windowHeight)
	letters = word.split('')
}
function draw() {
	background(0)
	fill(255)
	textSize(10)
	let posX = width / 2
	let posY = height / 2
	let letterWidth = textWidth(letters[0])
	// j goes up to letters.length instead of rowCount
	for(let j = 0; j < letters.length; j++) {
		textSize(5*(j+1))
		let radius = 50 + j * (letterWidth + 50)
		let speed = 0.2 * j/4
		let direction
		if(j % 2 === 0) {
			direction = 1
		} else {
			direction = -1
		}
		let rotation = 360 / wordCount
		for(let i = 0; i < wordCount; i++) {
			let rowOffset = frameCount * speed * direction
			let angle = i * rotation + rowOffset
			let x = posX + cos(radians(angle)) * radius
			let y = posY + sin(radians(angle)) * radius
			// passes the letter of the current row instead of the whole word
			textRot(letters[j], x, y, angle)
		}
	}
}
function textRot(txt, x, y, angle) {
	push()
	translate(x, y)
	rotate(radians(angle))
	text(txt, 0, 0)
	pop()
}