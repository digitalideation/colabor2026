// {"P5LIVE":{"name":"word_rotation_spinning_radius","mod":1779360576820}} 

let word = "SOUND"
// number of words per row
let wordCount = 20
// number of rows
let rowCount = 8

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)
	fill(255)
	textSize(30)

	let posX = width / 2
	let posY = height / 2
	let wordWidth = textWidth(word)

	for(let j = 0; j < rowCount; j++) {
		// radius changes for every repetition => creates multiple rows
		
		let radiusVar = sin(frameCount * 0.2) * 15
		//let radiusVar = sin(frameCount * 0.2) * 15 * j
		
		let radius = radiusVar + 5 + j * (wordWidth + 10)
		let speed = 0.2
		let direction
		// if number of row is even (divisible by two), positive direction
		if(j % 2 === 0) {
			direction = 1
		// else (meaning row number is odd), negative direction	
		} else {
			direction = -1
		}
		
		// rowOffset calculates offset for rotation: 
		// for every frame, number grows; speed can be
		// positive or negative (depending on direction)
		
		let rotation = 360 / wordCount

		for(let i = 0; i < wordCount; i++) {
			let rowOffset = frameCount * speed * direction
			// calculated offset is added to the angle
			let angle = i * rotation + rowOffset 
			// calculates cos of angle = x component of the point
			// of angle on circle with radius 1
			// with * radius, it is adapted to the real radius
			// of the row
			let x = posX + cos(radians(angle)) * radius
			// like let x, but sin of angle is calculated = 
			// y component of point
			let y = posY + sin(radians(angle)) * radius
			// writes word at position x/y with the angle which
			// changes continuously according to rowOffset
			textRot(word, x, y, angle)
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