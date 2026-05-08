// {"P5LIVE":{"name":"hslu_u","mod":1778235549814}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%5;
	let sine = floor(5*sin(frameCount/20)+5)
	let words = ["oaoa ", "mnmnm ", "bdbd ", "wvwv ", "qpqp "];
	let rand = random(words);
	
	frameRate(2);
	background(230);
	fill(5);
	textSize(100);
	textWrap(CHAR);
	textFont("monospace");
	textAlign(LEFT);
	textStyle(NORMAL);
	textLeading(100*live/12);
	text(words[live].repeat(100), 
	10, 10, windowWidth/1.1, windowHeight);
	
	console.log(live);
}