// {"P5LIVE":{"name":"Text test_002","mod":1778682698352}} 

let font, points

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background(225);

	frameRate(4);
	
	let comma = "3";
	let space = ["--"];
	let commaline;
	let count = frameCount%10
	
	fill(0,0,255);
	textSize(windowWidth/50);
	textWrap(CHAR);
	textFont('monospace');
	// textLeading(2)
	for (let i=0; i<11; i++){
	
	space.push("tercer");
	comma = comma + space[1];
	commaline = comma.repeat(33)
	let x = sin(frameCount) *50;

	text(commaline,windowWidth * 0.3 + x, i* 100, windowWidth, windowHeight/ 2);
	console.log (x)
	}
}