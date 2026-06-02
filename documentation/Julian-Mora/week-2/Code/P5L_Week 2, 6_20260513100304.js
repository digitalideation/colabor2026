// {"P5LIVE":{"name":"Week 2, 6","mod":"1778666584824"}} 

let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];
let video, handPose, hands = [];

function preload() {
  handPose = ml5.handPose({ maxHands: 1, flipHorizontal: true });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();
  handPose.detectStart(video, r => hands = r);
}

function draw() {
  frameRate(5);
  background(200);

  let leading = 32;
  let r = 0, g = 100, b = 255;

  if (hands.length > 0) {
    let tip = hands[0].keypoints[8];
    leading = map(tip.y, 0, height, 100, 5);    
    r = map(tip.x, 0, width, 0, 255);           
    b = map(tip.x, 0, width, 255, 0);           
  }

  fill(r, g, b);
  textSize(100);
  textWrap(CHAR);
  textFont('monospace');
  textAlign(LEFT);
  textStyle(ITALIC);
  textLeading(leading);
  text("cretaive coding hslu".repeat(100), 10, 10, windowWidth / 1.1, windowHeight);
}