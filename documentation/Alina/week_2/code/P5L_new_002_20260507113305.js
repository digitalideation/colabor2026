// {"P5LIVE":{"name":"new_002","mod":1778153585435}} 


function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background(230);
	textFont("mono")
	//Pixelwert
	textSize(100);
	color(0);
	//BOLD,ITALIC,BOLDITALIC
	textStyle(BOLD);
	// WORD Zeilenumbruch nach ganzem Wort, CHAR Zeilenumbruch no matter what
	textWrap(WORD);
	//LEFT linksbündig, RIGHT rechtsbündig, CENTER 
	textAlign(CENTER);
	//default ist textSize 100 -> Leading 100
	textLeading(120);
	// um eine Textbox zu machen,die einen Zeilenumbruch macht ("string",posx,posy,wW,wH)
	text("hi ".repeat(1000),100,100,windowWidth/1.2,
	windowHeight);

}