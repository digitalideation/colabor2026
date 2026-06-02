// {"P5LIVE":{"name":"commaline","mod":1778164206986}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	frameRate(10)
	noSmooth()
}

function draw() {
	background(30)
	let comma = ","
	let space = ["-"]
	let commaline;
	fill(255)
	textSize(windowWidth/5)
	textWrap(CHAR)
	textSize(windowWidth/50)
	textFont("monospace")
	//loop wiederholen bis i nicht mehr kleiner als 11 ist
	for (let i = 0; i < 11; i ++){
		space.push("---")
	 // space[i] wird bei jeder runde an comma angehängt = wird immer länger
		comma = comma + space[i]
	//wiederholt es 33 mal
		commaline = comma.repeat(33)
	// 100 = Abstand vom links 
    //commaline.length*i/1.1 = macht dass linine immer weiter unten ist, desto länger sie wird
		text(commaline,100,commaline.length*i/1.1, windowWidth/2.5,windowHeight);
	}
}