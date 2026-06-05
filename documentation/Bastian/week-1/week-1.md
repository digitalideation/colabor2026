# Day 1 

## 27.04.2026

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
	rectMode(CENTER)
}

let dim = 200
let reduction = 20
let posX = 400
let posY = 200

function draw(){
	noFill()
	strokeWeight(1)
	stroke(255)
	square(400, 200, dim)
	square(400, 200, dim - (reduction * 1) )
	square(400, 200, dim - (reduction * 2) )
	square(400, 200, dim - (reduction * 3) )
	square(400, 200, dim - (reduction * 4) )
	square(400, 200, dim - (reduction * 5) ) 
	
	// for loop
	
	for(let i = 0; i < 6; i++){
square(posX+300, posY, dim - (reduction * i))
	}
	
	for(let i = 0; i < 10; i++){
    square(posX+500, posY, dim - (reduction * i))
    
}
}
```


![[P5L_First day_20260430102404.png]]


# Day 2

## 28.04.2026

```javascript
let dimX = 500
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0 


function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width / 2
	posY = height / 2

}

function draw() {
	background(255)
	noFill()
	strokeWeight(2)
	stroke(0)
	let numX = 10
	noLoop()
	
	for(let i = 0; i < numX; i++){
		let dimension = width / numX
		let posX = dimension / 2 + (i * dimension)
		for(let j = 0; j < 10; j++){
		    let posY = dimension / 2 + (j * dimension)
		coffee(posX, posY, dimension, 10, 5)
		}
	}
}

// this function draws sqaures at position xy
function coffee(posX, posY, dim, num, speed) {
	
	let dimension = dim + (sin(frameCount * speed) * 30)
	//num = 5
	let reduction = dimension / num
	
		for(let i = 0; i < num; i++){
		let offsetX = noise (10)
		let offsetY = noise (10)
		stroke(0, 0, 255)
		if(i < 1){
			stroke(random(0,255),random(0,255), random(0,255))
	}
square(posX + offsetX, posY + offsetY,(dimension) - (reduction * i))
}
	
}
```


![[P5L_bouncing sqaures_20260430102417.png]]

# Day 3

## 29.04.2026

```javascript
let posX = 0
let posY = 0
let boxDim = 100
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	
}



function draw() {
	background(0)
	orbitControl()
	fill(255)
	
	posX+= 5
	posY = posY - 10
	if(posX > (width / 2)+(boxDim / 2)){
		posX = -width/2
	}
	
	if(posY < height / 2){
		posY = posX
	}
	push()
	translate(posX, posY, 0)
	box(100)
	pop()
	
	strokeWeight(3)
	push()
	stroke(255, 0, 0)
	line(0,0,0, width, 0, 0)
	stroke(0, 255, 0)
	line(0,0,0,0, -height, 0)
	stroke(0, 0, 255)
	line(0,0,0,0,0, 1000)
	pop()
	
	
	
	
}
```

![[Screenshot 2026-05-21 135655.png]]
# Day 4 

## 30.04.2026

On this day we received a VCV-Rack input. But I was more interested in p5live  so i experimented there

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

    function draw(){
	background(0)
	line( 400, 400, 300, 600)
	stroke('magenta')
	strokeWeight(5)
}
```


![[Screenshot 2026-05-21 140235.png]]
# Day 5 

## 31.04.2026

On this day we had an online support session with Yann and had the opportunity to ask things that weren't clear. 