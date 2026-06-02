// {"P5LIVE":{"name":"color-donut","mod":1777999920742}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 255, 255)
}

function draw() {
	// Dynamische Füllfarbe > RGB-Werte werden über Sinus gesteuert = weiche Farbverläufe
	fill(sin(frameCount*0.001)*255,sin(frameCount*0.006)*255,sin(frameCount*0.006)*200)
	noStroke()
	// zeichnet Ellipse > bewegt kreisförmig um Mitte
	ellipse(width/2 + sin(frameCount*0.01)*250, height/2 + cos(frameCount*0.01)*250, 300)	
  
}

	//fill(random(255))
	//fill(sin(frameCount * 0.01) * 255)
	//ellipse (mouseX, mouseY, 300)
	
