// {"P5LIVE":{"name":"grass snippet","mod":1780348994914}} 

let bladeCount = 75; 
let grassHeight = 120; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background('black'); 
  
  noStroke();
  fill('green'); 


  let bladeWidth = width / bladeCount;

  for (let i = 0; i < bladeCount; i++) {

    let leftBaseX = i * bladeWidth;
    let rightBaseX = (i + 1) * bladeWidth;
    

    let tipX = leftBaseX + (bladeWidth * 0.5) + sin(frameCount * 0.02 + i) * 15;
    
    
   // let growth = (frameCount * 0.5) % grassHeight;
  let growth = map(
  sin(frameCount * 0.02),
  -1,
  1,
  0,
  grassHeight
);

    let currentHeight = growth + cos(i * 0.5) * 40;
    
    let tipY = height - currentHeight;

    triangle(leftBaseX, height, rightBaseX, height, tipX, tipY);
  }
}