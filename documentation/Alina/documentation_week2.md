## Mittwoch, 6. Mai. 2026 Workshop mit Andrea Zaccuri
![](attachment/0fad2a948cae92249ea2ea58bb213709.jpeg)
```javascript
noise(5, 0.2).out();
//umso kleiner das erste Argument-> umso mehr Zoom
//noise(scale, Geschwindigkeit)
```
![](attachment/556ae02b489838ff16b041577108908e.png)

Der Splitscreen wird auch Buffer genannt.

```jaa
osc(20).out(o1)
noise(5,0.2,0.9).out(o2)
render()
//src(o1).rotate(0.5).out(o0)

```

![](attachment/34315d4f9327783e2ca310306d6045f7.png)


Man kann die Webcam als Quelle brauchen:

```javascript
s0.initCam()
src(s0).out()

```

Oder man kann Bilder vom Desktop oder einer Webseite laden:

```javascript
s0.initImage("https://upload.wikimedia.org/wikipedia/commons/2/25/Hydra-Foto.jpg")
src(s0).out()
```
![](attachment/f619de7506b9547fe7669f3e665ccc9d.png)
Wenn wir mehr als eine Quelle (src) verwenden wollen, müssen wir die Outputs benennen (o0,o1,o2,o3).

```javascript
render(o1) // render wird ohne Punkt eingesetzt, um zwischen verschiedenen Quellen zu springen.

osc(5,0.1,0.4).out() // .out(o0) und .out() ist das Gleiche

```

![](attachment/1f6f77d533f9eb98287fd9ce60990fda.png)
## transformations

##### input (src, image, video, function) -> transform (z.B .rotate(), .pixelate()) -> outpout (.out())

.pixelate(x,y) Pixel auf der X-Achse oder Y-Achse (1=1 Pixel)

.kaleid(4) -> Zahl bestimmt die Seiten des Kaleidoskop

.scrollX(a,b) oder .scrollY() -> a=0.5, b=speed



Man kann sehr viele Transformationen nacheinander patchen.



.invert() -  is a boolean-> yes or no (0 or 1) 

.brightness()

.contrast(1.6) default

.saturate(), 0 (keine Sättigung), 1(normal), grössere Zahlen -> gesättigter

.luma



```javascript
osc(30,0.2,30)
  .modulate(src(o0).scale(0.95), 0.15)
  .out(o0)
```
![](attachment/2688535bf1014ee644a1c308e062c22f.png)


```javascript
osc(40).add(noise(3)).out()
```


![](attachment/4614ac584441c0e5e8663adadd20b1d3.png)
Es sieht ein wenig wie Schlangen-Optik aus.

modulate bestimmt, wie sich die Pixel bewegen:
```javascript
osc(20,0.1,2).out(o0)
noise(3).pixelate(30).out(o1)

osc(20,0.1,2).modulatePixelate(noise(3), 30).out(o2)

render(o2)
```

output 1
![](attachment/05cbe2f7eb02491d0a2bb9867e684409.png)

Output 2 pixelate noise und oscillator ->
![](attachment/85d3a16622f4bc2c6456e8d26299c998.png)



```javascript
shape(999).color(1,0,0).scroll(0,0.1)
  .add(shape(999).color(0,0,1).scroll(0.1,0))
  .add(shape(999).color(0,1,0).scroll(-0.1,0)).out(o0)

src(o0)
.scale(5)
.add(noise(3)).out(o1)

src(o1)
.pixelate(20)
.kaleid(8).out(o2)

render(o2)
```

Man kann mehrere Effekte kombinieren und neue Outputs kreieren, um von da aus diesen wiederum als Input zu brauchen.
![](attachment/7701c3ee3a5717fd1ff3799bb1d8cb80.png)


```javascript
s0.initImage("https://www.indiewire.com/wp-content/uploads/2025/06/MMDSPAW_EC001.jpg?w=2790&h=1508&crop=1")


osc(6).modulate(src(s0),1).out(o0)

```

![](attachment/68167ae5ade66a3a33971954749de41c.png)

```javascript
let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
osc(13,0.01,20).modulate(noize(0.3), () => a.fft[1] * 0.3) // mids

  .colorama(0)
  .pixelate(0.01)
  .out(o0)


// sandbox - end

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	//clear()
	
	circle(mouseX,mouseY,100)
	
}
```
![[Bildschirmaufnahme 2026-05-06 um 14.05.04.mov]
![](attachment/c5c45d1cf6763da251aaa88ae17bb416.mov)

![](attachment/cee9e0ab0775a257fe6207c6934984c9.png)
![](attachment/f619de7506b9547fe7669f3e665ccc9d.png)


![](attachment/a15985ae9c6cfc840ff0083e62aa4502.png)

![](attachment/f673f11c9efc825eb35f82dc967c9c23.png)


### 07.Mai 2026 Input mit Jasmin Meerhof

Concrete Poetry


```javascript

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background(230);
	textFont("mono")
	//Pixelwert
	textSize(100);
	color(0);
	//BOLD,ITALIC,BOLDITALIC
	textStyle(BOLD);
	// WORD Zeilenumbruch nach ganzem Wort, CHAR Zeilenumbruch no matter what
	textWrap(WORD);
	//LEFT linksbündig, RIGHT rechtsbündig, CENTER 
	textAlign(CENTER);
	//default ist textSize 100 -> Leading 100
	textLeading(120);
	// um eine Textbox zu machen,die einen Zeilenumbruch macht ("string",posx,posy,wW,wH)
	text("what the hack,there's a text box yay that's so much easier",100,100,windowWidth/1.2,
	windowHeight);

}
```

![](attachment/bc1ca584d39b48e5e34e7a0edfa84cd0.png)

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background(230);
	textFont("mono")
	//Pixelwert
	textSize(100);
	color(0);
	//BOLD,ITALIC,BOLDITALIC
	textStyle(BOLD);
	// WORD Zeilenumbruch nach ganzem Wort, CHAR Zeilenumbruch no matter what
	textWrap(WORD);
	//LEFT linksbündig, RIGHT rechtsbündig, CENTER 
	textAlign(CENTER);
	//default ist textSize 100 -> Leading 100
	textLeading(120);
	// um eine Textbox zu machen,die einen Zeilenumbruch macht ("string",posx,posy,wW,wH)
	text("hi ".repeat(1000),100,100,windowWidth/1.2,
	windowHeight);

}
```

![](attachment/800d27320604a5cd83e32a6486942f6c.png)


![](attachment/f6f47a59350b1f2463be99d579f5d3cf.png)
![](attachment/c0c1a9b6cfa223e189993922a59c537c.png)

![](attachment/4d2670b7a03df9fc46c3db7195291f79.png)

![](attachment/7f6c7716716d54ebf1ff145cc260a593.png)


![](attachment/de459e500636bb1bb680c61d14a36214.png)


![](attachment/45c8d232a4a20f5ea26193ee8e4583f9.png)

![](attachment/39ad47a029ec434346a9497ba1569075.png)



![](attachment/e8ec18c6220925837de889311ff310ca.png)

![](attachment/73ff3db2ad823934571604b6d24585b1.png)


![](attachment/7111163f43719565866a866f07bb4507.png)

### Freitag, 08.Mai.2026 Machine Learning mit Paulina Zybinska

```java
// libraries laden, um Hydra brauchen zu können, 
let libs=["https://unpkg.com/ml5@1/dist/ml5.min.js", 'includes/libs/hydra-synth.js', 'includes/libs/hy5.js']

let strength=0  //Variabel, um die Stärke des Luma-Effekts zu beeinflussen

//sandbox - start
H.pixelDensity(2);
s0.initP5()
P5.toggle(0)


src(s0).modulate(noize(100),()=>strength) //()=>um die Funktion zu erkennen
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
  }else if (label == "pen"){
  	fill(255,0,0)
  	noStroke()
  	rect(width/2,height/2,100)
	strength=0.1
  }else{
  	fill(0,255,0,100)
  	triangle(width/2,height/2,width/2+200, height/2 -200,width/2+400,height/2);
  	strength= 0.5
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
```

Wir haben bei Paulina mit Teachable Machine einen Trainingsdatensatz gemacht, jedoch war das Ganze noch nicht so zuverlässig bei so wenigen Trainingsbildern. So hat mich Teachable Machine ab und zu wegen der Hand als Pen erkennt. Ausserdem haben wir mit Body Pose sowie gearbeitet.


![](attachment/d62ea84646f42aa594d87dc66b005d91.png)

![](attachment/810c57c1ea47789ed6882844a92105b6.png)

![](attachment/3bb67ebe65d595452ad2d55a9fdae2ad.mov)

![](attachment/d0a5eb4ee76ed277e3425548113964df.mov)


```jaa
/ {"P5LIVE":{"name":"new_007","mod":1779210338203}} 

let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];
let video;
let state = 'starting...';
let handPose;
let hands = [];
let options = { maxHands: 2, flipHorizontal: true };
let pScale = 20

let distTip=0 //Variable für Fingerabstand
let distTip2=0 //defining the variable 

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
  //image(video,0,0); das Video ist eigentlich da, aber wird nicht gezeichnet
  
  //Distanz zwischen zwei Fingern berechnen lassen (distance->)


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
  
	if (hands.length != 0){

		distTip = dist(hands[0].keypoints[4].x, hands[0].keypoints[4].y,

	 				hands[0].keypoints[8].x, hands[0].keypoints[8].y)
	 	//if (hands[1]) {distTip2= dist(hands[])

		stroke(255)

		line(hands[0].keypoints[4].x, hands[0].keypoints[4].y,

		hands[0].keypoints[8].x, hands[0].keypoints[8].y)


		if (distTip < 30) {
		circle(hands[0].keypoints[8].x, hands[0].keypoints[8].y, 100)

		}	

	}
 
  	
  
  	
 
  
  
   //4-> thumb, 8-> index-finger (hand pose index)
   
 
}

function gotHands(results) {
  hands = results;
}
```

![](attachment/ac1a8939dfa1bb16031992a610d60c72.png)

```javascript
/ {"P5LIVE":{"name":"new_008","mod":1779210359885}} 

let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js'];

let video;
let detector;
let detections = [];

function preload() {
  // COCO SSD model — 80 common objects
  // https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts
  detector = ml5.objectDetection('cocossd');
}

function setup() {
  createCanvas(960, 540);
  background(0);

  video = createVideo(
    'https://raw.githubusercontent.com/digitalideation/colabor2026/main/2026_05_08-Paulina_Zybinska/code/objectDetection/assets/rainyday2.mp4'
  );
  video.size(width, height);
  video.hide();
  video.loop();
  video.volume(0);

  detector.detectStart(video, gotDetections);
}

function gotDetections(results) {
  detections = results;
}

function draw() {
  background(0);

  let scaleX = width / video.elt.videoWidth;
  let scaleY = height / video.elt.videoHeight;

  //clip path made of all detection rectangles
 drawingContext.save();
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
  drawingContext.clip();


  image(video, 0, 0, width, height);

  drawingContext.restore();

  // outlines + labels on top
  for (let i = 0; i < detections.length; i++) {
    let d = detections[i];
    let x = d.x * scaleX;
    let y = d.y * scaleY;
    let w = d.width * scaleX;
    let h = d.height * scaleY;

    stroke(0, 255, 0);
    strokeWeight(2);
    blendMode(DIFFERENCE)
    fill(255)
    rect(x, y, w, h);

    noStroke();
    fill(255);
    textSize(24);
    text(d.label, x + 10, y + 24);
  }
  
  blendMode(BLEND)
}
```
![](attachment/50137d5c1b548a89dd9e7f5f171e912c.png)