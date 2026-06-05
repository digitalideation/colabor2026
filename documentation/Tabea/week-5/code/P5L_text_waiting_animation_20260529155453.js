// {"P5LIVE":{"name":"text_waiting_animation","mod":1780070093744}} 

let word = "SOUND"
let wordCount = 12


function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(5)
}

function draw() {
	background(0, 80)
	fill(255)
	textSize(20)
	textAlign(CENTER, CENTER)
	let rotation = 360 / wordCount
	let posX = width / 2
	let posY = height / 2
	let radius = 200

	let i = frameCount % wordCount
	let angle = i * rotation

	let x = posX + cos(radians(angle)) * radius
	let y = posY + sin(radians(angle)) * radius
	textRot(word, x, y, angle)
}

function textRot(txt, x, y, angle) {
	push()
	translate(x, y)
	rotate(radians(angle))
	text(txt, 0, 0)
	pop()
}