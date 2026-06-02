# Week 1

## Day 1

#### First sketch

started creating Molnar Mockups

```javascript
// {"P5LIVE":{"name":"basic_molnar_tunnel","mod":1777994789362}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 255, 200)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width * 0.5
	posY = height * 0.5
}

function draw() {
	background (255, 25)
	noFill()
	strokeWeight(1)
	stroke(0)
	dimX = 300 + (tan(frameCount * 3) * 600)*(sin(frameCount * 2))
	num = 20
	reduction = dimX / num
	//for loop
	for(let i = 0; i < num; i++){
		rect(posX, posY, 
		(dimX) - (reduction * i))
	}
	text (frameCount, 400, 400)
}
```

![P5L_basic_molnar_tunnel_20260505152629](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_1/images/P5L_basic_molnar_tunnel_20260505152629.png)



## Day 2

Introduction into funtcions to multiply molnar squares

```javascript
// {"P5LIVE":{"name":"basic_molnar_animation","mod":1777462471483}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 255, 200)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width * 0.5
	posY = height * 0.5
}

function draw() {
	background (100,100,255)
	noFill()
	strokeWeight (2)
	stroke(0)
	let count = 12
	for (let i = 0; i < count; i++){
		let dimension = width /count
		let posX = dimension / 2 + (i * dimension)
		for (let j = 0; j < count; j++){
			let posY = dimension / 2 + (j * dimension)
			tmcs (posX, posY, dimension, 10, 400)
			
		}
		
	}
}




// this function draws squares at position
// posX and posY, and they moce randomly
// a tiny bit
function tmcs (x, y, dim, num, speed) {
	
	let dimension = dim + sin(frameCount * speed * 10)
	//num = 10
	reduction = dimension / num
	
	for(let i = 0; i < num; i++){
		let offsetX = random (7)
		let offsetY = random (7)
		stroke (255, 0, 255)
		strokeWeight (2)
		square(
			x + offsetX, 
			y + offsetY, 
			(dimension) - (reduction * i)
		)
	}
}
```

![P5L_basic_molnar_animation_20260429112940](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_1/images/P5L_basic_molnar_animation_20260429112940.png)

![P5L_basic_molnar_animation_20260429113306](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_1/images/P5L_basic_molnar_animation_20260429113306.png)

We also had our first Introduction into the 3rd (Z) dimension in P5 

trying to place a cube and move it in a organic way.

```javascript
// {"P5LIVE":{"name":"new_002","mod":1777474336597}} 

let x;
let y;
let xspeed;
let yspeed;
let zspeed;
let depth = 2000
let dvd;
let r, g, b;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //intiialize the variables
  //for the position of the cube
  //at the beginning
  x = random(width);
  y = random(height);
  z = random(-depth, 0);
  //initialize the speed at which the cube
  //moves!!!
  xspeed = 10;
  yspeed = 10;
  pickcolor();
}

function pickcolor() {
  r = random(255);
  g = random(255);
  b = random(255);

}

function draw() {
	translate (-width/2, -height/2)
  background(0);
  //noStroke(255);
  fill(255);
  fill (r, g, b);
  push ()
  translate (x, y, z)
  box (100)
  pop()
  //rect(x, y, 80, 60);
  //image(dvd, x, y, 80, 60);


  x = x + xspeed;
  y = y + yspeed;
  z = z + zspeed;

  if (z >= 0) {
    zspeed = -zspeed;
    z = 0;
    pickcolor();
  } else if (z <= -depth) {
    zspeed = -zspeed;
    z = -depth;
    pickcolor();
  }

  if (x >= width) {
    xspeed = -xspeed;
    x = width;
    pickcolor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickcolor();
  }

  if (y >= height) {
    yspeed = -yspeed;
    y = height;
    pickcolor();
  } else if (y <= 0) {
    yspeed = -yspeed;
    y = 0;
    pickcolor();
  }
}
```

![P5L_new_002_20260429140922](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_1/images/P5L_new_002_20260429140922.png)

## Day 3

Introduction into the soundapp

Software [VCV Rack]()

- sound sources
- envelopes
- mixers
- modulation
- sequencies

![Bildschirmfoto 2026-04-30 um 14.27.59](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_1/images/Bildschirmfoto 2026-04-30 um 14.27.59.png)
