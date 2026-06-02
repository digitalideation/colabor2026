// {"P5LIVE":{"name":"counting_clock_001","mod":1780070580877}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(3)
}

function draw() {
	background(0)
	fill(255)
	count60(height / 2, width / 2, 0, 0)

	if(frameCount >= 20) {
		count60(height / 2, width / 2, width / 2, 0)
	}
	
	if(frameCount >= 40) {
		count60(height / 2, width/2, 0, height/2)
	}
	
		if(frameCount >= 60) {
		count60(height / 2, width/2, width/2, height/2)
	}

}


function count60(cellHeight, cellWidth, x, y) {
	textAlign(LEFT, TOP)
	let letter = ["00", "01", "02", "03", "04", "05", "06", "07", "08",
		"09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
		"20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
		"31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41",
		"42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52",
		"53", "54", "55", "56", "57", "58", "59", "60"
	]

	textSize(cellHeight)


	let i = frameCount % letter.length
	let scaleX = cellWidth / textWidth(letter[i])
	push()
	scale(scaleX, 1)
	text(letter[i], x / scaleX, y)
	pop()

	if(i % 7 === 0) {
		fill(255)
		rectMode(CORNER)
		rect(x, y, cellWidth, cellHeight)
	}
}