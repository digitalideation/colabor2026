// {"P5LIVE":{"name":"hslu_regentage","mod":1778235534277}} 


function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(5);
	noSmooth();
}

function draw() {
	background(10);
	fill(250);
	let count = floor(30*sin(frameCount/10)+30);
	let comma = ",";
	let space = [""];
	let commaline;
	let size = 50;
	textSize(windowWidth/50);
	textFont("monospace");
	textWrap(CHAR);
	textAlign(CENTER);
	for (let i=0; i<12; i++){
		space.push("-");
		comma = comma + space[i];
		commaline = comma.repeat(count+33);
		text(commaline, 10, commaline.length*i/4, windowWidth, windowHeight);
	}
}