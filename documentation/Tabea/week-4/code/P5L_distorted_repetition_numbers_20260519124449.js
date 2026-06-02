// {"P5LIVE":{"name":"distorted_repetition_numbers","mod":1779194689358}} 

let amountX = [1, 2, 2, 3, 3, 5, 9, 20, 40, 80]
let amountY = [1, 1, 2, 3, 5, 5, 9, 15, 35, 60]
let wordArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(2)
}

function draw() {
	background(255, 0, 0)
	textAlign(LEFT, TOP)

	// i always counts from 1 until end of amountX Array
	let i = frameCount % amountX.length

	// in different arrays, element i is used
	let rows = amountY[i]
	let cols = amountX[i]
	let word = wordArray[i]

	// writing of horizontally repeated text is repeated vertically
	// with for-loop -> for every run, posY changes = duplication
	for(let j = 0; j < rows; j++) {
		textSize((height / rows) * 1.3)
		// height/rows = line height
		// vertical position is j * line height -> lines are drawn
		// beneath and not on top of each other
		let posY = j * (height / rows)
		// text is repeated horizontally as often as array for cols says
		let repeatedText = word.repeat(cols)
		// horizontal scale factor is calculated so that whole text fills
		// width of screen
		let scaleX = width / textWidth(repeatedText)

		fill(255)
		push()
		// text is distorted according to scale factor
		scale(scaleX, 1)
		// repeated text is written on the posY which changes with every run
		text(repeatedText, 0, posY)
		pop()
	}

}