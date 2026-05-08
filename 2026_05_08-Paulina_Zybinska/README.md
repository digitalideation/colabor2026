# Machine Learning in the Browser

![Body tracking](/2026_05_08-Paulina_Zybinska/images/ml5js.png)

<br>
While running traditional Machine Learning models often requires significant GPU compute, it can be optimized to run efficiently in resource-limited environments like the browser. A great entry into body tracking and image classification is the <strong>ml5.js</strong> high-level library and <strong>Teachable Machine</strong> tool. It is great for creative coding and live interaction, often used in combination with <strong>p5.js</strong>.



# [ml5.js](https://ml5js.org/) 

![Bubble World by Sihan Zhang](/2026_05_08-Paulina_Zybinska/images/BubbleWorld.gif)
<br>

Using the ml5.js library, you can easily access a variety of pre-trained models for the browser:

- **Body & Face Estimation**
    - BodyPose
    - BodySegmentation
    - HandPose
    - FaceMesh <br>

- **Classification**
    - ImageClassifier
    - SoundClassifier<br>

- **Natural Language Processing**
    - Sentiment <br>

- **Spatial Awareness**
    - ObjectDetection 
    - DepthEstimation <br>

**CAREFUL!** Many tutorials and LLMs refer to an older version of ml5.js library found [here](https://archive-docs.ml5js.org/#/)! If you see some untypical errors in the console, this might be often the issue.

_________________________

# [Teachable Machine](https://teachablemachine.withgoogle.com/train/image)

![Teachable Machine Image Model](/2026_05_08-Paulina_Zybinska/images/TeachableMachine.gif)
<br>

Teachable Machine is a web-based tool designed for fast and easy machine learning model training. It allows you to "teach" a computer to recognize things—like your face, specific gestures, or certain sounds—directly in your web browser without needing to write complex code. It can be used together with **ml5.js** and **p5.js** to create your own classifiers.

Using TeachableMachine with p5.js and [ml5.js ImageClassifier](https://docs.ml5js.org/#/reference/image-classifier) :
  - **Step1:** Change the name of the classes to something that is understandable
  - **Step2:** Add images (at least 20) or video frames (between 100 and 200) to each class 
  - **Step3:** Click on "Train Model"
  - **Step4:** After the model is trained click on "Export Model"
  - **Step5:** In the pop-up window select "Upload Model", and copy the link to your Teachable Machine model to use in p5Live

_________________________

## Ressources
- [The Coding Train ml5.js Begginer's Guide](https://thecodingtrain.com/tracks/ml5js-beginners-guide)
- [Patt Vira Coding Tutorials](https://www.pattvira.com/coding-tutorials/ml5js)
- [ml5js Glossary](https://docs.ml5js.org/#/learn/ml5-glossary)

## Projects
- [Objectifier by Bjorn Karmann](https://bjoernkarmann.dk/project/objectifier)
- [An algorithm watching a movie by trailer Andreas Refsgaard](https://www.andreasrefsgaard.dk/projects/an-algorithm-watching/)
- [Recharge by Dries Depoorter]()

## Advanced web-based tools for ML
 - [MediaPipe](https://ai.google.dev/edge/mediapipe/solutions/guide) : ml5.js on steroids 💪
 - [ONNX Runtime](https://onnxruntime.ai/docs/tutorials/web/) : enables you to run and deploy complex machine learning models in your web application using JavaScript APIs and libraries 🤯

## Code Download
- [Download Github Repository](https://download-directory.github.io/)

_________________________

## Code Snippets 

### Teachable Machine + P5live

```javascript
let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];

let classifier;
 //replace with your link to Teachable Machine model
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/m32dUhe3gq/';

let video;
let label = 'loading...';
let confidence = 0;

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO, { flipped: true });
  video.size(640, 480);
  video.hide();

  classifyVideo();

  textFont('monospace');
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  image(video, 0,0, width, height);

  // Label
  noStroke();
  fill(0, 180);
  rect(0, height - 100, width, 100);

  fill(255);
  textSize(48);
  text(label, width / 2, height - 60);

  textSize(18);
  text(nf(confidence, 1, 2), width / 2, height - 20);
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(results) {
  label = results[0].label;
  confidence = results[0].confidence;
  classifyVideo();
}
```

### HandPose

```javascript
let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];

let video;
let state = 'starting...';
let handPose;
let hands = [];
let options = { maxHands: 2, flipHorizontal: true };
let pScale = 20

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
}

function gotHands(results) {
  hands = results;
}
```

### Object Detection

```javascript
let video;
let detector;
let detections = [];

function preload(){
  // Load the COCO SSD model 
  // This model is trained on the COCO dataset, which contains 80 common objects
  // https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
  detector = ml5.objectDetection("cocossd");
}

function setup() {
  createCanvas(960, 540); //change to 640, 480 if using webcam
  background(0);

 // uncomment these lines if using webcam
  /* video = createCapture(VIDEO); 
  video.size(width, height);
  video.hide();  */

  //uncomment these lines if using video file
   video = createVideo("/2026_05_08-Paulina_Zybinska/code/objectDetection/assets/rainyday2.mp4");
  video.size(width, height);
  video.hide();
  video.loop();

  detector.detectStart(video, gotDetections);
}

// Callback function is called each time the object detector finishes processing a frame.
function gotDetections(results) {
  detections = results;
}

function draw() {
  background(0);

  let scaleX = width / video.elt.videoWidth;
  let scaleY = height / video.elt.videoHeight;

  //extra (vanilla javascript) to create a clip path made of all detection rectangles
  /*drawingContext.save();
  drawingContext.beginPath();
  for (let i = 0; i < detections.length; i++) {
    let d = detections[i];
    drawingContext.rect(
      d.x * scaleX,
      d.y * scaleY,
      d.width * scaleX,
      d.height * scaleY
    );
  }
  drawingContext.clip();*/

  image(video, 0, 0, width, height);

  //extra (vanilla javascript) to restore the drawing context after the clip path is created
  //drawingContext.restore();

  // outlines + labels on top
  for (let i = 0; i < detections.length; i++) {
    let d = detections[i];
    let x = d.x * scaleX;
    let y = d.y * scaleY;
    let w = d.width * scaleX;
    let h = d.height * scaleY;

    stroke(0, 255, 0);
    strokeWeight(2);
    noFill();
    rect(x, y, w, h);

    noStroke();
    fill(255);
    textSize(24);
    text(d.label, x + 10, y + 24);
  }
}
```
