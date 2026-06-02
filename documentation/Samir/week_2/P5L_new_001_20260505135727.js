// {"P5LIVE":{"name":"new_001","mod":1777989447376}} 

let number = 5
let speedX

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	
	let speedX = sin(frameCount *.02)*100 + sin(frameCount *.08)*50
	let speedY = cos(frameCount *.02)*100 + cos(frameCount*.02)* 50
	
	fill(random (255),random (255),0)
	ellipse (width/2+speedX, height/2 +speedY, 100)
	
}