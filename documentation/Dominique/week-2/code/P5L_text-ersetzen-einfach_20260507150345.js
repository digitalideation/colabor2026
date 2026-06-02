// {"P5LIVE":{"name":"text-ersetzen-einfach","mod":1778166225182}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	let sine = floor(5*sin(frameCount/10)+5)
	let words = ["ouo", "----", "<3 <3", "hi", "$e y@", "%%%%", "****", "....", "huhu"]
	let rand = random(words)
	
	frameRate(5)
	
	background(0, 8, 250)
	fill(255, 255, 255)
	textSize(100)
	textFont("Parkinsans")
	textStyle(NORMAL)
	textWrap(CHAR)
	textAlign(LEFT)
	textLeading(100)
	text(words[0].replace(/o/g, "a"), 400, 400, 
		windowWidth/1.1, windowHeight)
}