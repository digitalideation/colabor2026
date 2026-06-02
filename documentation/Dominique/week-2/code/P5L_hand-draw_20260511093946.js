// {"P5LIVE":{"name":"hand-draw","mod":1778492386729}} 

let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];

let video;
let state = 'starting...';
let handPose;
let hands = [];
let options = { maxHands: 2, flipHorizontal: true };
let pScale = 20

let distTip = 0 // define variable for distance between finger tips
let distTip2 = 0

function preload() {
	handPose = ml5.handPose(options);
	//background(20, 43, 4)
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	video = createCapture(VIDEO, { flipped: true });
	video.size(width, height);
	video.hide();

	handPose.detectStart(video, gotHands);
	state = 'detecting hands';
}

function draw() {
	//background(20, 100);
	//image(video,0,0) //show webcam


	for(let i = 0; i < hands.length; i++) {
		const hand = hands[i];
		for(let j = 0; j < hand.keypoints.length; j++) {
			const kp = hand.keypoints[j];
			const x = kp.x;
			const y = kp.y;
			fill(map(j, 0, hand.keypoints.length, 0, 255), 255, map(j, 0, hand.keypoints.length, 255, 0));
			noStroke();
			//circle(x, y, pScale * sin(frameCount * 0.1 + j) % pScale);
		}
	}

	noStroke();
	fill(235, 255, 222);
	text(state, 10, height - 10);

	//according to ml5 handpose mode, thumb tip = keypoint 4, 
	//index finger tip =  keypoint 8
	//hands [0] = one of the hands; we have two = hands [0] and hands [1]


	if(hands.length != 0) {
		
		stroke(255)
		strokeWeight(5)
		
		distTip = dist(hands[0].keypoints[4].x, hands[0].keypoints[4].y,
			hands[0].keypoints[8].x, hands[0].keypoints[8].y)
		// if it detects a second hand
		if(hands[1]) {
			distTip2 = dist(hands[1].keypoints[4].x, hands[1].keypoints[4].y,
				hands[1].keypoints[8].x, hands[1].keypoints[8].y)
			//line(hands[1].keypoints[4].x, hands[1].keypoints[4].y, hands[1].keypoints[8].x, hands[1].keypoints[8].y)

		}
		
		//line(hands[0].keypoints[4].x, hands[0].keypoints[4].y, hands[0].keypoints[8].x, hands[0].keypoints[8].y)
		console.log(distTip)

		// if distance of tips of first detected hand is smaller than 30,
		// a circle is drawn
		// the distance of tips of second detected hand controls the size of the circle
		if(distTip < 30) {
			noStroke()
			circle(hands[0].keypoints[8].x, hands[0].keypoints[8].y, 50 + distTip2 * 0.5)
		}
		
	}


}

function gotHands(results) {
	hands = results;
}