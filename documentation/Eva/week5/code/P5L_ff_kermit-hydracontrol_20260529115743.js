// {"P5LIVE":{"name":"ff_kermit-hydracontrol","mod":1780055863242}} 

let libs = [
	'https://unpkg.com/ml5@1/dist/ml5.min.js',
	'https://unpkg.com/hydra-synth',
	'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js'
]

let bg;
let handPose;
let video;
let hands = [];
let kermit;
let evilkermit;
let evilGif;
let bgVideo;


let hx = 0;
let hy = 0;
let speed = 0;
let spread = 0;
let int = 3;
let prevX = 0;
let prevY = 0;
let noiseAmount = 10;

let hxS = 0;
let hyS = 0;
let speedS = 0;
let spreadS = 0;
let intS = 0;

osc(() => 5 + hx * 10)

.luma(() => 0.05 + hy * 0.1)
.contrast(0.8)
.brightness(0.6)
.blend(o0, 0.01)
	.mult(
		osc(
			() => 1 + speed * 5,
			() => hy * 0.2,
			1
		)
	)
	.modulateRepeat(
		osc(() => 0.1 + spread * 2)
	)
	.colorama(() => hy * 2)
	.rotate(() => speed)
	.kaleid(() => 3 + int * 10 + spread * 10)
	.luma(() => 0.4 + hy * 0.02)
.blend(o0, 0.25)
	.out();


let playGif = false;
let gifStartTime = 0;
let gifDuration = 3000; // milliseconds

function preload() {
	handPose = ml5.handPose();

	kermit = loadImage(
		'https://static.wikia.nocookie.net/alec-thaggard/images/e/e4/20388AA9-245C-4E45-96B6-4C87EF411283.png/revision/latest?cb=20190617040210'
	);

	evilkermit = loadImage(
		'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a243a29-186e-46e2-b5fd-3581c92b8930/dcpsjkv-7ceeda17-eea3-48a4-8aea-a8a18d237cf7.png/v1/fill/w_413,h_420/png___the_muppets___evil_kermit_by_supercaptainn_dcpsjkv-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDIwIiwicGF0aCI6Ii9mLzRhMjQzYTI5LTE4NmUtNDZlMi1iNWZkLTM1ODFjOTJiODkzMC9kY3Bzamt2LTdjZWVkYTE3LWVlYTMtNDhhNC04YWVhLWE4YTE4ZDIzN2NmNy5wbmciLCJ3aWR0aCI6Ijw9NDEzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2gFJ7jyIYIWRhJQnQ0S2wXfz_THfHWq3O0SGZadp0ww'
	);

	// load GIF
	evilGif = createImg(
		'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyZGN1Znp4YXVzYTV1bDl1cTEyOXloNzV4NHQ1eGY1OXNwaDA2cmowaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ESt8At0PXpmj6/200w.gif',
		'evil gif'
	);

	evilGif.hide();

	bg = loadImage(
		'https://upload.wikimedia.org/wikipedia/commons/3/3c/Shaki_waterfall.jpg'
	);
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	video = createCapture(VIDEO);
	video.size(windowWidth, windowHeight);
	video.hide();

	handPose.detectStart(video, gotHands);

	bgVideo = createVideo([
		'https://cdn.pixabay.com/video/2022/10/17/135146-761546366_large.mp4'
	])

	bgVideo.hide(); // important!
	bgVideo.loop();
	bgVideo.volume(0);

}

function draw() {

	imageMode(CORNER);
	image(bg, 0, 0, windowWidth, windowHeight);
	image(bgVideo, 0, 0, width, height);
	imageMode(CENTER);

	push();

	translate(width, 0);
	scale(-1, 1);

	// stop gif after duration
	if(playGif && millis() - gifStartTime > gifDuration) {
		playGif = false;
		evilGif.hide();
	}

if (hands.length > 0) {

	let hand = hands[0];

	let thumb = hand.keypoints[4];
	let index = hand.keypoints[8];
	let wrist = hand.keypoints[0];
	let middle = hand.keypoints[12];


	noiseAmount = map(
	index.y,
	0,
	height,
	30,
	1
);
		
let dx = index.x - prevX;
let dy = index.y - prevY;

let rawSpeed = dist(0, 0, dx, dy) * 0.1;

speed = lerp(speed, rawSpeed, 0.2);

prevX = index.x;
prevY = index.y;

let spreadRaw = dist(
	thumb.x, thumb.y,
	index.x, index.y
);

spread = map(spreadRaw, 20, 200, 0, 1);

let openness = dist(
	wrist.x, wrist.y,
	middle.x, middle.y
);

int = map(openness, 50, 300, 0, 1);


		let x = (thumb.x + index.x) / 2;
		let y = (thumb.y + index.y) / 2;
		
	hx = hand.keypoints[8].x / width;
hy = hand.keypoints[8].y / height;

hxS = lerp(hxS, hx, 0.2);
hyS = lerp(hyS, hy, 0.2);

		let d = dist(thumb.x, thumb.y, index.x, index.y);
		let size = d * 2;

		if(hand.handedness === "Left") {

			image(kermit, x, y, size, size);

		} else if(hand.handedness === "Right") {

			// play GIF instead when G pressed
			if(playGif) {

				evilGif.show();

				// because canvas is mirrored
				let screenX = width - x;

				evilGif.position(screenX - size / 2, y - size / 2);
				evilGif.size(size, size);

			} else {

				evilGif.hide();
				image(evilkermit, x, y, size, size);

			}
		}
	}

	// hand keypoints
	for(let i = 0; i < hands.length; i++) {

		let hand = hands[i];

		for(let j = 0; j < hand.keypoints.length; j++) {

			let keypoint = hand.keypoints[j];

			fill(0, 255, 0);
			noStroke();
			circle(keypoint.x, keypoint.y, 10);
		}
	}

	pop();
}

function gotHands(results) {
	hands = results;
}

// press G to trigger GIF once
function keyPressed() {
	if(key === 'g' || key === 'G') {
		playGif = true;
		gifStartTime = millis();

		// restart GIF
		evilGif.remove();

		evilGif = createImg(
			'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyZGN1Znp4YXVzYTV1bDl1cTEyOXloNzV4NHQ1eGY1OXNwaDA2cmowaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ESt8At0PXpmj6/200w.gif',
			'evil gif'
		);

		evilGif.hide();
	}
}