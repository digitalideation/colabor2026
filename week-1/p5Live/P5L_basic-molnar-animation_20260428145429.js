// {"P5LIVE":{"name":"basic-molnar-animation","mod":1777388069280}} 
// declare initiale variables for drawing a series of concentric squares
let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

// initialize the sketch
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
	// the following functions are very important for 
	// setting the squares origin point
	rectMode(CENTER)
	// and the angles to be calculated in the 0 - 360 mode
	// and not in radians 0 - 2*PI
	angleMode(DEGREES)
	// set initial posX and posY to half the canvas
	// so that the square sits in the center of the canvas
	posX = width / 2
	posY = height / 2
}

function draw() {
	// set initial state of the canvas:
	// black background
	background(255)
	// all shapes below this function will have no filling
	noFill()
	// the outline stroke will be 3px
	strokeWeight(3)
	// and the outline will be colored in black
	stroke(0)
	// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
	// ANIMATE THE MOLNÁR SQUARES!
	// calculate the dimension of the square
	// based on a sin function
	// frame count is a p5.js variable that counts the 
	// number of frames being drwan since the program has started
	// here below I calculate the size of the square using the sin()
	// function that returns a value between -1 and 1 representing 
	// a point on circle given an angle, in this case frameCount
	// will be used as an "angle" that chnages over time
	dimX = 300 + sin(frameCount * 4) * 10 
	num = 10
	reduction = dimX / num
	// for loop
	for(let i = 0; i < num; i++) {
		// here I use the random function
		// to add a slight offset to the squares
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 0)
		strokeWeight(3)
		// here I use if statements
		// to change the appearence of the square
		if(i == 0){
			// fill(0, 255, 0)
			stroke(0, 0, 255)
			strokeWeight(1)
		}
		
		if(i == 4){
			// fill(0, 255, 0)
			stroke(0, 0, 255)
			strokeWeight(1)
		}
		// ultimately here I draw the square
		square(
			posX + offsetX,
			posY + offsetY,
			(dimX) - (reduction * i)
		)
	}
}


