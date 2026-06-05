// {"P5LIVE":{"name":"Finger Instrument","mod":1780346358255}} 

let libs = ['https://unpkg.com/ml5@1/dist/ml5.js'];

// optional background pattern
 strudel $: s("bd(3,8) sd, hh*<4 8 16>").dec(.2).delay(.4) // strudel

let handPose;
let video;
let hands = [];
let options = { maxHands: 2, flipHorizontal: true};

const PINCH_DIST = 40;
const THUMB_TIP = 4;
const FINGER_TIPS = [8, 12, 16, 20]; // index, middle, ring, pinky

// note frequencies per finger
const freqs = {
  left:  [220.00, 261.63, 329.63, 392.00],  // A3, C4, E4, G4
  right: [440.00, 523.25, 659.25, 783.99]   // A4, C5, E5, G5
};

const oscTypes = ['sine', 'triangle', 'sine', 'triangle'];

const fingerColors = [
  [255, 80,  80],  // index  - red
  [80,  255, 80],  // middle - green
  [80,  80,  255], // ring   - blue
  [255, 220, 50],  // pinky  - yellow
];

let pinchActive = {
  left:  [false, false, false, false],
  right: [false, false, false, false]
};

let audioCtx;

function playNote(freq, type) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.8);
}

function mousePressed() {
  if (!audioCtx) audioCtx = new AudioContext();
}

function preload() {
  handPose = ml5.handPose(options);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();
  handPose.detectStart(video, gotHands);
}

function draw() {
  background(0);
  //image(video, 0, 0, width, height);

  // prompt to click if audio not started
  if (!audioCtx) {
    fill(255);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    text('Click anywhere to activate audio', width / 2, 40);
  }

  for (let i = 0; i < hands.length; i++) {
    const hand = hands[i];
    const side = hand.handedness.toLowerCase();

    // draw all keypoints
    for (let j = 0; j < hand.keypoints.length; j++) {
      const kp = hand.keypoints[j];
      fill(180, 180, 180, 150);
      noStroke();
      circle(kp.x, kp.y, 6);
    }

    const thumb = hand.keypoints[THUMB_TIP];

    for (let f = 0; f < FINGER_TIPS.length; f++) {
      const finger = hand.keypoints[FINGER_TIPS[f]];
      const d = dist(thumb.x, thumb.y, finger.x, finger.y);
      const isPinching = d < PINCH_DIST;
      const c = fingerColors[f];

      if (isPinching) {
        // visual feedback
        fill(c[0], c[1], c[2], 200);
        noStroke();
        circle(finger.x, finger.y, 30);
        circle(thumb.x, thumb.y, 30);
        stroke(c[0], c[1], c[2], 150);
        strokeWeight(3);
        line(finger.x, finger.y, thumb.x, thumb.y);
        noStroke();

        // trigger sound only on first frame of pinch
        if (!pinchActive[side][f] && audioCtx) {
          playNote(freqs[side][f], oscTypes[f]);
          pinchActive[side][f] = true;
        }
      } else {
        pinchActive[side][f] = false;
      }
    }
  }
}

function gotHands(results) {
  hands = results;
}