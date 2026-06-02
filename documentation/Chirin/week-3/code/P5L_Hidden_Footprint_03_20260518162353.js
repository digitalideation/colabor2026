// {"P5LIVE":{"name":"Hidden_Footprint_03","mod":1779121434143}} 

const words = "AI's Hidden Water Footprint"

function setup() {
  createCanvas(windowWidth, windowHeight)
  textFont('monospace')
  textSize(80)
}

function draw() {
  background(5, 10, 25, 40)
  
  // draw text at mouse position
  if (mouseIsPressed) {
    fill(100, 200, 255)
    text(words, mouseX, mouseY)
  }

  // load pixels for effect 
  loadPixels()
  
  // for loop
  for (let y = 0; y < height; y += 3) {
    for (let x = 0; x < width; x += 3) {
      // illusion of waves
      let xOffset = sin(frameCount * 0.05 + y * 0.02) * 4;
      let yOffset = cos(frameCount * 0.05 + x * 0.02) * 4;
      
      let srcX = constrain(floor(x + xOffset), 0, width - 1);
      let srcY = constrain(floor(y + yOffset), 0, height - 1);
      let pixelColor = get(srcX, srcY);
      
      // kaustik effect 
      if (brightness(pixelColor) > 20) {
        fill(red(pixelColor), green(pixelColor) + 20, blue(pixelColor) + 50, 50);
        noStroke();
        rect(x, y, 4, 4);
      }
    }
  }
}