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
   video = createVideo("/2026_05_08-Paulina_Zybinska/code/objectDetection/assets/rainyday2.mp4");
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
  background(0);

  let scaleX = width / video.elt.videoWidth;
  let scaleY = height / video.elt.videoHeight;

  //extra (vanilla javascript) to create a clip path made of all detection rectangles
  /*drawingContext.save();
  drawingContext.beginPath();
  for (let i = 0; i < detections.length; i++) {
    let d = detections[i];
    drawingContext.rect(
      d.x * scaleX,
      d.y * scaleY,
      d.width * scaleX,
      d.height * scaleY
    );
  }
  drawingContext.clip();*/

  image(video, 0, 0, width, height);

  //extra (vanilla javascript) to restore the drawing context after the clip path is created
  //drawingContext.restore();

  // outlines + labels on top
  for (let i = 0; i < detections.length; i++) {
    let d = detections[i];
    let x = d.x * scaleX;
    let y = d.y * scaleY;
    let w = d.width * scaleX;
    let h = d.height * scaleY;

    stroke(0, 255, 0);
    strokeWeight(2);
    noFill();
    rect(x, y, w, h);

    noStroke();
    fill(255);
    textSize(24);
    text(d.label, x + 10, y + 24);
  }
}
