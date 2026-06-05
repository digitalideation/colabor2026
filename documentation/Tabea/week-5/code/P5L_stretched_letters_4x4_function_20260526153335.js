// {"P5LIVE":{"name":"stretched_letters_4x4_function","mod":1779809615255}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(2)

}

function draw() {
background(0)
letter4x4("[0]","[=]","[@]","[?]", windowWidth/2, windowHeight/2, 0, 0, 0)
letter4x4("[?]","[0]","[!]","[@]", windowWidth/2, windowHeight/2, windowWidth/2, 0, 1)
letter4x4("[#]","[&]","[0]","[!]", windowWidth/2, windowHeight/2, 0, windowHeight/2, 2)
letter4x4("[+]","[0]","[&]","[%]", windowWidth/2, windowHeight/2, windowWidth/2, windowHeight/2, 3)







}


function letter4x4 (letter1, letter2, letter3, letter4, widthP, heightP, x, y, offset) {
	let gridY = 2
	let gridX = 2
	fill(255)
	let columnWidth = widthP / gridX
	let lineHeight = heightP / gridY

	let letterX1 = [1, 1, 1, 2, 1, 2]
	let letterY1 = [2, 1, 2, 1, 1, 2]

	let letterX2 = [1, 1, 1, 0, 1, 0]
	let letterY2 = [1, 1, 2, 0, 2, 0]

	let letterX3 = [1, 0, 0, 1, 0, 0]
	let letterY3 = [1, 0, 0, 1, 0, 0]

	let letterX4 = [0, 2, 0, 1, 1, 0]
	let letterY4 = [0, 1, 0, 1, 1, 0]

	textAlign(LEFT, TOP)


	let i = (frameCount + offset) % letterX1.length
	
	push()
    translate(x, y)  

	//letter1
	// calculates width of grid cells that should be filled with text
	push()
	let letterWidth1 = letterX1[i] * columnWidth
	let letterHeight1 = letterY1[i] * lineHeight
	textSize(letterHeight1)
	let scaleX1 = letterWidth1 / textWidth(letter1)
	scale(scaleX1, 1)
	text(letter1, 0, 0)
	pop()

	// letter 2
	push()
	let letterWidth2 = letterX2[i] * columnWidth
	let letterHeight2 = letterY2[i] * lineHeight
	textSize(letterHeight2)
	let scaleX2 = letterWidth2 / textWidth(letter2)
	scale(scaleX2, 1)
	text(letter2, columnWidth / scaleX2, 0)
	pop()


	// letter 3
	push()
	let letterWidth3 = letterX3[i] * columnWidth
	let letterHeight3 = letterY3[i] * lineHeight
	textSize(letterHeight3)
	let scaleX3 = letterWidth3 / textWidth(letter3)
	scale(scaleX3, 1)
	text(letter3, columnWidth / scaleX3, lineHeight)
	pop()

	// letter 4
	push()
	let letterWidth4 = letterX4[i] * columnWidth
	let letterHeight4 = letterY4[i] * lineHeight
	textSize(letterHeight4)
	let scaleX4 = letterWidth4 / textWidth(letter4)
	scale(scaleX4, 1)
	text(letter4, 0, lineHeight)
	pop()
	
	pop()
}
