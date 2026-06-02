// {"P5LIVE":{"name":"text animation_002","mod":1778164214820}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	let words = "hässig ";
	let rand = random(words);
	let sine = floor(5*sin(frameCount/10)+5)
	//Damit Framecount weniger schnell ist
	frameRate(10)
	background(0,0,255)
	fill(255)
	textSize(100)
	//Zeilenumbruch bei Wort oder Character
	textWrap(CHAR)
	textFont('monospace')
	textAlign(LEFT)
	textStyle(ITALIC)
	
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(30*(live/2))
	//.replace(/x/g,"a") = alle x werden mit a ersetzt
	text(words.replace(/i/g,"!").repeat(1000), 500,100, 
	windowWidth,windowHeight)
}