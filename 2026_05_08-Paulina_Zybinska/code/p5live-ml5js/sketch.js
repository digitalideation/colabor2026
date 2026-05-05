let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];

let video;
let state = 'starting...';
let faceMesh;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: true };

// fit transform every frame so keypoints map exactly
// to the video pixels we're drawing on screen.
let videoScale = 1;
let videoOffsetX = 0;
let videoOffsetY = 0;

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  textSize(14);
  pixelDensity(1);

  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();

  faceMesh.detectStart(video, gotFaces);
  state = 'detecting face';
}

function draw() {
  background(20, 100);

  if (video && video.width > 0) {
    videoScale = max(width / video.width, height / video.height);
    const drawW = video.width * videoScale;
    const drawH = video.height * videoScale;
    videoOffsetX = (width - drawW) / 2;
    videoOffsetY = (height - drawH) / 2;

    //image(video, videoOffsetX, videoOffsetY, drawW, drawH);

    for (let i = 0; i < faces.length; i++) {
      const face = faces[i];
      for (let j = 0; j < face.keypoints.length; j++) {
        const kp = face.keypoints[j];
        const x = videoOffsetX + kp.x * videoScale;
        const y = videoOffsetY + kp.y * videoScale;
        fill(map(j, 0,face.keypoints.length, 0, 255 ), 255, map(j, 0,face.keypoints.length, 255,0 ));
        noStroke();
        circle(x, y, 10 * sin(frameCount* 0.1 + j)%10);
      }
    }
  }

  noStroke();
  fill(255);
  text(state, 10, height - 10);
}

function gotFaces(results) {
  faces = results;
}