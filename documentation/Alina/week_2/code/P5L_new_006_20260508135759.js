// {"P5LIVE":{"name":"new_006","mod":1778248679822}} 

let libs=["https://unpkg.com/ml5@1/dist/ml5.min.js", 'includes/libs/hydra-synth.js', 'includes/libs/hy5.js']
let strength=0

let fx1=0
let fx2= 0
let fx3= 0

//sandbox - start
H.pixelDensity(2);
s0.initP5()
P5.toggle(0)



src(s0)
.modulate(noize(100),()=> fx1 *0.01) //()=>um die Funktion zu erkennen
.modulateScale(osc(20),()=>fx2)
.diff(src(s0).luma(0.1).scale(1.02),()=> fx3)
.luma(()=> 0.2*a.fft[0])// a.fft
.out();


//sandbox - end
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
  createCanvas(windowWidth,windowHeight, 480);
  background(255);

  // Using webcam feed as video input, hiding html element to avoid duplicate with canvas
  video = createCapture(VIDEO,{flipped:true}); //damit die Kamera folgt
  video.size(windowWidth,windowHeight);
  video.hide();
  
  classifyVideo();
  // classifyStart is not the right thing 
}

function draw() {
  // Each video frame is painted on the canvas

  
  image(video, 0, 0);
  //background(0);

  // Printing class with the highest probability on the canvas
  fill(255);
  textSize(32);
  text(label,windowWidth/2,windowHeight/2);
  
  //== equals / = assigning, is the label me -> boolean true, flase
  if (label == "me"){
  	fill(0,0,255,100)
  	circle(windowWidth/2,windowHeight/2,100)
  	strength=0.01
  	fx=1
  	fx2=0
  	fx3=0
  	
  }else if (label == "pen"){
  	fill(255,0,0)
  	noStroke()
  	rect(width/2,height/2,100)
	strength=0.1
	fx1=0
	fx2=1
	fx3=0
  }else{
  	fill(0,255,0,100)
  	triangle(width/2,height/2,width/2+200, height/2 -200,width/2+400,height/2);
  	strength= 0.5
  	fx1=0
	fx2=0
	fx3=1
  } 
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