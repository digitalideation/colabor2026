# Day 1

- Introduction to the module and getting to know each other as a group 



# Day 2

- Started with p5live

- Frist basic drawing code

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0,0,255)
	
}

function draw() {
	//very basic drawing program
	ellipse(mouseX,mouseY,20)
}
```

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/images/P5L_basic paint_20260501115722.png)
![[P5L_basic paint_20260501115722.png]]
- Basic squares

  ```javascript
  function setup() {
  	createCanvas(windowWidth, windowHeight)
  	background(0)
  }
  
  function draw() {
  	fill(255,0,100)
  	stroke(255)
  	square(300,200,100)
  	strokeWeight(10)
  	
  	fill(20,0,100)
  	stroke(255)
  	square(400,200,200)
  	strokeWeight(10)
  	
  	fill(100,0,10)
  	square(600,200,300,50)
  	
  }
  ```

  ![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/images/P5L_basic squares_20260501120109.png)
![[P5L_basic squares_20260501120109.png]]
- basic loop

  ```javascript
  function setup() {
  	createCanvas(windowWidth, windowHeight)
  	background("#EDE8D0")
  	rectMode(CENTER)
  }
  
  
  let dim = 200
  let reduction = 20
  let posX = 400
  let posY = 400
  
  function draw() {
  	noFill()
  	strokeWeight(1)
  	stroke(0)
  	square(posX,posY,dim)
  	square(posX,posY,dim-(reduction*1))
  	square(posX,posY,dim-(reduction*2))
  	square(posX,posY,dim-(reduction*3))
  	square(posX,posY,dim-(reduction*4))
  	square(posX,posY,dim-(reduction*5))
  	
  	//loop
  	for(let i = 0; i < 10; i++){
  		square(posX + -100, posY, dim - (reduction * i))
  	}
  	
  	for(let i = 0; i < 10; i++){
  		square(posX, posY-100, dim - (reduction * i))
  	}
  	for(let i = 0; i < 10; i++){
  		square(posX + 100, posY, dim - (reduction * i))
  	}
  	for(let i = 0; i < 10; i++){
  		square(posX, posY+100, dim - (reduction * i))
  	}
  }
  ```

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/images/P5L_basic loop_20260428130613.png)
![[P5L_basic loop_20260428130613.png]]
- square animation

  ```javascript
  
  function draw() {
  	background("#ff00ff")
  	noFill()
  	strokeWeight(2)
  	stroke(0)
  	dimX = 500 + (sin(frameCount*4)* 20)
  	num = 17
  	reduction = dimX / num
  	//loop
  	for(let i = 0; i < num; i++){
  		let offsetX = (random(15))
  		let offsetY = (random(15))
  		stroke(0,0,255)
  		if (i < 7){
  			stroke("#00ebf4")
  		}
  		square(
  			posX + offsetX,
  			posY + offsetY, 
  			(dimX) - (reduction * i) 
  			)
  			
  	}
  	
  
  }
  ```

  ![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/images/P5L_square animation_20260428145112.png)

- 








# Day 3 

- moving square loop

  ``` javascript
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
  	background(255)
  	noFill()
  	strokeWeight(3)
  	stroke(0)
  
  
  
  	// for loop
  	for(let i = 0; i < num; i++) {
  		let offsetX = random(7)
  		let offsetY = random(7)
  		stroke(255, 0, 0)
  		strokeWeight(3)
  		if(i == 0) {
  			stroke(0, 0, 255)
  			strokeWeight(1)
  		}
  
  		if(i == 4) {
  			stroke(0, 0, 255)
  			strokeWeight(1)
  		}
  		square(
  			posX + offsetX - 100,
  			posY + offsetY,
  			(dimX) - (reduction * i)
  		)
  	}
  
  	dimX = 300 + sin(frameCount * 4) * 10
  	num = 10
  	reduction = dimX / num
  
  	tmcs(300, 750, 300, 5, 10)
  	tmcs(950, 750, 300, 10, 5)
  
  }
  
  // this function draws squars at position 
  // X and Y and they move randomly a bit
  function tmcs(x, y, dim, num, speed) {
  	let dimension = dim + sin(frameCount * speed) * 10
  	let reduction = dimension / num
  
  	for(let i = 0; i < num; i++) {
  		let offsetX = random(7)
  		let offsetY = random(7)
  		stroke(255, 0, 0)
  		strokeWeight(3)
  		square(
  			x + offsetX,
  			y + offsetY - 300,
  			(dimension) - (reduction * i)
  		)
  	}
  }
  ```

  ![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/images/P5L_rechtecke loop_20260501120546.png)

- square pattern

  ```javascript
  let dimX = 453
  let dimY = dimX
  let num = 17
  let reduction = dimX / num
  let posX = 0
  let posY = 0
  
  function setup() {
  	createCanvas(windowWidth, windowHeight)
  	background("#ff00ff")
  	rectMode(CENTER)
  	angleMode(DEGREES)
  	posX = width / 2
  	posY = height / 2
  }
  
  function draw() {
  	background("#ff00ff")
  	noFill()
  	strokeWeight(3)
  	stroke(0)
  	let numX = 10
  
  	for(let i = 0; i < numX; i++) {
  		let dimension = width / numX
  		let posX = dimension / 2 + (i * dimension)
  		for (let j = 0; j < numX; j ++){
  			let posY = dimension / 2  + (j * dimension)
  		tmcs(posX, posY, 4, dimension, 10)
  		}
  	}
  }
  // this function draws squares at position
  // x and y, and they move randomly 
  // a tiny bit
  function tmcs(x, y, speed, dim, num) {
  
  	let dimension = dim + sin(frameCount * speed) * 10
  	// num = 10
  	let reduction = dimension / num
  
  	for(let i = 0; i < num; i++) {
  		let offsetX = random(7)
  		let offsetY = random(7)
  		stroke(255)
  		strokeWeight(3)
  		square(
  			x + offsetX,
  			y + offsetY,
  			(dimension) - (reduction * i)
  		)
  	}
  }
  ```

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/images/P5L_square pattern_20260501120914.png)



- moving box

  ```
  // {"P5LIVE":{"name":"moving box","mod":1777472826881}} 
  
  let posX = 0
  let posY = 0
  let boxDim = 100
  
  function setup() {
  	createCanvas(windowWidth, windowHeight, WEBGL)
  	
  }
  
  function draw() {
  background(255)
  orbitControl()
  fill(255)
  posX++
  posY  = posY - 10
  if (posX > (width/ 2) + (boxDim / 2)){
  	//posX = 0
  	posX = - (width/2)
  }
  
  if (posY < - (height / 2 )){
  	posY = 0
  }
  
  push()
  translate(posX,posY,0)
  stroke(0)
  box(boxDim)
  pop()
  
  stroke (255,0,0)
  strokeWeight(5)
  push()
  line(0,0,0, width, 0,0)
  stroke (0,255,0)
  line(0,0,0, 0, -height,0)
  stroke (0,0,255)
  line(0,0,0, 0, 0,1000)
  pop()
  	
  }
  ```

  ![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/images/P5L_moving box_20260429142706.png)



- dvd box animation in a 3d space

```javascript
// {"P5LIVE":{"name":"dvd box animation","mod":1777637555186}} 

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
  createCanvas(windowWidth, windowHeight, WEBGL);
  //initianize variables for the positions of 
  //the cube at the beginning
  x = random(width);
  y = random(height);
  z = random(-depth, 0)
  //initialize speed at wich the cube moves
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
  translate (-width/2, -height/2)
  background(0);
  noStroke(255);
  fill(255);
  fill(r, g, b);
  
  push()
  //rect(x, y, 80, 60);
  translate (x,y,z)
  stroke(0)
  box(200)
  pop()
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



![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/images/P5L_dvd box animation_20260501121235.png)



# Day 4



What we did

-  Yann showed us how to document with markdown

- Downloaded vcv Rack

- Got started with vcv Rack

- Created a siren like sound 

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/sound/sound-ex-1.png)

- Created a basic synthesizer controlled with the keyboard

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/sound/sound-ex-2.png)


# Day 5

- Meeting with Yann: talked about the mid term presentation 
- Catching up on the material from yesterday afternoon's class

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/sound/sound-ex-3.png)

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/sound/sound-ex-4.png)

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 1/sound/sound-ex-5.png)