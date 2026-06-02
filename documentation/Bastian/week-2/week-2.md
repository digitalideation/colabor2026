# Day 1 & 2

## 04. + 05. Mai 2026

I was sick



# Day 3

## 06.05.2026

On this day we got a hydra input and experimented with it.



```javascript
let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy
s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
	.modulateScale(noize(3))
	.invert()
//shape(10). scroll(1, 0,)
	.out()
// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	//clear()
	circle(mouseX, mouseY, 300)
}
```

![](C:\Users\basti\OneDrive\Desktop\Invers\Scans\Bilder\Screenshots 1\Screenshot 2026-05-21 141402.png)

# Day 4

## 07.05.2026

We experimented with text in P5live

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
		let live = frameCount%4;
	let words = ["x x x x x x", "o o o o o o", "w w w w w w", "z z z z z z", "s s s s s s"];
	let rand = random(words)
	let sine = floor(5*sin(frameCount/10)+5)
	
	// make create letter spacing from sinus (wave form)
	let number = sin(frameCount) * 10

	// generate string for input from changing sinus number
	let letterSpacing = number + "px"
	// apply changing letter spacing 
	select('canvas').elt.style.letterSpacing = letterSpacing
	
	frameRate(10)
	background(0, 100, 100, 80)
	fill(150);
	textSize(50)
	textWrap(CHAR)
	textFont("monospace")
	textAlign(LEFT)
	textStyle(NORMAL)
	textLeading(30)
	text(words[live].repeat(500),50, 50,
	windowWidth/1, windowHeight)
}
```

![](C:\Users\basti\OneDrive\Desktop\Invers\Scans\Bilder\Screenshots 1\Screenshot 2026-05-18 133057.png)

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10;
	let words = ["rain" , "drops" , "falling"];
	let rand = random(words)
	let sine = floor(5*sin(frameCount/10)+5)
	
	frameRate(5)
	background(220)
	fill(random(0,255), random(0,255), random(0,255));
	textSize(15)
	textWrap(random([CHAR,WORD]))
	textFont("monospace")
	textAlign(LEFT)
	textStyle(random([NORMAL,ITALIC]))
	textLeading(50)
	text(rand.repeat(1000),100, 50,
	windowWidth/1.2, windowHeight)
	

}
```

![](C:\Users\basti\OneDrive\Desktop\colabor\week-2\images\Screenshot 2026-05-21 142759.png)

# Day 5

## 08.05.2026

With the help of teachable machine we created a code in P5live. This code used the camera of our Laptop and changed forms ( circle, square & triangle) depending of what was visible on the video.

```javascript
//https://teachablemachine.withgoogle.com/models/-TZs74Q9n/ Teachable machine

let libs = ["https://unpkg.com/ml5@1/dist/ml5.min.js",'https://unpkg.com/hydra-synth', 
'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

let fx1 = 0
let fx2 = 0
let fx3 = 0
//sandbox - start



H.pixelDensity(1)
s0.initP5()
P5.toggle(0)

src(s0)
.modulate(noize(1000), () => fx1 * 0.01)
.modulateScale(osc(20), () => fx2)
.add(src(s0). luma(0.9).scale(1.03), () => fx3)
//.luma(() => 0.2 * a.fft[0])

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
```

![](C:\Users\basti\OneDrive\Desktop\colabor\week-2\images\Screenshot 2026-05-21 143622.png)
