// {"P5LIVE":{"name":"Hidden_Footprint_04","mod":1780386813404}} 

const words = "AI's Hidden Water Footprint";

let textX, textY;
let spawnInterval = 0.1; 
let lastSpawnFrame = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  textSize(80); 
  textAlign(CENTER, CENTER);
  

  pickNewPosition();
}

function draw() {
  background(5, 10, 25, 30);
 
  if (frameCount - lastSpawnFrame >= spawnInterval) {
    pickNewPosition();
    lastSpawnFrame = frameCount;
    if (spawnInterval > 1) {
      spawnInterval -= 0.2; 
    }
  }
  
  fill(100, 200, 255);
  text(words, textX, textY);

  loadPixels();
  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      
      let xOffset = sin(frameCount * 0.05 + y * 0.02) * 4;
      let yOffset = cos(frameCount * 0.05 + x * 0.02) * 4;
      
      let srcX = constrain(floor(x + xOffset), 0, width - 1);
      let srcY = constrain(floor(y + yOffset), 0, height - 1);
      let pixelColor = get(srcX, srcY);
      
      if (brightness(pixelColor) > 20) {
        fill(red(pixelColor), green(pixelColor) + 15, blue(pixelColor) + 40, 40);
        noStroke();
        rect(x, y, 5, 5);
      }
    }
  }
}


function pickNewPosition() {
  textX = random(100, width - 100);
  textY = random(100, height - 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}