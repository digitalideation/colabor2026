### Reflection on Process

Up until now I mostly tried to follow the exercises as it doesn't feel like I understand enough to really create anything complex by myself. I also feel a bit lost because I'm missing the connection to my field of study (Illustration) but I have found some aspects that I find interesting, I just dont know how to work with them yet. 

As part of the process I also tried a simple snippet, that just swapped out randomizer images from an online database when the audio input was above a certain volume. This obviously didn't look that interesting because it was mostly stock images but what I did like, is that it automatically didnt look as "digital" and intense as the other more hydra- and vectorlooking things we did in class. The very intense colors, patterns and movements just give a headache really fast and it feels very someone generic. Anyone, anywhere could just play this. 

What I find more interesting is when the code requires some human interaction. Even if just the camera is on, its unique to the person and current situation. So thats why the things we looked at with Paulina stuck with me. The code where hand movements influence the hydra-effects forces a person to move and look a little silly, which would seem like a much more comfortable social interaction to me, than to have the coders and the audience completely seperate. This code I showed is still unpredictable and I don't fully understand it because I would have never been able to even come close to this without tutorials and codeparts from other people and chatgpt that fixed it when it didnt work. 

Audioreactive code doesn't seem that interesting to me because everything still happens within set boundaries. But I did like one version of audioreactive hydra I did by accident, because I found a codepart that seperates the audio-input into Bass, Mid and High, which seems like could be more fun to specifically cater to with the sound. It also looks like vibrating vocal chords to me, which also gives me a bit of the humanness I want. 

I would also be interested in working a little more with Strudel, but I'm not that interested in making music and more like a soundscape because making a song in such short time without any prior musical skills seems unrealistic and I really dont have a good ear for making music. 



### Outlook after Presentation/Discussion 

- Something for physically perfomative like a Chasperli-Theater
- Handtracking with Illustrated Figures to make Illustration a bigger part of it 
- Audio either Soundscape or prerecorded Storytelling


### Handtracking

![[Bildschirmfoto 2026-05-27 um 15.41.10.png]]

![[Bildschirmfoto 2026-05-21 um 09.11.56.png|613]]
```javasc
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
```

### Handpuppet
![[P5L_ff_image-between-fingers_001_20260521101433.png]]

```javasc
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
```

![[P5L_ff_image-between-fingers_001_20260521103336.png]]

```javasc
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
```

### 3D, Lights (with Yann)
![[P5L_ii_audiosphere_20260522134800.png]]
```javasc
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	// a5.ease = .075 // customize ease speed
}

function draw() {
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	orbitControl)
	lights()
	ambientLight(10);
	ambientMaterial(100,100,255); 
	noStroke()

	background(0)
	fill(0,0,255)
	
	
	push()
	specularMaterial(80,139,11)
	translate(200, 0)
	sphere(50 + fftEase[100])
	pop()


	push()
	fill(0, 100, 100)
	specularMaterial(80,139,11)
	translate(-100, 0)
	sphere(50 + fftEase[20])
	pop()
	
	specularMaterial(80,139,11)
	sph(0,fftEase[0] * .7, -50, 50 + fftEase[60])


	/* fftEase */
	for(let i = 0; i < fftEase.length; i++) {
		let freq = fftEase[i]; // (0, 255)
		let x = map(i, 0, fftEase.length, 0, width)
		let w = width / fftEase.length
		rect(x, height * .805, w, freq)
	}
}

function sph(x,y,z, size, rspeed){
	push()	
	//rotate(frameCount * .1)
	noStroke()
	fill(255, 255, 0)
	translate(50, 0)
	sphere(50 + fftEase[60])
	pop()	
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

