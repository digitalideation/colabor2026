// {"P5LIVE":{"name":"new_002","mod":1778162542959}} 


function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live= frameCount%10
	//Sinusfunktion brauchen um Wert zwischen -1 und 1 zu bekommen
	let sine= floor (5*sin[frameCount/10]+5)
	//Array mit Wörtern
	let words= ["꧁⎝ 𓆩༺✧༻𓆪 ⎠꧂"]
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
	textWrap(WORD);
	//LEFT linksbündig, RIGHT rechtsbündig, CENTER 
	textAlign(LEFT);
	//default ist textSize 100 -> Leading 100
	textLeading(100);
	// um eine Textbox zu machen,die einen Zeilenumbruch macht ("string",posx,posy,wW,wH)
	text("hello world".repeat(5),mouseX,mouseY,windowWidth/1.2,windowHeight);


}