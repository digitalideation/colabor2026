

## Week 1

#### Day 1

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(150,50,130)
	
}

function draw() {
	// paint program – very basic
	ellipse(mouseX, mouseY, 30)
	
}
```

![P5L_basic_paint_20260429090502](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/P5L_basic_paint_20260429090502.png)

#### Day 2

```javascript
let dimX = 400
let dimY = dimX
let num = 10
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(200, 0, 100)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2 
}

function draw() {
	//
	background(200, 0, 100)
	noFill()
	strokeWeight(1)
	stroke(0)
	//animation
	//calculate the dimension of the square
	// based on a sin function
	dimX = 200 + sin(frameCount * 3) * 100
	num = 10
	reduction = dimX / num
	// for loop
	for(let i = 0; i < num ; i++){
		let offsetX = random(10)
		let offsetY = random(10)
		stroke(255)
		if(i > 2){
			stroke(0, 255, 0)
		}
		square(
			posX + offsetX, 
			posY + offsetY, 
		(dimX) - (reduction * i)
		)
	}
	//text(frameCount, 400, 400)
}
```

![P5L_basic_molnar_01_20260429090435](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/P5L_basic_molnar_01_20260429090435.png)

```javascript
let dimX = 400
let dimY = dimX
let num = 10
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(200, 0, 100)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2 
}

function draw() {
	//
	background(200, 0, 100)
	noFill()
	strokeWeight(1)
	stroke(0)
	dimX = 200 + (sin(frameCount * 5) * 200) 
	num = 20
	reduction = dimX / num
	// for loop
	for(let i = 0; i < num ; i++){
		rect(posX, posY, 
		(dimX) - (reduction * i), 
		(dimY) - (dimY / num * i)
		)
	}
	//text(frameCount, 400, 400)
}
```

![P5L_basic_molnar_animation_20260429090302](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/P5L_basic_molnar_animation_20260429090302.png)

Inspiration Vera Molnár

![Vera_Molnar_Inspiration](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/Vera_Molnar_Inspiration.png)

#### Day 3

```javascript
let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2
}

function draw() {
	background(0)
	noFill()
	strokeWeight(3)
	stroke(0)
	let numX = 10 
	for(let i = 0; i < numX; i++){
		let dimension = width / numX
		let posX = dimension / 2  + (i * dimension)
		for(let j = 0; j < 5; j++){
			let posY = dimension / 2 + (j * dimension)
			tmcs(posX, posY, 4, dimension, 10)
		}
	}

}
// this function draws squares at position
// x and y, and they move randomly 
// a tiny bit
function tmcs(x, y, speed, dim, num){
	
	let dimension = dim + sin(frameCount * speed) * 10
	// num = 10
	let reduction = dimension / num
	
	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255)
		strokeWeight(3)
		square(
			x+offsetX,
			y+offsetY,
			(dimension) - (reduction * i)
		)
	}
}
```

![P5L_basic_molnar_03_20260429113301](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/P5L_basic_molnar_03_20260429113301.png)

![P5L_basic_molnar_03_20260429113313](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/P5L_basic_molnar_03_20260429113313.png)

![P5L_basic_molnar_03_20260429130758](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/P5L_basic_molnar_03_20260429130758.png)

![P5L_basic_molnar_03_20260429113906](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/P5L_basic_molnar_03_20260429113906.png)

```javascript
let posX = 0 
let posY = 0 
let boxDim = 100
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	background(255)
}

function draw() {
	background(0,0,255)
	orbitControl()
	fill(255)
	
	posX+= 5
	posY = posY - 5
	if(posX > (width / 2)+(boxDim / 2)){
		//posX = 0
		posX =- width/2 
	}
	
	if(posY < -(height / 2)){
		posY = 0
	}
	
	push()
	translate(posX, posY, 0)
	box(boxDim)
	pop()
	stroke(0)
	
	stroke(255,0,0)
	strokeWeight(3)
	push()
	line(0,0,0, width, 0, 0)
	line(0,0,0,0,-height,0)
	stroke(255)
	line(0,0,0,0,0,1000)
	pop()
}
```

![P5L_bouncing_cube_01_20260429145825](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/P5L_bouncing_cube_01_20260429145825.png)

```javascript
let x;
let y;
let z; 
let xspeed;
let yspeed;
let zspeed;
let depth = 2000;
let dvd;
let r, g, b;


function setup() {
  createCanvas(windowWidth,windowHeight, WEBGL);
  //initialize the variables
  //for the position of the cube
  //at the beginning
  x = random(width);
  y = random(height);
  z = random(-depth, 0); 
  //initialize speed at which the cube moves
  xspeed = 4;
  yspeed = 4;
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
  //noStroke(255);
  //fill(255);
  fill(r, g, b);
  push()
  translate(x,y,z)
  box(100)
  pop()
  //rect(x, y, 80, 60);
  //image(dvd, x, y, 80, 60);


  x = x + xspeed;
  y = y + yspeed;
  z = z + zspeed; 

  if (x >= width) {
    xspeed = -xspeed;
    x = width;
    pickcolor();
  } else if (x <= 0) {
    xspeed = -xspeed;
    x = 0;
    pickcolor();
  }
  
    if (z >= 0) {
    zspeed = -zspeed;
    z = 0;
    pickcolor();
  } else if (z <= -depth) {
    zspeed = -zspeed;
    z = -depth;
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

![P5L_bouncing_cube_02_20260429145856](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/P5L_bouncing_cube_02_20260429145856.png)

![Bildschirmfoto 2026-04-29 um 13.24.38](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/Bildschirmfoto 2026-04-29 um 13.24.38.png)

![Bildschirmfoto 2026-04-29 um 13.21.38](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/Bildschirmfoto 2026-04-29 um 13.21.38.png)

#### Day 4

Today we worked with VCV Rack 2

CHAOS !!! 🤖⚡️

![Bildschirmfoto 2026-04-30 um 11.26.44](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/Bildschirmfoto 2026-04-30 um 11.26.44.png)

![Bildschirmfoto 2026-04-30 um 14.28.55](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/Bildschirmfoto 2026-04-30 um 14.28.55.png)

![Bildschirmfoto 2026-04-30 um 13.53.40](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-1/images/Bildschirmfoto 2026-04-30 um 13.53.40.png)



