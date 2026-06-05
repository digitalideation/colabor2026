// {"P5LIVE":{"name":"new_002","mod":1778158899619}} 


function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live= frameCount%10
	//frameRate -> 
	frameRate(1);
	//background(230);
	textFont("mono")
	//Pixelwert
	textSize(100);
	color(0);
	//BOLD,ITALIC,BOLDITALIC
	textStyle(random([ITALIC,NORMAL]));
	// WORD Zeilenumbruch nach ganzem Wort, CHAR Zeilenumbruch no matter what
	textWrap(CHAR);
	//LEFT linksbündig, RIGHT rechtsbündig, CENTER 
	textAlign(LEFT);
	//default ist textSize 100 -> Leading 100
	textLeading(32*live);
	// um eine Textbox zu machen,die einen Zeilenumbruch macht ("string",posx,posy,wW,wH)
	text(" feminist hacking ".repeat(random(20)),100,100,windowWidth/1.2,
	windowHeight);

}