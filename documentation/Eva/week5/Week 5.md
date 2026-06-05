x### Process towards final set 

Research: P5 Puppet
 ![[Henry The Handopus — Michael Rexroad Design.webloc]]![[p5.js Web Editor p5 Puppet Runthrough copy.webloc]]
### Handtracking Puppet Both Hands, Background Image


![[Bildschirmfoto 2026-05-27 um 09.57.55.png]]
![[P5L_ff_image-between-fingers_001_20260526140710.png]]

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
let bg; 

function preload() {
	handPose = ml5.handPose();
	kermit = loadImage('https://static.wikia.nocookie.net/alec-thaggard/images/e/e4/20388AA9-245C-4E45-96B6-4C87EF411283.png/revision/latest?cb=20190617040210');
	evilkermit = loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a243a29-186e-46e2-b5fd-3581c92b8930/dcpsjkv-7ceeda17-eea3-48a4-8aea-a8a18d237cf7.png/v1/fill/w_413,h_420/png___the_muppets___evil_kermit_by_supercaptainn_dcpsjkv-fullview.png?')
	//evilkermit = loadImage('https://images.steamusercontent.com/ugc/790863751168986225/C5F0632725A0DBC50B90EB00BA052195FBC68A5C')
	bg = loadImage('https://upload.wikimedia.org/wikipedia/commons/7/71/Luzern_old_part_of_town.JPG');	
}

function setup() {

	createCanvas(windowWidth, windowHeight);

	video = createCapture(VIDEO);
	video.size(windowWidth, windowHeight);
	video.hide();

	handPose.detectStart(video, gotHands);
}

function draw() {
	background(bg);
	
	translate(width, 0);
	scale(-1, 1);

	for(let i = 0; i < hands.length; i++) {

		let hand = hands[i];

		let thumb = hand.keypoints[4];
		let index = hand.keypoints[8];

		let x = (thumb.x + index.x) / 2;
		let y = (thumb.y + index.y) / 2;

		let d = dist(thumb.x, thumb.y, index.x, index.y);
		let size = d * 2;

		imageMode(CENTER);

		if(hand.handedness === "Left") {
			image(kermit, x, y, size, size);
		} else if(hand.handedness === "Right") {
			image(evilkermit, x, y, size, size);
		}
	}

	// draw hand points
	for(let i = 0; i < hands.length; i++) {
		let hand = hands[i];

		for(let j = 0; j < hand.keypoints.length; j++) {
			let keypoint = hand.keypoints[j];

			fill(0, 255, 0);
			noStroke();
			circle(keypoint.x, keypoint.y, 10);
		}
	}
}

function gotHands(results) {
	hands = results;
}

```

### Integrating GIF and Hydra (for "Drugtrip")

![[Bildschirmfoto 2026-05-28 um 09.32.01.png]]
```javasc
let libs = [
	'https://unpkg.com/ml5@1/dist/ml5.min.js',
	'https://unpkg.com/hydra-synth',
	'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js'
]
// s0.initVideo("https://media.giphy.com/media/AS9LIFttYzkc0/giphy.mp4")
src(s0)
noise(10, 0.1)
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

let playGif = false;
let gifStartTime = 0;
let gifDuration = 3000; // milliseconds

function preload() {
	handPose = ml5.handPose();

	kermit = loadImage(
		'https://static.wikia.nocookie.net/alec-thaggard/images/e/e4/20388AA9-245C-4E45-96B6-4C87EF411283.png/revision/latest?cb=20190617040210'
	);

	evilkermit = loadImage(
		'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a243a29-186e-46e2-b5fd-3581c92b8930/dcpsjkv-7ceeda17-eea3-48a4-8aea-a8a18d237cf7.png/v1/fill/w_413,h_420/png___the_muppets___evil_kermit_by_supercaptainn_dcpsjkv-fullview.png?'
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
```

### Making Hydra also controlled by Handmovement 
For this I combined parts of an earlier code, the one I showed for midterms, and put that together with the kermit puppets. I also needed to make it alot lighter/transparent. 

Reference Hydra controlled by handmovement from midterms:
![[Bildschirmfoto 2026-05-18 um 17.43.28.png]]

I went through a lot of different versions until everything worked and the hydra pattern as well as the puppets and the background were visible and the hands could control the hydra and the puppets at the same time. 

Unexpected Accidents which I think looked cool: 
![[Bildschirmfoto 2026-05-29 um 09.40.38.png]]
![[Bildschirmfoto 2026-05-29 um 11.47.57.png]]

Now this is final version as far as the code is concerned I think: 
I still need to put in some own illustrations to make it look more put together and like its own little world. Im considering part of the song "XTAL" by Aphex Twin as the musical layer of the perfomance/screenrecording. 

```javasc
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
	
	// Insert High Kermit here!
		kermit = loadImage(
		'https://static.wikia.nocookie.net/alec-thaggard/images/e/e4/20388AA9-245C-4E45-96B6-4C87EF411283.png/revision/latest?cb=20190617040210'
	);

	evilkermit = loadImage(
		'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4a243a29-186e-46e2-b5fd-3581c92b8930/dcpsjkv-7ceeda17-eea3-48a4-8aea-a8a18d237cf7.png/v1/fill/w_413,h_420/png___the_muppets___evil_kermit_by_supercaptainn_dcpsjkv-fullview.png?'
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
	if(hands.length > 0) {

		for(let i = 0; i < hands.length; i++) {

			let hand = hands[i];

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

				if(playGif) {

					evilGif.show();

					let screenX = width - x;

					evilGif.position(
						screenX - size / 2,
						y - size / 2
					);

					evilGif.size(size, size);

				} else {

					evilGif.hide();
					image(evilkermit, x, y, size, size);

				}
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

		evilGif.remove();

		evilGif = createImg(
			'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyZGN1Znp4YXVzYTV1bDl1cTEyOXloNzV4NHQ1eGY1OXNwaDA2cmowaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ESt8At0PXpmj6/200w.gif',
			'evil gif'
		);

		evilGif.hide();
	}
}
```

The Code turned out a lot more complicated than I can even really understand. But as long as I generally know what part does what, I think I can work with it to the extent where I can show how the "puppet show" was intended. I don't really understand how snippets work or how I would separate my code into snippets now so I won't use them and comment things in and out instead. 

### Final Version
Here I also inserted my own drawings, since I couldn't figure out how to host them locally they are temporarily hosted by a website called im.ge that spat out a weblink thats valid for 7 days. I also tried to slow down the hydra reactiveness a bit to make it less hard to look at but its still a bit to intense for what I was originally going for. 
![[Bildschirmfoto 2026-05-31 um 09.35.54.png]]

```javasc
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

osc(() => 3 + hx * 0.5)
	.luma(() => 0.05 + hy * 0.05)
	.contrast(0.8)
	.brightness(0.3)
	.mult(
		osc(
			() => 0.5 + speed * 5,
			() => hy * 0.05,
			1
		)
	)
	.modulateRepeat(
		osc(() => 0.1 + spread * 2)
	)
	.colorama(() => hy * 2)
	.rotate(() => speed)
	.kaleid(() => 3 + int * 2 + spread * 2)
	.luma(() => 0.4 + hy * 0.02)
	.blend(o0, 0.1)
	.out();
	




let playGif = false;
let gifStartTime = 0;
let gifDuration = 3000; // milliseconds

function preload() {
	handPose = ml5.handPose();

	kermit = loadImage(
'https://i.im.ge/QMhEcur/IMG_1017.png');

// 	kermit = loadImage(
// 'https://i.im.ge/QMhEg5W/IMG_1016.png');

	evilkermit = loadImage(
'https://i.im.ge/QMhE880/IMG_1018.png');

	// load GIF
evilGif = createImg(
'https://i.im.ge/QMhEWQT/IMG_1023.gif'
);

evilGif.style('transform', 'scaleX(-1)');
evilGif.hide();

	bg = loadImage(
		'https://i.im.ge/QMhAEUq/background.png'
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
	if(hands.length > 0) {

		for(let i = 0; i < hands.length; i++) {

			let hand = hands[i];

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

				if(playGif) {

					evilGif.show();

					let screenX = width - x;

					evilGif.position(
						screenX - size / 2,
						y - size / 2
					);

					evilGif.size(size, size);

				} else {

					evilGif.hide();
					image(evilkermit, x, y, size, size);

				}
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
'https://i.im.ge/QMhEjfM/IMG_1022.gif'
);

evilGif.style('transform', 'scaleX(-1)');
evilGif.hide();
	}
}

````

### "Final" Screenrecording (for presentation)

![[final_recording.mp4]]

### Presentation Text 

I'm not going to present a live-coding set that I'm actually going to live-code right now because it's kind of hard to "puppet" with both hands and code at the same time and because my computer is really struggling with the code I created and it turns really laggy, so as a compromise I'm going to show you a screen recording that demonstrates all the features that I build into my code and then I'm going to show some of my process after that. 

---> play screenrecording 

Someone with more hands than me could've done that a bit better than me and my measly 2 hands and I didn't really consider that when I started planning to do something with hand tracking. Because my project didn't really reach a final stage, I'm going to show some more in-between-phases because some of them were still pretty interesting to me. 

---> Images handtracking, facetracking

When we had our first study day I did a little more research into hand tracking and other sorts of tracking because when we looked it with Paulina, I thought it was very entertaining how everyone needed to move around and use their hands which looked very funny from an outside perspective. And I also liked, that you couldn't just  let music play and something happened "automatically" but you had to put physical effort into it but also everyone could use it. 

--> hydra samples

I also really appreciated how easy it was to use hydra so my goal was to combine the two in some way. 

--> Image hand tracking hydra control 

So for the midterm presentation I worked on a code that could control hydra effects by the position of the hand. It is a little messy to control, so you never really know what you're actually doing but it was cool because you didn't need to do anything except wave your hand around and you had basically an unlimited amount of colours and pattern variations to play around with. 
I don't remember exactly what motion did what but the X and Y position of my hand, the rotation, the speed of my movement and the openness were linked to different features like oscillator speed, amount of kaleido parts, colorama, etc. 

Then I further leaned into doing stuff with physical movement and I tried to find a way to "puppet" things around to tell a narrative. 

--> Image kermit and evil kermit puppets 

So here two images were always moving in between fingers, which is cool but here I sort of noticed that it would be very hard to entertain because I could only really do that with 2 images at a time.

--> gif playing screen 

So I tried to include small parts of stories through gifs but 5 minutes still way to much to fill with me in this way. 

--> hydra and puppets

So for the last stretch I wanted to include the hydra hand control as well as the puppets and this took me more than two whole days. I don't even know why but this was long and painful. And at the very end I changed the images for ones I drew myself so I would to at least one small thing that i actually enjoyed doing. 

--> final screenshot 

So this is how I ended up with this halfway working but not really that entertaining code, but at hope the process was at least kind of interesting for you to hear about. That's all, thank you. 



### Text about the process for June 1st 
(400 words, Process, What worked, What didn't)

For the final stretch of this process, I had a hard time figuring out where this was actually going because I think I greatly underestimated how much story there would have to be for a functioning narrative inside a "puppet show". I worked on it step by step and built up a code with several different features, but since most of them were still very new to me and not introduced in the inputs, it took me a really long time to just make things work. I'm glad I was able to mix together several ideas that I thought were interesting: hand position to hydra effects mapping, playing GIFs when letter pressed, moving images between the fingers, etc. 

The biggest issue was the integration of the hydra effects which were linked to the hand placement, which worked fine in the midterm-code but took me more than 2 whole days to just integrate into the "puppet" hand tracking code. Since I was very slow in just completing the code, I didn't really have any time for things like figuring out a story and proper characters and illustrating them. Instead I just had to whip them up really fast over the weekend so it would at least look like something that could tell a story. The inspiration for the general vibe came from some paintings I did during my time at a previous art school based on Martin Suters descriptions of a shrooms trip (if I remember correctly) in the book "Die dunkle Seite des Mondes". I'm a little disappointed that I didn't get to finish a set that could be live-performed, because everyone else was able to do so. 

Now, after the presentations of the others, I'm pleasantly surprised by how different my "set" is from the other projects. Since I wasn't present for the midterm presentations, I really had no idea what everyone else was working on and I didn't concern myself with that at all, which I'm glad about now because I probably would have adjusted my project to sort of fit the aesthetics of the others if I saw them. It's nice to know that what I ended up with is very specific to me and clearly has my handwriting all over it. It didn't turn out as bad as I thought it would, and I'm glad I found a good-ish way to present it by myself. 