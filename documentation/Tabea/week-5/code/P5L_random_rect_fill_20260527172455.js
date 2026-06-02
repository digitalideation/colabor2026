// {"P5LIVE":{"name":"random_rect_fill","mod":1779902695993}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(3)
}

function draw() {
	background(0)
	noStroke()
	let numberX = 8
	let numberY = 4
	for(let k = 0; k < numberY + 1; k++) {
		for(let i = 0; i < numberX + 1; i++) {
			shape4x4(i * width / numberX, k * height/numberY, width / numberX, height / 2)
		}
	}
}

function shape4x4(x, y, width4, height4) {
	let gridY = 6
	let gridX = 2
	let columnWidth = width4 / gridX
	let lineHeight = height4 / gridY

	let shapeX1 = [1, 1, 1, 2, 1, 2]
	let shapeY1 = [2, 1, 2, 1, 1, 2]

	rectMode(LEFT, TOP)


	let i = frameCount % shapeX1.length

	//calculates how many gridCells are left
	let maxPosX = gridX - shapeX1[i]
	let maxPosY = gridY - shapeY1[i]

	let randomPosX = floor(random(0, max(1, maxPosX + 1)))
	let randomPosY = floor(random(0, max(1, maxPosY + 1)))
	let shapeWidth1 = shapeX1[i] * columnWidth
	let shapeHeight1 = shapeY1[i] * lineHeight
	rect(x + randomPosX * columnWidth, y + randomPosY * lineHeight, shapeWidth1, shapeHeight1)
}