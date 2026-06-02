// {"P5LIVE":{"name":"text-loops_001","mod":1778231616901}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(4)
	noSmooth()
	
}

function draw() {
	let comma = "<<@>> "
	let space = ["-"]
	let commaline
	let count = frameCount%10
	
	background(0, 8, 250)
	fill(255, 255, 255)
	textSize(windowWidth/50)
	textFont("monospace")
	textWrap(CHAR)

	for (let i=0; i<11; i++) {
		space.push("**$**")
		comma = comma + space[i]
		commaline = comma.repeat(count+1+33)
		text(commaline, 100, commaline.length*i*count, windowWidth/count, windowHeight)
	}

}