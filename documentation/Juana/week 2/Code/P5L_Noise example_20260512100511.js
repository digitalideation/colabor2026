// {"P5LIVE":{"name":"Noise example","mod":1778580311229}} 

let number = 5
let speedX

function setup() {
  createCanvas(windowWidth, windowHeight);
background(198, 222, 18)
	
}

function draw() {
  //background(220);
  
  //fill(25, 31, 194)
  stroke(25, 31, 194)
  noFill()
  
  speedX = sin(frameCount * 0.02) * 200 + sin(frameCount * 0.08)*200
  let speedY = cos(frameCount * 0.02) * 100 + cos(frameCount * 0.02)*50
  
  //ellipse(width/2 + speedX,height/2 + speedY,100)
  
  ellipse(noise(frameCount * 0.008) * width,noise(frameCount * 0.006) * height,100)
  
  //line(width/2 + speedX,height/2 + speedY,height/2 + speedY,width/2 + speedX)
  
  console.log(speedX)
}



