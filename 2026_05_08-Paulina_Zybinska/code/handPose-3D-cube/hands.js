let handPose;
let hands = [];

let leftHand = {
  thumb: { x: 0, y: 0, z: 0 },
  index: { x: 0, y: 0, z: 0 },
  midpoint: { x: 0, y: 0, z: 0 },
  isPinching: false,
  distance: 0,
  detected: false,
};

let rightHand = {
  thumb: { x: 0, y: 0, z: 0 },
  index: { x: 0, y: 0, z: 0 },
  midpoint: { x: 0, y: 0, z: 0 },
  isPinching: false,
  distance: 0,
  detected: false,
};

let pinchThreshold = 50;

// Initialize hand tracking
function preload() {
  handPose = ml5.handPose({ flipped: true });
}

// Start hand detection with video
function startHandDetection(videoElement) {
  handPose.detectStart(videoElement, gotHands);
}

// Callback for hand detection results
function gotHands(results) {
  hands = results;
}

// Update hand tracking data
function updateHandTracking() {

  leftHand.detected = false;
  rightHand.detected = false;


  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];

    // Get thumb tip and index finger tip
    // HandPose keypoints: 4 = thumb tip, 8 = index finger tip
    let thumbTip = hand.keypoints[4];
    let indexTip = hand.keypoints[8];

    if (!thumbTip || !indexTip) continue;

    // Determine if this is left or right hand
    let handObj;
    if (hand.handedness == "Left") {
      handObj = leftHand;
    } else {
      handObj = rightHand;
    }

    handObj.detected = true;
    handObj.thumb.x = thumbTip.x;
    handObj.thumb.y = thumbTip.y;
    handObj.index.x = indexTip.x;
    handObj.index.y = indexTip.y;

    // Calculate distance and midpoint
    handObj.distance = dist(handObj.thumb.x, handObj.thumb.y, handObj.index.x, handObj.index.y);
    handObj.midpoint.x = (handObj.thumb.x + handObj.index.x) / 2;
    handObj.midpoint.y = (handObj.thumb.y + handObj.index.y) / 2;

    // Check if pinching
    handObj.isPinching = handObj.distance < pinchThreshold;

  }

}
// Draw all hand keypoints 
function drawHandKeypoints() {
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];

    for (let j = 0; j < hand.keypoints.length; j++) {
      let kp = hand.keypoints[j];
      if (kp) {
        fill(255, 255, 255, 150);
        noStroke();
        circle(kp.x, kp.y, 8);
      }
    }
  }
}

function drawHand(hand) {
  stroke(255, 255, 255);
  strokeWeight(2);
  line(hand.thumb.x, hand.thumb.y, hand.index.x, hand.index.y);

  // Draw thumb tip
  fill(255, 100, 0);
  circle(hand.thumb.x, hand.thumb.y, 15);

  // Draw index finger tip
  fill(0, 200, 255);
  circle(hand.index.x, hand.index.y, 15);

  // Draw midpoint between thumb and index finger tip
  fill(100, 255, 0);
  circle(hand.midpoint.x, hand.midpoint.y, 20);


}

function getHandsCount() {
  return hands.length;
}
