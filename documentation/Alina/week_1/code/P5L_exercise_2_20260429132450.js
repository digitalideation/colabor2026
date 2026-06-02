// {"P5LIVE":{"name":"exercise_2","mod":1777469090637}} 


// Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(windowHeight,windowWidth, WEBGL);

  describe('A pink sphere on a gray background.');
  
}

function draw() {
  background(255,210,200);
  stroke(255,0,0)
  line(0,0,0,width,0,0)
  stroke(0,255,0)
  line(0,0,0,0,height,0)
  stroke(0,0,255)
  line(0,0,0,0,0,1000)
  


  orbitControl()
  ;

  // Draw the sphere.
  stroke(0)
  fill(255,0,0)
  translate(10,20,7)
  sphere();
}