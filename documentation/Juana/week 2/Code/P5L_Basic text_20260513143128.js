// {"P5LIVE":{"name":"Basic text","mod":1778682688388}} 

let font, points

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	let sine = floor(5*sin(frameCount/10)+5)
	let words = ("El amor es para mí un Iroqués, de color amarillo y feroz catadura Que viene siempre a galope, montado,En una yegua llamada Tristeza.");

	frameRate(2);
	background(225);
	fill(0,0,255);
	textSize(50);
	textWrap(WORD);
	textFont('monospace');
	textStyle(NORMAL);
	textLeading(40)
	// text(words .replace(/a/g,"w")),
	text((words),200,100, windowWidth/3, windowHeight);
	
	}
