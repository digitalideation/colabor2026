// {"P5LIVE":{"name":"new_011","mod":1777911994955}} 

let libs = ["https://tetunori.github.io/BMWalker.js/dist/v0.6.1/bmwalker.js"]

const bmw = new BMWalker();

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	clear ()
	// Get array of the current marker coordinates 
	const walkerHeight =  height/2;
	const markers = bmw.getMarkers(walkerHeight);
	
	translate(width/2, height /2)
	
	// Draw each markers
markers.forEach((m) => {
  circle(m.x, m.y, 6);
});
	
	
}