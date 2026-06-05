// {"P5LIVE":{"name":"new_008","mod":1779210359885}} 

let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];

let video;
let detector;
let detections = [];

function preload() {
  // COCO SSD model — 80 common objects
  // https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
  detector = ml5.objectDetection('cocossd');
}

function setup() {
  createCanvas(960, 540);
  background(0);

  video = createVideo(
    'https://raw.githubusercontent.com/digitalideation/colabor2026/main/2026_05_08-Paulina_Zybinska/code/objectDetection/assets/rainyday2.mp4'
  );
  video.size(width, height);
  video.hide();
  video.loop();
  video.volume(0);

  detector.detectStart(video, gotDetections);
}

function gotDetections(results) {
  detections = results;
}

function draw() {
  background(0);

  let scaleX = width / video.elt.videoWidth;
  let scaleY = height / video.elt.videoHeight;

  //clip path made of all detection rectangles
 drawingContext.save();
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
  drawingContext.clip();


  image(video, 0, 0, width, height);

  drawingContext.restore();

  // outlines + labels on top
  for (let i = 0; i < detections.length; i++) {
    let d = detections[i];
    let x = d.x * scaleX;
    let y = d.y * scaleY;
    let w = d.width * scaleX;
    let h = d.height * scaleY;

    stroke(0, 255, 0);
    strokeWeight(2);
    blendMode(DIFFERENCE)
    fill(255)
    rect(x, y, w, h);

    noStroke();
    fill(255);
    textSize(24);
    text(d.label, x + 10, y + 24);
  }
  
  blendMode(BLEND)
}