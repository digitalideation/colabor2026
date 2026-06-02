// {"P5LIVE":{"name":"first_scene_001","mod":1780240676090}} 

let meAskyou = ["The history of drum and bass and the windrush generation",
"Did you hear about the windrush generation before?",
"What does it have to do with drum and bass?",
"And how was drum and bass being formed in the UK?"]
let questions = meAskyou.join(' ')

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	
 let live= (frameCount%8)
// frameRate questions 2-3
  frameRate(2);
  
  //Transparenz aka alpha beim scroll ->5-10
  // alpha bei questions 100-150
  background(0, 0,255,100); 
  
  //default ist textSize 100 -> Leading 100
  fill(255)
  textSize(80)
  textWrap(WORD)
  textFont("Futura")
  textLeading(32*live);
  textStyle(random([ITALIC,NORMAL]))
  // um eine Textbox zu machen,die einen Zeilenumbruch macht ("string",posx,posy,wW,wH)
  text(questions.repeat(random(16)),100,10,windowWidth/1.5,windowHeight);
  
}