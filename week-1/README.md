# intro to programming & live coding

## Software
[P5live](https://teddavis.org/p5live/)
## P5.js reference
[https://p5js.org/reference/](https://p5js.org/reference/)
## day 1

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

![basic paint sketch](/Users/admin/switchdrive2/institution/TEACHING/HSLU/2026/colabor2026/week-1/p5Live/P5L_basic_paint_20260428113737.png)

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
![basic sqaures sketch](/Users/admin/switchdrive2/institution/TEACHING/HSLU/2026/colabor2026/week-1/p5Live/P5L_basic-squares_20260428113724.png)

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
![basic molnár sketch](/Users/admin/switchdrive2/institution/TEACHING/HSLU/2026/colabor2026/week-1/p5Live/P5L_basic-molnar_20260428113621.png)

