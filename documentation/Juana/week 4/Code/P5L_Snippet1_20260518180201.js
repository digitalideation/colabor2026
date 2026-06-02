// {"P5LIVE":{"name":"Snippet1","mod":1779127321995}} 


function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let frase = ("blablabla");
		
	textFont('Arial', 50)
	// textWrap(NORMAL)
	fill(255)
	stroke(0,0,255)
	
	//Move the frase with the sin and cos funtion and also with the mouse
	text((frase),mouseX + sin(frameCount*0.020)*250, mouseY - cos(frameCount*0.010)*250)
}