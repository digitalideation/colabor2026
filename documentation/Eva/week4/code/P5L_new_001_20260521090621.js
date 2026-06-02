// {"P5LIVE":{"name":"new_001","mod":1779354381280}} 

let libs = [
	'https://unpkg.com/ml5@1/dist/ml5.min.js',
	'https://unpkg.com/hydra-synth',
	'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js'
]

let handPose;
let video;
let hands = [];

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  	video = createCapture(VIDEO, { flipped: true });
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Draw the webcam video
  //image(video, 0, 0, width, height);

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}