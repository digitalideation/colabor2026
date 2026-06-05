// {"P5LIVE":{"name":"new_009","mod":1779732023485}} 

let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];

let video;
let state = 'starting...';
let handPose;
let hands = [];
let options = { maxHands: 2, flipHorizontal: true };
let pScale = 20

let distTip = 0
let distTip2 =0



function preload() {
  handPose = ml5.handPose(options);
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
  background(20, 100);


    for (let i = 0; i < hands.length; i++) {
      const hand = hands[i];
      for (let j = 0; j < hand.keypoints.length; j++) {
        const kp = hand.keypoints[j];
        const x =  kp.x;
        const y =  kp.y;
        fill(map(j, 0, hand.keypoints.length, 0, 255), 255, map(j, 0, hand.keypoints.length, 255, 0));
        noStroke();
        circle(x, y, pScale * sin(frameCount * 0.1 + j) % pScale);
      }
    }

  noStroke();
  fill(255);
  text(state, 10, height - 10);
  

 if (hands.length != 0){
 	distTip = dist(hands[0].keypoints[4].x, hands[0].keypoints[4].y, hands[0].keypoints[8].x, hands[0].keypoints[8].y)
 	if (hands[1]){
 		distTip2 = dist(hands[1].keypoints[4].x, hands[1].keypoints[4].y, hands[1].keypoints[8].x, hands[1].keypoints[8].y)
 		line(hands[1].keypoints[4].x, hands[1].keypoints[4].y, hands[1].keypoints[8].x, hands[1].keypoints[8].y)
 	}
	
 	stroke(255)
 	strokeWeight(5)
 	line(hands[0].keypoints[4].x, hands[0].keypoints[4].y, hands[0].keypoints[8].x, hands[0].keypoints[8].y)
 	
 	if (distTip < 50){
 		circle( hands[0].keypoints[8].x, hands[0].keypoints[8].y,100+distTip2*2.9)
 	}
 }
  
  
 
  
}

function gotHands(results) {
  hands = results;
}