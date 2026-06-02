// {"P5LIVE":{"name":"dvd_animation_3d","mod":1777640316643}} 

let x;
let y;
let xspeed;
let yspeed;
let zspeed;
let depth = 2000
let r, g, b;

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	//initialise the variables for the
	//position of the cube at the
	//beginning!
	x = random(width);
	y = random(height);
	z = random (-depth, 0);
	
	//initialises speed at which the
	//cube moves in each direction!
	xspeed = 4;
	yspeed = 4;
	zspeed = 4;
	
	pickcolor();
	
}

function pickcolor() {
	r = random(255);
	g = random(255);
	b = random(255);

}

function draw() {
	//set origin of coordinate system
	//to top left corner of canvas!
	translate(-(width / 2), -height / 2, 0)
	background(0);
	fill(r, g, b);
	stroke(0)
	//rect(x, y, 20);
	//image(dvd, x, y, 80, 60);
	

	push()
	translate(x, y, z) // moves box to new pos
	box(100)
	pop()


	x = x + xspeed;
	y = y + yspeed;
	z = z + zspeed;
	
	
	if(z >= 0) {
		zspeed = -zspeed;
		z = 0;
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