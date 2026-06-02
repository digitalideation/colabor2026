// {"P5LIVE":{"name":"new_007","mod":1779210338203}} 

let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];
let video;
let state = 'starting...';
let handPose;
let hands = [];
let options = { maxHands: 2, flipHorizontal: true };
let pScale = 20

let distTip=0 //Variable für Fingerabstand
let distTip2=0 //defining the variable 

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
  //image(video,0,0); das Video ist eigentlich da, aber wird nicht gezeichnet
  
  //Distanz zwischen zwei Fingern berechnen lassen (distance->)


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

		distTip = dist(hands[0].keypoints[4].x, hands[0].keypoints[4].y,

	 				hands[0].keypoints[8].x, hands[0].keypoints[8].y)
	 	//if (hands[1]) {distTip2= dist(hands[])

		stroke(255)

		line(hands[0].keypoints[4].x, hands[0].keypoints[4].y,

		hands[0].keypoints[8].x, hands[0].keypoints[8].y)


		if (distTip < 30) {
		circle(hands[0].keypoints[8].x, hands[0].keypoints[8].y, 100)

		}	

	}
 
  	
  
  	
 
  
  
   //4-> thumb, 8-> index-finger (hand pose index)
   
 
}

function gotHands(results) {
  hands = results;
}