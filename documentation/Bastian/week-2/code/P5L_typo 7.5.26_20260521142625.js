// {"P5LIVE":{"name":"typo 7.5.26","mod":1779373585168}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10;
	let words = ["rain" , "drops" , "falling"];
	let rand = random(words)
	let sine = floor(5*sin(frameCount/10)+5)
	
	frameRate(5)
	background(220)
	fill(random(0,255), random(0,255), random(0,255));
	textSize(15)
	textWrap(random([CHAR,WORD]))
	textFont("monospace")
	textAlign(LEFT)
	textStyle(random([NORMAL,ITALIC]))
	textLeading(50)
	text(rand.repeat(1000),100, 50,
	windowWidth/1.2, windowHeight)
	

}