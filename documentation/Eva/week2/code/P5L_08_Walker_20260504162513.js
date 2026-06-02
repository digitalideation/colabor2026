// {"P5LIVE":{"name":"08_Walker","mod":1777911913129}} 

let libs = ['https://tetunori.github.io/BMWalker.js/dist/v0.6.1/bmwalker.js']
	const bmw = new BMWalker();

function setup() {
	createCanvas(windowWidth, windowHeight)


}

function draw() {
	//clear()
	const walkerHeight = 500;
const markers = bmw.getMarkers(walkerHeight);

//translate(width/2, height/2)
translate(mouseX, mouseY)
markers.forEach((m) => {
  circle(m.x, m.y, 50);
});
	
}