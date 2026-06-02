// {"P5LIVE":{"name":"Walker","mod":1777913027828}} 

let libs = ['https://tetunori.github.io/BMWalker.js/dist/v0.6.1/bmwalker.js']

// Create biological motion walker instance
const bmw = new BMWalker();

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	clear()
	// Get array of the current marker coordinates 
	const walkerHeight =500;
	const markers = bmw.getMarkers(walkerHeight);

translate(width / 2, height / 2)
	// Draw each markers
	markers.forEach((m) => {
	circle(m.x, m.y, 60, 4);
	});

}