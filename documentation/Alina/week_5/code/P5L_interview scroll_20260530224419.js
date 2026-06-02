// {"P5LIVE":{"name":"interview scroll","mod":1780181059590}} 

let scrollText = ` "Has it affected the way you feel connected to the country?
Oh, yeah, 100%, it has. And it’s very strange as a child, 
when I was at school, and it was a very white school, I remember 
going to school and people used to say to me, your Dad needs 
to go back to where he come from. And I remember I never ever 
told my Mum and Dad, but I used to be really frightened as a kid 
like, oh my gosh, what if they come and take my Dad and then as I 
got older, I was like, gosh, how irrational that I was even thinking 
that and then to be like, fast forwarding, like, it really nearly 
was a possibility. Yeah, I don’t feel uhm.  No, I don’t feel very British, 
if I’m honest. I don’t feel uhm because I think I’ve seen that it can be 
taken away really easily. And I don’t feel, especially the government, 
as it is now, I don’t think it is inclusive. I think it is hostile. So 
yeah, it’s a funny way to be it’s, it’s hard because my partner, he was 
born in Germany, and he’s white, and I, we laugh because he’s, I say, like 
you, you stand a better chance from someone that’s come in to this [country], 
but it feels like he’s better belonging here than what I am. And I was born here. 
It’s like, I feel like almost our feelings are switched. You know, like, I feel 
like, I’m not really settled here. Not that I don’t belong here. But I don’t 
feel settled here. Like, it doesn’t feel. Like feeling safe, or secure?
Yeah maybe, but I just, I don’t know. Maybe it’s a bit of resentment. Maybe 
I don’t really like it. Like how this is all played out. Maybe that’s a bit 
of a point as well." `;

let meAskyou = ["Did you hear about the windrush generation before?",
"What does it have to do with drum and bass?",
"And how was drum and bass being formed in the UK?"]
let questions = meAskyou.join(' ')

let yPos=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  setupAudio(true) // if empty, use 'a5.' before audio vars below
 a5.ease = .075 // customize ease speed, lower values make it smoother
 // Startet den Text am unteren Bildschirmrand
  yPos = height;
}

function draw() {
	
 updateAudio()
 let live= (frameCount%10)
	//frameRate -> 
 let blueTone = map(fftEase,0,0,255)

  background(0, 0,255,5);
  
  //default ist textSize 100 -> Leading 100
	textLeading(32*live);
	// um eine Textbox zu machen,die einen Zeilenumbruch macht ("string",posx,posy,wW,wH)
	text(questions.repeat(random(20)),100,100,windowWidth/1.2,	windowHeight);
  
  textAlign(LEFT, TOP); // TOP hilft bei der vertikalen Ausrichtung
  fill(255);
  textSize(80);
  textWrap(WORD);
  textStyle(random([ITALIC,NORMAL]))
  textLeading(95); // Verhindert, dass die großen Zeilen ineinanderlaufen
  

  text(scrollText, 100, yPos, windowWidth - 200, 10000);
  
 
  
 // Geschwindigkeit des Scrollens, umso tiefer, desto langsamer
  yPos -= 1; 
  
//zurücksetzen
  if (yPos < -2800) {
    yPos = height;
  }
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/