// {"P5LIVE":{"name":"stretching_letter","mod":1780069957932}} 

let letter = "&"
function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background(0)
	fill(255)
	//stroke(0,255,255)
	
	
	let varySize = abs(sin(frameCount * 0.05)) * 2
	//let varySize = 1
	textSize(800 * varySize)
	textAlign(CENTER, CENTER)
	
	let scaleX = abs(sin(frameCount * 0.05)) * 6
	//let scaleX = 1

	push()
	scale(scaleX, 1)
	text(letter, 500, height/2)
	pop()
	

}