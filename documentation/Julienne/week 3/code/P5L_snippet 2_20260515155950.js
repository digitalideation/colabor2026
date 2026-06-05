// {"P5LIVE":{"name":"snippet 2","mod":1778860790443}} 

let colorText;
let colorBG;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorText = color(255);
	colorBG = color(0, 0, 255);
}

function draw() {
	//wenn maus gedrückt wird und zwar in einem wertebereich von x bei width/2
	//wird wert in colorText geändert 
	//ansonsten wenn maus gedrückt wird, wird Wert in colorBG geändert
	if(mouseIsPressed) {
		if(mouseX < width / 2) {
			colorText = color(random(255), random(255), random(255));
		} else {
			colorBG = color(random(255), random(255), random(255));
		}
	}

	let live = frameCount % 10;
	let words = ["-- --", "ooo oo", ",,,,", "!!! !!", "???? ?", "<< <<<", ".. ...", "||| ||||||", "xx x", ">> >>>"];
	let sine = floor(5 * sin(frameCount / 10) + 5);
	//Damit Framecount weniger schnell ist
	frameRate(10);
	//Wert von colorBG als Hintergrund übernehmen
	background(colorBG);
	//Wert von colorText als Textfarbe übernehmen
	fill(colorText);
	textSize(200);
	//Zeilenumbruch bei Wort oder Character
	textWrap(CHAR);
	textFont('monospace');
	textAlign(LEFT);
	textStyle(NORMAL);
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(30 * (live / 2));
	//.repeat um Text zu wiederholen
	text(words[sine].repeat(1000),
	100, 100, windowWidth - 100, windowHeight - 100);
}