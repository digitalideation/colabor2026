// {"P5LIVE":{"name":"dvd-logo","mod":1777483987463}} 

let x;
let y;
let z;
let xspeed;
let yspeed;
let zspeed;
let depth = 2000
let dvd;
let r, g, b;


function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	// initialize the variables
	// for the position of the cube 
	// at the beginning!
	x = random(width);
	y = random(height);
	z = random(-depth, 0)
	// initialize speed at which the cube
	// moves!
	xspeed = 4;
	yspeed = 4;
	zspeed = 4;
	// IDK!
	pickcolor();
}

function pickcolor() {
	r = random(255);
	g = random(255);
	b = random(255);

}

function draw() {
	translate(-width/2, -height/2)
	background(0);
	// noStroke(255);
	// fill(255);
	fill(r, g, b);
	
	push()
	translate(x, y, z)
	box(100)
	pop()
	// rect(x, y, 80, 60);
	//image(dvd, x, y, 80, 60);
	x = x + xspeed;
	y = y + yspeed;
	z = z + zspeed;
	
	if(z >= 200) {
		zspeed = -zspeed;
		z = 200;
		pickcolor();
	} else if(z <= -depth) {
		zspeed = -zspeed;
		z = -depth;
		pickcolor();
	}

	if(x >= width) {
		xspeed = -xspeed;
		x = width;
		pickcolor();
	} else if(x <= 0) {
		xspeed = -xspeed;
		x = 0;
		pickcolor();
	}

	if(y >= height) {
		yspeed = -yspeed;
		y = height;
		pickcolor();
	} else if(y <= 0) {
		yspeed = -yspeed;
		y = 0;
		pickcolor();
	}
}