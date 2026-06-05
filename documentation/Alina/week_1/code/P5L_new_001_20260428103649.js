// {"P5LIVE":{"name":"new_001","mod":1777372609858}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
}

function draw() {
	fill(255)
	square(300,200,100)
	textSize(random(12,200))
	fill("magenta")
	text("hallo",mouseX,mouseY)
	square(500,300,100,10)


}