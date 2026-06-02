// {"P5LIVE":{"name":"new_006","mod":1778241375667}} 



let libs=["https://unpkg.com/ml5@1/dist/ml5.min.js"]

//Link zu meinem exportierten teachable machine Modell
// muss uploadet werden und den Link kopieren
let modelLink= "https://teachablemachine.withgoogle.com/models/vgJfZCX0c/"

let classifier;

// A variable to hold the video we want to classify
let video;

// Variable for displaying the results on the canvas
let label = "Model loading...";

//

function preload() {
  classifier = ml5.imageClassifier(modelLink+ "model.json");
}

function setup() {
  createCanvas(640, 480);
  background(255);

  // Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO,{flipped:true}); //damit die Kamera folgt
  video.size(640, 480);
  video.hide();
  
  classifyVideo();
  // classifyStart is not the right thing 
}

function draw() {
  // Each video frame is painted on the canvas
  image(video, 0, 0);

  // Printing class with the highest probability on the canvas
  fill(255);
  textSize(32);
  text(label, 50, 50);
}

// Callback function for when classification has finished
function gotResult(results) {
  // Update label variable which is displayed on the canvas
  label = results[0].label;
  classifyVideo();
}
function classifyVideo(){
	
	//allows to display the class
	classifier.classify(video, gotResult);
	
	
}