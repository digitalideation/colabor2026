// {"P5LIVE":{"name":"new_028","mod":1780310268726}} 

// {"P5LIVE":{"name":"first_scene_001","mod":1780240676090}} 

let meAskyou = ["The history of drum and bass and the windrush generation.",
"Did you hear about the windrush generation before?",
"What does it have to do with drum and bass?",
"And how was drum and bass being formed in the UK? "]
let questions = meAskyou.join(' ')

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // live wechselt zwischen 0 und 7 — steuert das textLeading (Zeilenabstand)
  let live = (frameCount%6)
  // frameRate: 2 fps → langsamer Wechsel, gut für Lesbarkeit
  frameRate(2);
  
  background(0, 0, 255, 150); 
  fill(255)
  textSize(60)
  textWrap(WORD)
  textFont("Satoshi")
  textLeading(32*live);
  textStyle(random([ITALIC,NORMAL]))
  text(questions.repeat(random(16)),100,10,windowWidth/1.1,windowHeight);
	
}
