// {"P5LIVE":{"name":"machine-learning","mod":1778258228735}} 

let libs = ["https://unpkg.com/ml5@1/dist/ml5.min.js", 'https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']
let strength = 0;

let fx1 = 0
let fx2 = 0
let fx3 = 0

// sandbox - start

H.pixelDensity(2) 
s0.initP5() 
P5.toggle(0) 

src(s0)
	.modulate(noize(10000), () => fx1 * 0.1)
	.modulateScale(osc(20), () => fx2)
	.modulate(voronoi(20, 2).luma(0.8).scale(0.99), () => fx3)
	// .add(src(s0).luma(0.9), () => fx3)
	// .add(src(s0).luma(() => 0.8 * a.fft[0]))
.out()
	
// sandbox - end




//let modelLink -> von teachable machine link"
let modelLink ="https://teachablemachine.withgoogle.com/models/QNMnjDWh6/"

// A variable to initialize the Image Classifier
let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

function preload() {
  classifier = ml5.imageClassifier(modelLink);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO, {flipped: true});
  video.size(width, height);
  video.hide();
  classifier.classifyStart(video, gotResult);
}

function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);
  //background(0, 0, 0)

  // Printing class with the highest probability on the canvas
  fill(255);
  textSize(32);
  text(label, width/2, height/2);
  
  if (label == "me"){
  	circle(width/2, height/2, 100)
  	noStroke()
  	strength = 0.01
  	fx1 = 1
  	fx2 = 0
  	fx3 = 0
  }
  else if (label == "phone"){
  	rect(width/2, height/2, 200)
  	noStroke()
  	strength = 0.1
  	fx1 = 0
  	fx2 = 1
  	fx3 = 0
  }
  else {
  	triangle(width/2, height/2, width/2+200, height/2-200, width/2 + 400, height/2)
  	noStroke()
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
}
