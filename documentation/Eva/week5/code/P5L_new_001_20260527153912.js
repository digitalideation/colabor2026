// {"P5LIVE":{"name":"new_001","mod":1779896352813}} 

let libs = [
	'https://unpkg.com/ml5@1/dist/ml5.min.js',
	'https://unpkg.com/hydra-synth',
	'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js'
]

let handPose;
let video;
let hands = [];


function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();
  handPose.detectStart(video, gotHands);
}

function gotHands(results) {
  // Save the output to the hands variable
  hands = results;
}

function draw() {
  background(220);
  	translate(width, 0);
	scale(-1, 1);
  image(video, 0, 0, width, height)

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