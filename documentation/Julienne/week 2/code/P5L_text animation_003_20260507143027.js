// {"P5LIVE":{"name":"text animation_003","mod":1778164227708}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	let words = ["-- --","ooo oo",",,,,","!!! !!","???? ?","<< <<<",".. ...","||| ||||||","xx x",">> >>>"];
	let rand = random(words);
	let sine = floor(5*sin(frameCount/10)+5)
	//Damit Framecount weniger schnell ist
	frameRate(10)
	background(0,0,255)
	fill(255)
	textSize(200)
	//Zeilenumbruch bei Wort oder Character
	textWrap(CHAR)
	textFont('monospace')
	textAlign(LEFT)
	textStyle(NORMAL)
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(30*(live/2))
	//.repeat um Text zu wiederholen
	text(words[sine].repeat(1000), 100,100, 
	windowWidth-100,windowHeight-100)
}