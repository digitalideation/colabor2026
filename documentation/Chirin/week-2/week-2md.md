## Week 2

#### Day 1

![Bildschirmfoto 2026-05-18 um 15.02.37](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-2/images/Bildschirmfoto 2026-05-18 um 15.02.37.png)

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background(0,15,255,15) // r,g,b,a
	fill(frameCount % 255)
	circle(mouseX,mouseY,frameCount % 200)
	
	print(frameCount)
}
```

![P5L_new_001_20260504154652](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-2/images/P5L_new_001_20260504154652.png)

#### Day 2

![Bildschirmfoto 2026-05-18 um 15.06.57](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-2/images/Bildschirmfoto 2026-05-18 um 15.06.57.png)

![Bildschirmfoto 2026-05-05 um 09.48.34](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-2/images/Bildschirmfoto 2026-05-05 um 09.48.34.png)

#### ![Bildschirmfoto 2026-05-05 um 13.32.21](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-2/images/Bildschirmfoto 2026-05-05 um 13.32.21.png)

![P5L_color_wheel_20260505145215](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-2/images/P5L_color_wheel_20260505145215.png)

![P5L_new_001_20260505144422](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-2/images/P5L_new_001_20260505144422.png)

#### Day 3 + 4

sick...

#### Day 5

![Bildschirmfoto 2026-05-18 um 15.03.23](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-2/images/Bildschirmfoto 2026-05-18 um 15.03.23.png)



![Bildschirmfoto 2026-05-18 um 15.09.57](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-2/images/Bildschirmfoto 2026-05-18 um 15.09.57.png)

###### ImageClassifer : 

```javascript
let libs = ["https://unpkg.com/ml5@1/dist/ml5.min.js", 'https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

let fx1 = 0
let fx2 = 0
let fx3 = 0

//sandbox start

H.pixelDensity(2)
s0.initP5()
P5.toggle(0)

src(s0)
 .modulate(noize(10000), () => fx1)
 .modulateScale(osc(20), () => fx2)
 .add(src(s0).luma(0.9).scale(1.03), () => fx3)
 .luma(() => 0.2 * a.fft[0]) //a.fft[0] 
.out()

//sandbox end

//let modelLink = "https://teachablemachine.withgoogle.com/models/KLCzegzC9/"
let modelLink = "https://teachablemachine.withgoogle.com/models/KLCzegzC9/"

// A variable to initialize the Image Classifier
let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

function preload() {
  classifier = ml5.imageClassifier(modelLink + "model.json");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);

  // Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO,{flipped:true});
  video.size(width,height);
  video.hide();
  classifyVideo()
}

function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);
  //background(0)

  // Printing class with the highest probability on the canvas
  fill(255);
  textSize(32);
  text(label, width/2, height/2);
  
  if(label == "me"){
  	    circle(width/2, height/2, 100)
     	strength = 0.01
     	fx1 = 1
     	fx2 = 0
     	fx3 = 0
     	
  	}else if(label == "phone"){
  		rect(width/2, height/2, 200)
  		strength = 0.1
  		fx1 = 0
     	fx2 = 1
     	fx3 = 0
     	
  	}else {
  		triangle(width/2, height/2 + 200, height/2 - 200, width/2 + 400, height/2)
  		strength = 0.5
  		fx1 = 0
     	fx2 = 0
     	fx3 = 1
  	}

}

// Callback function for when classification has finished
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
  classifyVideo()
}

function classifyVideo() {
	
	classifier.classify(video,gotResult);
}
```

###### HandPose :

```javascript
let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];

let video;
let state = 'starting...';
let handPose;
let hands = [];
let options = { maxHands: 2, flipHorizontal: true };
let pScale = 20

let distTip = 0 
let distTip2 = 0

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
      console.log(hand)
      if(hand === undefined){return}
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
  
   if(hands.length != 0){
   	distTip = dist(hands[0].keypoints[4].x, hands[0].keypoints[4].y, hands[0].keypoints[8].x,hands[0].keypoints[8].y)
    
    if (hands[1]) {
    	distTip2 = dist(hands[1].keypoints[4].x, hands[1].keypoints[4].y, hands[1].keypoints[8].x,hands[1].keypoints[8].y)
    }
    line(hands[1].keypoints[4].x, hands[1].keypoints[4].y, hands[1].keypoints[8].x,hands[1].keypoints[8].y)
   	
   	stroke(255)
   	strokeWeight(5)
   	line(hands[0].keypoints[4].x, hands[0].keypoints[4].y, hands[0].keypoints[8].x,hands[0].keypoints[8].y)

   if(distTip < 50 ){
     circle(hands[0].keypoints[8].x,hands[0].keypoints[8].y,distTip2 * 0.5)
     }
   }   
}

function gotHands(results) {
  hands = results;
}
```

