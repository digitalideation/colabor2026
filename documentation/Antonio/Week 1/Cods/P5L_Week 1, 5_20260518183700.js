// {"P5LIVE":{"name":"Week 1, 5","mod":1779129420662}} 

// {"P5LIVE":{"name":"paint","mod":1777384261392}} 

// let list 
	let dim = 200
	let num = 10
	let reduction = dim / num
	let posX = 0
	let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(250,200,250)
	rectMode(CENTER)
	frameRate(15)
	posX = width / 2  
	posY = height / 2 
}

function draw() {
	background(250,200,250)
	noFill()
	strokeWeight(1)
	stroke(0)
	dim = 100 + (sin(frameCount * 0.1) * 100)
	num = 10
	reduction = dim / num 
	// for loop 
for(let i = 0; i < num; i++) {
	square(posX, posY, dim - (reduction *i))
}
}