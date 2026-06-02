// {"P5LIVE":{"name":"How to import libreries","mod":1778579750524}} 

// How to import libreries 
let libs = ['https://tetunori.github.io/BMWalker.js/dist/v0.6.1/bmwalker.js', '']

// Create biological motion walker instance
const bmw = new BMWalker();

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	
	// Get array of the current marker coordinates 
	const walkerHeight = height / 2;
	const markers = bmw.getMarkers(walkerHeight);
	
	
	translate (width / 2, height / 2) // move 0,0 origin 
	// translate (mouseX, mouseY)
	
		// Draw each markers
	markers.forEach((m) => {
	  circle(m.x, m.y, 60);
	});
	}