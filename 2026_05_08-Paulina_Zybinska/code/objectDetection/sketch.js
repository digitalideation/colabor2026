let video;
let detector;
let detections = [];

function preload(){
  // Load the COCO SSD model 
  // This model is trained on the COCO dataset, which contains 80 common objects
  // https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
  detector = ml5.objectDetection("cocossd");
}

function setup() {
  createCanvas(960, 540); //change to 640, 480 if using webcam
  background(0);

 // uncomment these lines if using webcam
  /* video = createCapture(VIDEO); 
  video.size(width, height);
  video.hide();  */

  //uncomment these lines if using video file
   video = createVideo("/2026_05_08-Paulina_Zybinska/code/ml5js-boilerplate/assets/rainyday2.mp4");
  video.size(width, height);
  video.hide();
  video.loop();

  detector.detectStart(video, gotDetections);
}

// Callback function is called each time the object detector finishes processing a frame.
function gotDetections(results) {
  detections = results;
}

function draw() {
  image(video, 0, 0);

  //scale the detections based on the video size so they are drawn in the correct positions
  let scaleX = width / video.elt.videoWidth;
  let scaleY = height / video.elt.videoHeight;

  for (let i = 0; i < detections.length; i += 1) {
    let detection = detections[i];
    let x = detection.x * scaleX;
    let y = detection.y * scaleY;
    let w = detection.width * scaleX;
    let h = detection.height * scaleY;

    // Draw bounding box
    stroke(0, 255, 0);
    strokeWeight(2);
    noFill();
    rect(x, y, w, h);

    // Draw label
    noStroke();
    fill(255);
    textSize(24);
    textFont("Bitcount Grid Single");
    text(detection.label, x + 10, y + 24);
  }
}