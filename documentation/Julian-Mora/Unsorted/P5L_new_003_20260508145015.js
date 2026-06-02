// {"P5LIVE":{"name":"new_003","mod":1778251815691}} 

//https://teachablemachine.withgoogle.com/models/-TZs74Q9n/ Teachable machine

let libs = ["https://unpkg.com/ml5@1/dist/ml5.min.js",'https://unpkg.com/hydra-synth', 
'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

//sandbox - start
H.pixelDensity(1)
s0.initP5()
P5.toggle(0)

src(s0)
.modulate(noize(1000), () => strenght)
.luma(() => 0.2 * a.fft[0])

.out()

//sandbox - end

let modelLink = "https://teachablemachine.withgoogle.com/models/-TZs74Q9n/"

let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

function preload() {
  classifier = ml5.imageClassifier(modelLink + "model.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO, {flipped:true});
  video.size(width, height);
  video.hide();
  classifyVideo()
  
}


function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);

  // Printing class with the highest probability on the canvas
  fill(255);
  textSize(32);
  text(label, width/2, height/2);
  
  if (label == "me"){
      circle(width/2, height/2, 100)
  }else if ( label == "phone"){
  rect(width/2, height/2, 100)
  }else {
      triangle(width/2, height/2, width/2 + 200, height/2 - 200, width/2 + 400, height/2)
  }
 
  
 
  
  
  
}

// Callback function for when classification has finished
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
  classifyVideo()
  
}

function classifyVideo() {
      
      classifier.classify(video, gotResult);
      
}