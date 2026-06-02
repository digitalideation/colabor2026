// {"P5LIVE":{"name":"new_001","mod":1779382268780}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(3)
}

function draw() {
	background(0)
	let amountX = 12
	let amountY = 8
	let gridX = windowWidth / amountX
	let gridY = windowHeight / amountY
	let letterRep = [1, 2, 3, 4]
	let wordArray = ["1", "2", "3", "4"]
	let posY = 0
	let posX = 0

	textAlign(LEFT, TOP)



	for(let k = 0; k < amountY; k++) {
		for(let j = 0; j < amountX; j++) {
			textSize(gridY * 1.3)
			// frameCount gets higher; random number from 0 to 4 is added; result
			// is calculated down to length of wordArray -> lies between 0 and 3 because
			// 4 elements in wordArray (0,1,2,3)
			let i = (frameCount + floor(random(4))) % wordArray.length
			let word = wordArray[i]
			let repeatedText = word.repeat(letterRep[i])
			let scaleX = gridX / textWidth(repeatedText)
			fill(255)
			push()
			translate(j * gridX, k * gridY)
			scale(scaleX, 1)
			text(repeatedText, 0, 0)
			pop()
		}
	}
}