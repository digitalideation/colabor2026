// {"P5LIVE":{"name":"ff_image-between-fingers_001","mod":1779358473289}} 

let libs = [
  'https://unpkg.com/ml5@1/dist/ml5.min.js',
  'https://unpkg.com/hydra-synth',
  'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js'
]

let handPose;
let video;
let hands = [];
let kermit;

function preload() {
  handPose = ml5.handPose();
  kermit = loadImage(
    'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  video = createCapture(VIDEO);
  video.size(windowWidth, windowHeight);
  video.hide();

  handPose.detectStart(video, gotHands);
}

function draw() {
  background(0);

  translate(width, 0);
  scale(-1, 1);

  for (let i = 0; i < hands.length; i++) {

    let hand = hands[i];
 // fingertip points
    let thumb = hand.thumb_tip;
    let index = hand.index_finger_tip;
    // midpoint between fingers
    let x = (thumb.x + index.x) / 2;
    let y = (thumb.y + index.y) / 2;
// distance between fingers
    let d = dist(thumb.x, thumb.y, index.x, index.y);
    // image size reacts to pinch distance
    let size = d * 2;

    imageMode(CENTER);
    image(kermit, x, y, size, size);
  }
   // draw hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];

    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];

      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 30);
    }
  }
}

function gotHands(results) {
  hands = results;
}