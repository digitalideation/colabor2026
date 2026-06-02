// {"P5LIVE":{"name":"typo 2 7.5.26","mod":1779373655924}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
		let live = frameCount%4;
	let words = ["x x x x x x", "o o o o o o", "w w w w w w", "z z z z z z", "s s s s s s"];
	let rand = random(words)
	let sine = floor(5*sin(frameCount/10)+5)
	
	// make create letter spacing from sinus (wave form)
	let number = sin(frameCount) * 10

	// generate string for input from changing sinus number
	let letterSpacing = number + "px"
	// apply changing letter spacing 
	select('canvas').elt.style.letterSpacing = letterSpacing
	
	frameRate(10)
	background(0, 100, 100, 80)
	fill(150);
	textSize(50)
	textWrap(CHAR)
	textFont("monospace")
	textAlign(LEFT)
	textStyle(NORMAL)
	textLeading(30)
	text(words[live].repeat(500),50, 50,
	windowWidth/1, windowHeight)
}