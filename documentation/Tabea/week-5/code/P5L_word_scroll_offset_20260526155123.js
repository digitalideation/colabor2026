// {"P5LIVE":{"name":"word_scroll_offset","mod":1779810683882}} 

let wordCount = 6
let posX = 0
let posY = 0
let offsetX = 0
let word = "O-OO-O-O"
let layer

function setup() {
	background(0)
	createCanvas(windowWidth, windowHeight)
	layer = createGraphics (windowWidth, windowHeight)
}

function draw() {
	//background (0)
	
	layer.clear()
	layer.fill(255)
	layer.textAlign(CENTER)
	layer.textSize(30)
	let k = frameCount%9

for(let i = 0; i <= wordCount; i++) {
		posX = map(i, 0, wordCount, 0, width)
		offsetX = 2* random(-10,10)
		posX = posX + offsetX
		layer.text(word, posX, posY)
		posY = posY + layer.textSize()/10
		if (k===1) {
			fill(0,255,0)
			posX = map(i, 0, wordCount, 0, width)
		}
	}
	
    image(layer, 0, 0)
	
//print (offsetX)
}