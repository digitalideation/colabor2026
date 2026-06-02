// {"P5LIVE":{"name":"Week 1, 4","mod":1779129420662}} 

// {"P5LIVE":{"name":"paint","mod":1777382157292}} 

// let list 
	let dim = 200
	let reduction = 10
	let posX = 0
	let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(180)
	rectMode(CENTER)
	posX = windowWidth / 2  
	posY = windowHeight / 2 
}

function draw() {

	noFill()
	strokeWeight(1)
	stroke(0)
	square(posX, posY, dim)
	square(posX, posY, dim - (reduction))
	square(posX, posY, dim - (reduction * 1))
	square(posX, posY, dim - (reduction * 2))
	square(posX, posY, dim - (reduction * 3))
	square(posX, posY, dim - (reduction * 4))
	square(posX, posY, dim - (reduction * 5))
	square(posX, posY, dim - (reduction * 6))

	
	// for loop 
for(let i = 0; i < 10; i++) {
	square(posX+300, posY, dim - (reduction *i))
}
}