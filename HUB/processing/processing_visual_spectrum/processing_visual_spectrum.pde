import gab.opencv.*;
import processing.video.*;
import oscP5.*;
import netP5.*;
import processing.sound.*;

OscP5 oscP5;
NetAddress myRemoteLocation;

FFT fft;
AudioIn in;
int bands = 512;
float[] spectrum = new float[bands];
String input_device = "BlackHole 16ch"; //MacBook Pro-Mikrofon, BlackHole 16ch
String image_path = "cats-00003.jpg";
PImage originalImg;     // Original sized image for display
PImage smallImg;        // Small image for OSC data (128x128)
OpenCV opencv;
int bufferSize = 128;   // Now 128 instead of 512
float inc = 1.0f;
int x = 0;

// OSC settings
int oscPort = 57121;

void setup() {
  size(1024, 512);

  // Setup OSC
  oscP5 = new OscP5(this, oscPort);
  myRemoteLocation = new NetAddress("127.0.0.1", oscPort);
  println("OSC initialized on port: " + oscPort);

  // Setup audio
  Sound s = new Sound(this);
  s.inputDevice(input_device);
  fft = new FFT(this, bands);
  in = new AudioIn(this, 0);
  in.start();
  fft.input(in);

  // Load and process image
  originalImg = loadImage(image_path);
  if (originalImg != null) {
    // Create a small version for OSC (128x128)
    smallImg = createImage(128, 128, RGB);
    smallImg.copy(originalImg, 0, 0, originalImg.width, originalImg.height,
      0, 0, smallImg.width, smallImg.height);

    // Apply edge detection to the small image
    //opencv = new OpenCV(this, smallImg);
    //opencv.loadImage(smallImg);
    //opencv.findScharrEdges(OpenCV.HORIZONTAL);
    //smallImg = opencv.getSnapshot();

    // Resize original for display (512x512)
    originalImg.resize(512, 512);

    println("Original display size: " + originalImg.width + "x" + originalImg.height);
    println("Small OSC size: " + smallImg.width + "x" + smallImg.height);
    println("Buffer size: " + bufferSize);
  } else {
    println("Error: Could not load test.jpeg");
  }

  frameRate(30);
  background(0);
}

void draw() {
  //background(0);
  spectrogram(x);

  // Generate and send OSC data from the small image
  generateSound(x % smallImg.width, 0);

  // Display the large image
  if (originalImg != null) {
    image(originalImg, 0, 0);
  }

  // Draw scan line on the displayed image (scale the x position)
  stroke(255, 0, 0);
  noFill();
  float displayX = map(x, 0, smallImg.width, 0, originalImg.width);
  rect(displayX, 0, 1, originalImg.height);

  x += inc;
  if (x >= smallImg.width) {
    x = 0;
    //inc = floor(random(1, 4));
  }
  
  x = floor(constrain(map(mouseX, 0, 512, 0, 128), 0, 128));
  //x = mouseX;
}

void spectrogram(int x) {
  fft.analyze(spectrum);
  int pos_x = 512 + x * 4;

  for (int i = 0; i < bands; i++) {
    float val = spectrum[i] * 255 * 100;
    stroke(val, 255);
    strokeWeight(4);
    point(pos_x, i);
  }
}

void generateSound(int sliceX, int threshold) {
  if (smallImg == null) return;

  // Get image data from the small image (128 values)
  float[] data = imageDataFFT(sliceX, threshold);

  // Send as a single OSC message (128 floats is safe)
  OscMessage msg = new OscMessage("/image");

  // Add all 128 values
  for (int i = 0; i < data.length; i++) {
    msg.add(data[i]);
  }

  oscP5.send(msg, myRemoteLocation);
}

float[] imageDataFFT(int sliceX, int threshold) {
  float[] result = new float[bufferSize]; // bufferSize = 128

  if (smallImg != null && sliceX >= 0 && sliceX < smallImg.width) {
    for (int y = 0; y < smallImg.height && y < bufferSize; y++) {
      int pixelColor = smallImg.get(sliceX, y);
      float b = brightness(pixelColor);
      //result[y] = b > threshold ? 1.0f : 0.0f;
      
      result[y] = b / 255.0f;
    }
  }

  return result;
}
