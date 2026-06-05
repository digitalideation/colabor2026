// {"P5LIVE":{"name":"new_014","mod":1779805716329}} 

let video;
let previousPixels = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
}

function draw() {
  background(0);
  
  // Load current frame pixels
  video.loadPixels();
  
  // Check if previous frame exists
  if (previousPixels.length > 0) {
    loadPixels();
    
    // Loop through every pixel
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let i = (y * width + x) * 4;
        
        // Subtract previous frame from current frame
        // abs() ensures we get positive difference
        let rDiff = abs(video.pixels[i] - previousPixels[i]);
        let gDiff = abs(video.pixels[i + 1] - previousPixels[i + 1]);
        let bDiff = abs(video.pixels[i + 2] - previousPixels[i + 2]);
        
        // Output subtracted video to the canvas
        pixels[i]     = rDiff;
        pixels[i + 1] = gDiff;
        pixels[i + 2] = bDiff;
        pixels[i + 3] = 255; // alpha
      }
    }
    updatePixels();
  }
  
  // Save the current frame for the next loop
  previousPixels = [...video.pixels];
}