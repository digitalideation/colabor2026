# week 1

### 28.04.26

**most basic paint program**

```javascript
// {"P5LIVE":{"name":"Basic paint","mod":1777454297925}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(54, 6, 186)
	// frameRate(5)
}

function draw() {

	ellipse(mouseX, mouseY, 30)

}
```

![P5L_Basic paint_20260429091817](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/images/P5L_Basic paint_20260429091817.png)

**basic squares**

```javascript
// {"P5LIVE":{"name":"2 squares","mod":1777454418897}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	//
	fill(255, 100, 100)
	stroke(0, 255, 0)
	strokeWeight(2)
	square(300, 200, 100)

	fill(100, 255, 100)
	noStroke()
	square(500, 200, 100, 10)
	
}
```

![P5L_2 squares_20260429092018](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/images/P5L_2 squares_20260429092018.png)

**basic Molnár**

[Wikipedia article](https://en.wikipedia.org/wiki/Vera_Molnár) about generative art artist Vera Molnár

> Vera Molnár (née Gács; 5 January 1924 – 7 December 2023) was a Hungarian media artist who lived and worked in Paris, France. Molnár is widely considered to have been a pioneer of the generative art aspect of computer art. She was one of the first women to use computers in her fine art practice. In the 1960s, she founded two art groups in France concerned with the use of art and technology: the Groupe de Recherche d'Art Visuel and Art et Informatique. (from Wikipedia)

[Vera Molnár painting![image](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/images/image.jpg)

```javascript
// {"P5LIVE":{"name":"Square reduction","mod":1777381459996}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background (245, 153, 49)
	rectMode(CENTER)
}

let dim = 200
let reduction = 20
let posX = 400
let posY = 300

function draw() {
	//
	noFill()
	strokeWeight(2)
	stroke(19, 15, 247)
	square(posX, posY, dim)
	square(posX, posY, dim - (reduction * 1) )
	square(posX, posY, dim - (reduction * 2) )
	square(posX, posY, dim - (reduction * 3) )
	square(posX, posY, dim - (reduction * 4) )
	square(posX, posY, dim - (reduction * 5) )
	square(posX, posY, dim - (reduction * 6) )
	square(posX, posY, dim - (reduction * 7) )
	square(posX, posY, dim - (reduction * 8) )
	
	// for loop 
	
	for (let i = 0; i <9; i++){
		square(posX +210, posY, dim -(reduction * i))
	}
	
	for (let i = 0; i <9; i++){
		square(posX +420, posY, dim -(reduction * i))
	}
	
		for (let i = 0; i <9; i++){
		square(posX +630, posY, dim -(reduction * i))
	}
}	
```

![P5L_Square reduction_20260428130419](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/images/P5L_Square reduction_20260428130419.png)

**Animating Molnár**

```javascript
// {"P5LIVE":{"name":"Square animation","mod":1777388103915}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0
function setup() {
	createCanvas(windowWidth, windowHeight)
	background (255)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2
}
function draw() {
	background(255)
	noFill()
	strokeWeight(1)
	stroke(19, 15, 247)
	// Animation
	// calculate the dimension of the square
	//based on a sin function	
	dimX = 200 + sin (frameCount * 1) * 50
	num = 20
	reduction = dimX / num
	// for loop 
	for (let i = 0; i < num; i++){
		let offsetX = random(7)
		let offsetY = random(7) 
		stroke(19, 15, 247)
		if (i >= 5){
			stroke(232, 16, 49)
		}
		square (
			posX + offsetX,
			posY + offsetY,
		(dimX) - (reduction * i)
		)
	}
	
}	
```

![P5L_Square animation_20260428145503](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/images/P5L_Square animation_20260428145503.png)

### 29.04.26

#### **Animating Molnár** 2

```javascript
// {"P5LIVE":{"name":"28.04 Square animation 2","mod":1778006439761}} 

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0
	
function setup() {
	createCanvas(windowWidth, windowHeight)
	background (255)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2
}

function draw() {
	background(255)
	noFill()
	strokeWeight(3)
	stroke(0)
	
	let numX = 5
	for (let i = 0; i < numX; i ++) {
	let dimension = width / numX
	let posX = dimension/ 2 + (i * dimension)
	for ( let j = 0; j < 5; j++){
		let posY = dimension/ 2 + (j * dimension)
	
	tmcs (posX, posY, dimension, 15, 1)
	// noLoop()
	}
	}
}	
// this function draws square position
//x and y and move randomly
	
function tmcs (x, y, dim, num, speed) {
	
	let dimension = dim + sin (frameCount * speed) * 10
	// num = 20
	let reduction = dimension / num
	
	for (let i = 0; i < num; i++) {
		let offsetX = noise(frameCount * 0.001, frameCount * 0.003, i) * 10
		let offsetY =  noise(frameCount * 0.001, frameCount * 0.003, i) * 10
		stroke(19, 15, 247)
		square (
			x + offsetX,
			y + offsetY,
		(dimension) - (reduction * i)
	)
	}
}
```

![P5L_28.04 Square animation 2_20260505184039](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/images/P5L_28.04 Square animation 2_20260505184039.png)

#### Moving cube

```javascript
// {"P5LIVE":{"name":"29.04 3D cube ","mod":1778007057422}} 

let posX = 0
let posY = 0
let boxDim = 100
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	
}

function draw() {
	background (215, 235, 250)
	//orbitControl()
	fill (255)
	
	//posX = posX + 1 
	// posX += 1
	posX ++
	posY -= posY - 10
	if (posX > (width/2) + (boxDim)){
		posX = 0
	}
	
	if (posY < - (height / 2)) {
		posY = 0		
	}
	push()
	translate(posX, posY, 0)
	box (boxDim)
	pop()
}
```

![P5L_29.04 3D cube _20260505185057](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/P5L_29.04 3D cube _20260505185057.png)

### Not the DVD logo in 3d space

Source https://editor.p5js.org/Lllucas/sketches/zRcCe8EKM

Tutorial https://www.youtube.com/watch?v=vfMazgvHm2M

```javascript
// {"P5LIVE":{"name":"29.04 DVD cube example","mod":1778007258761}} 

let x;
let y;
let xspeed;
let yspeed;
let zspeed;
let depth = 2000
let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  x = random(width);
  y = random(height);
  z = random(-depth, 0)
  //
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
	translate (-width/ 2, -height/2)
  background(0);
  noStroke(255);
  fill(255);
  fill (r, g, b);
 
  
  push()
  translate (x, y, z)
  box(100)
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
  } else if (x <= 0) {
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

![P5L_29.04 DVD cube example_20260505185418](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/P5L_29.04 DVD cube example_20260505185418.png)

### 30.04.26

Working with sound

Software: [VCV Rack](https://vcvrack.com/Rack) Addtional modules:

- [mixer](https://library.vcvrack.com/MindMeldModular/MixMasterJr)
- [Surge XT](https://library.vcvrack.com/?brand=Surge XT)
- [4ms](https://library.vcvrack.com/?brand=4ms)

Siren patch: using LFO (low frequency oscillator) to control pitch and amplitude of a sound source (VCO, voltage controlled oscillator)

![VCV Rack - Learning](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/Sound/VCV Rack - Learning.png)

Basic Synthesizer patch controlled with the computer keyboard

![VCV Rack - Learning 2](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/Sound/VCV Rack - Learning 2.png)

![VCV Rack - Learning 3](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/Sound/VCV Rack - Learning 3.png)

![VCV Rack - Learning 4](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/Sound/VCV Rack - Learning 4.png)

![VCV Rack - Learning 5](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 1/Sound/VCV Rack - Learning 5.png)

