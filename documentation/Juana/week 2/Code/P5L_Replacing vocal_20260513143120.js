// {"P5LIVE":{"name":"Replacing vocal","mod":1778682680462}} 

let font, points

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	let sine = floor(5*sin(frameCount/10)+5)
	let words = ["Iroqués", "catadura", "galope", "esporas", "asfaltada",";","arboledos","silencio","aaa","3"];
	
	frameRate(2);
	background(225);
	fill(0,0,255);
	textSize(50);
	textWrap(CHAR);
	textFont('monospace');
	textStyle(NORMAL);
	textLeading(30);
	text(words[live].replace(/[aeiou]/g,"w").repeat(100),10,10,
	windowWidth/1.1, windowHeight);
	
	}
	//Replacing vocals 
	// text(words[0].replace(/o/g,"a"),400,400,