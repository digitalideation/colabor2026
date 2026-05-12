let video;
let showVideo = true;
let showHands = false;
let cubeGraphics;
let cubeSize = 0;
let rotationX = 0;
let rotationY = 0;
let cubeX = 0;
let cubeY = 0;
let clr;


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // Setup webcam
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();

  // Start hand detection
  startHandDetection(video);
  setupUI();

  clr = color(0, 255, 200);
}

function setupUI() {
  videoCheckbox = createCheckbox('Show Video', true);
  videoCheckbox.position(10, 10);
  videoCheckbox.style('color', 'black');

  handsCheckbox = createCheckbox('Show Hand Keypoints', false);
  handsCheckbox.position(150, 10);
  handsCheckbox.style('color', 'black');
}

function draw() {
  background(20);

  showVideo = videoCheckbox.checked();
  showHands = handsCheckbox.checked();

  updateHandTracking();

  push();
  translate(-width/2, -height/2); // Push video back in Z space

  if (showVideo) {
    let videoAspect = video.width / video.height;
    let aHeight = width / videoAspect;
    image(video, 0, 0, width, aHeight);
  }

  if (showHands) {
    drawHandKeypoints();
  }

  drawHandIndicators();
  pop();

  drawWireframeCube();
}


function drawHandIndicators() {
  if (leftHand.detected)  {
    drawHand(leftHand);
    // Left hand controls cube size
    if (leftHand.distance <= pinchThreshold) {
      cubeSize = 0;
    } else {
      cubeSize = map(leftHand.distance, pinchThreshold, pinchThreshold + 200, 0, 200, true);
    }

  }

  if (rightHand.detected) {
    drawHand(rightHand);
    // Right hand controls cube rotation
    if (!rightHand.isPinching) {
      rotationY = map(rightHand.midpoint.x, 0, 400, -PI, PI);
      rotationX = map(rightHand.midpoint.y, 0, 400, -PI, PI);
      clr = color(0, 255, 200)
    }else {
      clr = color(random(255), random(255), random(255));
    }
  }
}

function drawWireframeCube() {
  push();

  // Position cube at left hand midpoint if detected
  if (leftHand.detected ) {
    // Convert from screen coordinates to WEBGL coordinates
    cubeX = leftHand.midpoint.x - width/2;
    cubeY = leftHand.midpoint.y - height/2;
    translate(cubeX, cubeY, 100);
  }

  // Apply rotations
  rotateX(rotationX);
  rotateY(rotationY);

  // Draw wireframe cube
  stroke(clr);
  strokeWeight(3);
  noFill();

  box(cubeSize);
  pop();
}
