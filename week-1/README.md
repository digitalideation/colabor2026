# intro to programming & live coding

## Software
[P5live](https://teddavis.org/p5live/)
## P5.js reference
[https://p5js.org/reference/](https://p5js.org/reference/)



## day 1
### Topics:
* [Variables](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables)
* [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
* [Scope a.k.a. variable scoping](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
* [Block statements {anything withing this brackets}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
* [For loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
* [if statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

### most basic paint program

```javascript
function setup() {
    // this is where you define the settings of the canvas
    // onto which you will be drawing
    // the following function defines
    //  the size of the canvas
    // windowWidth and windowHeight are global variables
    // that return the size of the screen in pixels
    createCanvas(windowWidth, windowHeight)

    // the following function sets the background color 
    // of the canvas.
    // you can use values between 0 - 255
    // if you use a single value it will return greyscale
    // if you input three comma separated values
    // it will return r,g,b colors
	background(0)
    // for example
    background(255, 0, 0)
    // returns a red background


	// frameRate(5)
}

function draw() {
	// paint program very basic


    // remove the "//" to only show a dot on the screen
	// background(0)

    // the following function draws an ellipse
    // at the position of the mouse cursor
    // mouseX and mouseY are p5.js variables 
    // that return the position of the mouse
	ellipse(mouseX, mouseY, 20)
}
```

![basic paint sketch](https://github.com/digitalideation/colabor2026/blob/main/week-1/p5Live/P5L_basic_paint_20260428113737.png)

### basic squares

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
}

function draw() {
	// REMEMBER the order of execution matters!
    // set the fill in red-ish for everything below the next function
	fill(255, 100, 100) 
    // set the stroke weight to 2 pixel for everything that is below the next function
	strokeWeight(2)
    // set outline color for everything that follows the next function
	stroke(0, 255, 0)
    // draw a square with the fill, stroke weight and stroke as defined above
	square(300, 200, 100)
    // idem con patate!
	fill(100, 255, 100)
	noStroke()
	square(500, 200, 100)
}
```
![basic sqaures sketch](https://github.com/digitalideation/colabor2026/blob/main/week-1/p5Live/P5L_basic-squares_20260428113724.png)

### basic Molnár

[Wikipedia article](https://en.wikipedia.org/wiki/Vera_Moln%C3%A1r) about generative art artist Vera Molnár
> Vera Molnár (née Gács; 5 January 1924 – 7 December 2023) was a Hungarian media artist who lived and worked in Paris, France. Molnár is widely considered to have been a pioneer of the generative art aspect of computer art. She was one of the first women to use computers in her fine art practice. In the 1960s, she founded two art groups in France concerned with the use of art and technology: the Groupe de Recherche d'Art Visuel and Art et Informatique. (from Wikipedia)

![Vera Molnár painting](https://dam.org/museum/wp-content/uploads/2020/07/Molnar1974DesOrdres1-scaled.jpg)


```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
	rectMode(CENTER)
}

// how to declare variables
let dim = 200
let reduction = 30
let posX = 400
let posY = 300

function draw() {
	noFill()
	strokeWeight(1)
	stroke(0)
    // draw squares that decrease in in size given initial "dim"
    // the squares are reduced by the "reduction" variable
	square(posX, posY, dim)
	square(posX, posY, dim - (reduction * 1) )
	square(posX, posY, dim - (reduction * 2) )
	square(posX, posY, dim - (reduction * 3) )
	square(posX, posY, dim - (reduction * 4) )
	square(posX, posY, dim - (reduction * 5) )
	
	// for loop
	// you can use loop to repeat functions "i" times
    // in this case the for loop iterates 6 times
    // i = 0 | is i less than 6? true | execute function and increase i by 1 (i++)
    // i = 1 | is i less than 6? true | execute function and increase i by 1 (i++) 
    // i = 2 | is i less than 6? true | execute function and increase i by 1 (i++) 
    // ... repeat n times
    // i = 6 | is i less than 6? false | exit the function and continue to next line of code 
	for(let i = 0; i < 6; i++){
		square(posX+300, posY, dim - (reduction * i))
	}
	// same as above but up to 10!
	for(let i = 0; i < 10; i++){
		square(posX+500, posY+100, (dim + 100) - (reduction * i))
	}
}
```

![basic molnár sketch](https://github.com/digitalideation/colabor2026/blob/main/week-1/p5Live/P5L_basic-molnar_20260428113621.png?raw=true)

### Animating Molnár
```javascript
// here I declare initial variables for drawing a series of concentric squares
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
```

![Animated molnár sketch](https://github.com/digitalideation/colabor2026/blob/main/week-1/p5Live/P5L_basic-molnar-animation_20260428145429.png?raw=true)


## To Do for day 2

* look a the coding train video tutorials [here](https://thecodingtrain.com/tracks/code-programming-with-p5-js/code/2-variables/1-mouseX-mouseY). Skip `createGraphics` the whole `Objects` chapter. If you can have a look at the `Arrays` chapter.
* If you feel motivated try to use nested loops to recreate Vera Molnár artworks in a 6 x 6 grid.
