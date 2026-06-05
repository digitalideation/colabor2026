// {"P5LIVE":{"name":"paulina input","mod":1779382684989}} 

let libs=["https://unpkg.com/ml5@1/dist/ml5.min.js",'https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 
'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

let strength = 0
let fx1 = 0
let fx2 = 0
let fx3 = 0

//sandbox - start

H.pixelDensity(2)
s0.initP5()
P5.toggle(0)

src(s0)
	.modulate(noize(1000), ()=> fx1)
	.modulateScale(osc(20), ()=> fx2)
	.luma(()=> fx3)
	.repeat(1,2)
.out()

//sandbox - end





let modelLink="https://teachablemachine.withgoogle.com/models/Y4JAfW6kY/"

let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

function preload() {
  classifier = ml5.imageClassifier(modelLink+"model.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO,{flipped:true});
  video.size(width, 300);
  video.hide();
  classifyVideo();
}

function draw() {
  // Each video frame is painted on the canvas
  clear()
  image(video, 0, 0);
 // background(0)

  // Printing class with the highest probability on the canvas
  fill(255);
  textSize(32);
  text(label, width/2, height/2);
  
  if (label == "can"){
  	circle(400,400,200)
  	strength=0.01
  	
  	fx1 =0.001
  	fx2 =0

  }
  else if(label=="headphones"){
  	rect(600,300,200)
  	strength=0.01
  }
  else {
  	triangle(width/2, height/2, width/2 + 200, height/2 -200, width/2 +400, height/2)
  	strength =0
  }
  
}

// Callback function for when classification has finished
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
  classifyVideo()
 // console.log(results)
}
function classifyVideo() {
	
	classifier.classify(video, gotResult);
	
	
}