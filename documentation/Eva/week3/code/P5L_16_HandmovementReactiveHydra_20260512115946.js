// {"P5LIVE":{"name":"16_HandmovementReactiveHydra","mod":1778587186967}} 

// HYDRA + p5 + ml5 Hand Tracking Reactive Visuals

let libs = [
  'https://unpkg.com/ml5@1/dist/ml5.min.js',
  'https://unpkg.com/hydra-synth',
  'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js'
];

let video;
let state = 'starting...';
let handPose;
let hands = [];

let options = {
  maxHands: 2,
  flipHorizontal: true
};

let pScale = 20;

// hand-controlled values
let hx = 0;
let hy = 0;
let speed = 0;
let spread = 0;

function preload() {
  handPose = ml5.handPose(options);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // webcam
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();

  // hand tracking
  handPose.detectStart(video, gotHands);
  state = 'detecting hands';

  // HYDRA VISUALS
  osc(() => 20 + hx * 40)
    .mult(
      osc(
        () => 1 + speed * 10,
        () => hy * 0.5,
        1
      )
    )
    .modulateRepeat(
      osc(() => 0.1 + spread * 5)
    )
    .colorama(() => hy * 5)
    .rotate(() => speed)
    .kaleid(() => int(3 + spread * 20))
    .luma(() => 0.2 + hy * 0.5)
    .out();
}

function draw() {
  background(0);

  image(video, 0, 0, width, height);

  for (let i = 0; i < hands.length; i++) {

    const hand = hands[i];

    // use index finger tip
    const tip = hand.keypoints[8];

    if (tip) {

      hx = tip.x / width;
      hy = tip.y / height;

      // hand motion speed
      speed = dist(
        tip.x,
        tip.y,
        pmouseX,
        pmouseY
      ) * 0.01;

      // hand openness
      let thumb = hand.keypoints[4];
      spread = dist(
        thumb.x,
        thumb.y,
        tip.x,
        tip.y
      ) / 300;

      // visual tracker
      fill(255, 0, 200);
      noStroke();
      circle(
        tip.x,
        tip.y,
        50 + speed * 100
      );
    }

    // draw all points
    for (let j = 0; j < hand.keypoints.length; j++) {

      const kp = hand.keypoints[j];

      fill(
        map(j, 0, hand.keypoints.length, 0, 255),
        255,
        map(j, 0, hand.keypoints.length, 255, 0)
      );

      noStroke();

      circle(
        kp.x,
        kp.y,
        pScale * sin(frameCount * 0.1 + j)
      );
    }
  }

  fill(255);
  text(state, 20, height - 20);

  text("hx: " + nf(hx,1,2), 20, 30);
  text("hy: " + nf(hy,1,2), 20, 50);
  text("speed: " + nf(speed,1,2), 20, 70);
}

function gotHands(results) {
  hands = results;
}

