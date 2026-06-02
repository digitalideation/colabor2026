// {"P5LIVE":{"name":"Sin & Cos ex","mod":1778580286028}} 

let number = 5
let speedX

function setup() {
  createCanvas(windowWidth,windowHeight);
background (198, 222, 18)
	
}

function draw() {
  //background(220);
  
  
  speedX = sin(frameCount * 0.02) * 100 + sin(frameCount * 0.08)*50
  let speedY = cos(frameCount * 0.02) * 100 + cos(frameCount * 0.02)*50
  
  ellipse(width/2 + speedX,height/2 + speedY,100)
  
  stroke(0,0,255)
  noFill()
  
  //line(width/2 + speedX,height/2 + speedY,height/2 + speedY,width/2 + speedX)
  
  console.log(speedX)
}

