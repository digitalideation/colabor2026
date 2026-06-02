// {"P5LIVE":{"name":"Week 1, 3","mod":1779129420662}} 

// {"P5LIVE":{"name":"paint","mod":1777381569164}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(230)
	rectMode(CENTER)
}

function draw() {
	let dim = 200
	let reduction = 10
	let posX = 700
	let posY = 400

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

for (let i = 0; i < 10; i++){
}
}