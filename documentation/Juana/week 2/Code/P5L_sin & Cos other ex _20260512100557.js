// {"P5LIVE":{"name":"sin & Cos other ex ","mod":1778580357861}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background (198, 222, 18)
}

function draw() {

// fill(sin(frameCount*0.001)*255,sin(frameCount*0.006)*255,sin(frameCount*0.003)*200)

fill(noise(frameCount*0.0021)*255,noise(frameCount*0.0026)*255,noise(frameCount*0.006)*200)

noStroke()
ellipse(width/2 + sin(frameCount*0.005)*250, height/2 + cos(frameCount*0.005)*250 
+ cos(frameCount*0.021)*50, 40 + sin(frameCount*0.025)*150 )	
  
}