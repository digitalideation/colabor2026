// {"P5LIVE":{"name":"ff_image-between-fingers_001","mod":1779359616464}} 

let libs = [
  'https://unpkg.com/ml5@1/dist/ml5.min.js',
  'https://unpkg.com/hydra-synth',
  'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js'
]

let handPose;
let video;
let hands = [];
let kermit;
let evilkermit; 

function preload() {
  handPose = ml5.handPose();
  kermit = loadImage(
    'https://static.wikia.nocookie.net/alec-thaggard/images/e/e4/20388AA9-245C-4E45-96B6-4C87EF411283.png/revision/latest?cb=20190617040210');
 evilkermit = loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a243a29-186e-46e2-b5fd-3581c92b8930/dcpsjkv-7ceeda17-eea3-48a4-8aea-a8a18d237cf7.png/v1/fill/w_413,h_420/png___the_muppets___evil_kermit_by_supercaptainn_dcpsjkv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIwIiwicGF0aCI6Ii9mLzRhMjQzYTI5LTE4NmUtNDZlMi1iNWZkLTM1ODFjOTJiODkzMC9kY3Bzamt2LTdjZWVkYTE3LWVlYTMtNDhhNC04YWVhLWE4YTE4ZDIzN2NmNy5wbmciLCJ3aWR0aCI6Ijw9NDEzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2gFJ7jyIYIWRhJQnQ0S2wXfz_THfHWq3O0SGZadp0ww')
	
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

  let thumb = hand.keypoints[4];
  let index = hand.keypoints[8];

  let x = (thumb.x + index.x) / 2;
  let y = (thumb.y + index.y) / 2;

  let d = dist(thumb.x, thumb.y, index.x, index.y);
  let size = d * 2;

  imageMode(CENTER);

  if (hand.handedness === "Left") {
    image(kermit, x, y, size, size);
  } else if (hand.handedness === "Right") {
    image(evilkermit, x, y, size, size);
  }
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