// {"P5LIVE":{"name":"text animation","mod":1778164240453}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	//Damit Framecount weniger schnell ist
	frameRate(7)
	background(0,0,255)
	fill(255)
	textSize(100*(live/2))
	//Zeilenumbruch bei Wort oder Character
	textWrap(CHAR)
	textFont('monospace')
	textAlign(LEFT)
	textStyle(random([NORMAL,ITALIC]))
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(50*(live/2))
	//.repeat um Text zu wiederholen
	text("zürich zürich ".repeat(100), 100,100, 
	windowWidth,windowHeight)
}