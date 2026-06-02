// {"P5LIVE":{"name":"ff_kermit-bg&hydra","mod":1780049374941}} 

let libs = [
	'https://unpkg.com/ml5@1/dist/ml5.min.js',
	'https://unpkg.com/hydra-synth',
	'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js'
]
// s0.initVideo("https://media.giphy.com/media/AS9LIFttYzkc0/giphy.mp4")
src(s0)
noise(() => noiseAmount, 0.1)
	.luma(0.4)
	.out(o0)
	
let bg;
let handPose;
let video;
let hands = [];
let kermit;
let evilkermit;
let evilGif;
let bgVideo;
let noiseAmount = 10;

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

	for(let i = 0; i < hands.length; i++) {

		let hand = hands[i];

		let thumb = hand.keypoints[4];
		let index = hand.keypoints[8];
		
		noiseAmount = map(
	index.y,
	0,
	height,
	30,
	1
);

		let x = (thumb.x + index.x) / 2;
		let y = (thumb.y + index.y) / 2;

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