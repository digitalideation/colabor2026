## Prozessdokumentation

###### Inputs

Detection Sketch

```javascript
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
 /* drawingContext.save();
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
  drawingContext.clip();*/


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

![P5L_detection_20260601222521](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Inputs/P5L_detection_20260601222521.png)

Audioreactive 3D (fftEase)

```javascript
// {"P5LIVE":{"name":"_audio_analysis_003","mod":1780352837627}} 

/*	
	_audio_analysis // cc teddavis.org 2019-24
	
	revamp of P5LIVE's Audio snippet, now built-in the background!
	add snippet to other sketches: CTRL + SHIFT + A 
*/

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	a5.ease = .075 // customize ease speed
}

function draw() {
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	orbitControl()
	lights()
	ambientLight(100)
	ambientMaterial(255, 127, 80)
	background(255, 255, 0)
	noFill();
	fill(255)
	
	let number = 6;
	let index = 0;
	for(let x = 0; x<number;x++){
		let posX = map(x, 0, 5, -width/4, width/4)
		for(let y=0; y<number; y++){
			let posY = map(y, 0, number, -width/4, width/4)
			for(let z = 0; z<number;z++){
				let posZ = map(z, 0, number, -width/4, width/4)
				if (index % 2 === 0){
					noStroke();
					cube(posX, posY, posZ, 20 +fftEase[index%fftEase.length], 1)
				}else{
					fill(0, 255, 255)
					trs(posX, posY, posZ, 20 + fftEase[index%fftEase.length], 2)
				}
				index++;
			}
		}
	}

}


function cube(x, y, z, size, rSpeed){
	push()
	translate(x, y, z)
	rotateY(rSpeed*frameCount*0.01)
	box(size)
	pop() 
}

function trs(x, y, z, size, rSpeed){
	push()
	translate(x, y, z)
	rotateY(rSpeed*frameCount*0.01)
	sphere(size)
	pop() 
}


/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

![P5L__audio_analysis_003_20260601222717](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Inputs/P5L__audio_analysis_003_20260601222717.png)

Machine Learning Sketch

```javascript
let libs = ['https://unpkg.com/ml5@1/dist/ml5.min.js','https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']
let strength = 0

let fx1 = 0
let fx2 = 0
let fx3 = 0

//// sandbox - start
H.pixelDensity(2)
s0.initP5()
P5.toggle(0)

src(s0)
	.modulate(noise(10000), () => fx1 *0.01)
	.modulateScale(osc(20), () => fx2)
	.add(src(s0).luma(0.65).scale(1.03), ()=> fx3) //diff.(voronoi(20, 2).luma(0.8).scale(0.99), () => fx3)
	.luma(() => 0.65 * a.fft[0]) //a.fft[0]
.out()
// sandbox - stop


let classifier;
 //replace with your link to Teachable Machine model
 // you can train your model here https://teachablemachine.withgoogle.com/train/image
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/WKsDnQcER/';

let video;
let label = 'loading...';
let confidence = 0;

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO, { flipped: true });
  video.size(width, height);
  video.hide();

  classifyVideo();

  textFont('monospace');
  textAlign(CENTER, CENTER);
}

function draw() {
	
  background(0);
  image(video, 0,0, width, height);

  // Label
  noStroke();
  fill(0, 180);
  rect(0, height - 100, width, 100);
  rectMode(CENTER);

  fill(255, 0, 255);
  textSize(48);
  //text(label, width / 2, height / 2);

  textSize(18);
  //text(nf(confidence, 1, 2), width / 2, height - 20);
  
  if (label == "Person"){ //zwei da für if statements braucht man 2 varianten?
  	circle(width/2, height/2, 100);
  	//strength = 0.02;
  	fx1 = 0;
  	fx2 = 0;
  	fx3 = 1;
  }else if (label=="key"){
  	rect(width/2, height/2, 200);
  	//strength = 0.01
  	fx1 = 0;
  	fx2 = 1;
  	fx3 = 0;
  }else {
  	triangle(width/2 -200, height/2+100,width/2, height/2 -100, width/2+200, height/2+100);
  	//strength = 0.05;
  	fx1 = 1;
  	fx2 = 0;
  	fx3 = 0;
  }
	
}

function classifyVideo() {
  classifier.classify(video, gotResult);
}

function gotResult(results) {
  label = results[0].label;
  confidence = results[0].confidence;
  classifyVideo();
}
```

![P5L_Machine Learning_20260601222450](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Inputs/P5L_Machine Learning_20260601222450.png)

###### Sketches

```javascript
// {"P5LIVE":{"name":"Glitch_Text","mod":1780353095728}} 

let txt = "coolio";

function setup() {
	createCanvas(windowWidth, windowHeight);
	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	a5.ease = .075 // customize ease speed
	textAlign(CENTER, CENTER);
}

function draw() {
	updateAudio();
	background(255, 0, 0);
	glitchy();


}

function glitchy(){
	textSize(180+fft[20]);
	textFont("Helvetica");
	let glitch = fftEase[20]*0.8;

	//Dunkel
	fill(60);
	text(
    txt,
    width/2 + random(-glitch, glitch),
    height/2 + random(-glitch, glitch)
  );

  //Mittel
	fill(140);
	text(
    txt,
    width/2 + random(-glitch, glitch),
    height/2 + glitch
  );

  // Haupttext
	fill(255);
	text(
    txt,
    width/2 + random(-glitch, glitch),
    height/2 + random(-glitch, glitch)
  );
} 

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

![P5L_Glitch_Text_20260601223135](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Sketches/P5L_Glitch_Text_20260601223135.png)

```javascript
// {"P5LIVE":{"name":"Hydra_integriert","mod":1780352592079}} 

//p5 = '2.0'

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox


src(s0).
modulateScale(osc(14))
.out(o0)
H.pixelDensity()
P5.toggle()
s0.initP5()

// sandbox


function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	circle(mouseX, mouseY, 100)
}

```

![P5L_Hydra_integriert_20260601222312](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Sketches/P5L_Hydra_integriert_20260601222312.png)

```javascript
// {"P5LIVE":{"name":"star_01","mod":1779817723593}} 

const elementY = 100;
var charset = "000000000---------000000000";
let font;


function setup() {
	createCanvas(windowWidth, windowHeight)
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	background(255, 255, 0)

	var elements = 10;
	fill(0)
	noStroke()

	textFont();
	textAlign(CENTER, CENTER);
	textSize(height / elementY);

	for(let y = 0; y < elementY + 1; y++) {
		for(let x = 0; x < charset.length + 1; x++) {

			let posY = map(y, 0, elementY, 0, height);
			let magX = map(sin(radians(posY * 0.5 + frameCount*0.5)), -1, 1, -width * 0.4, width * 0.2);
			let posX = map(x, 0, charset.length, -magX, magX);

			let selector = x;

			push()
			translate(width / 2 + posX, posY)
			text(charset[selector], 0, 0)
			pop()
		}
	}
}


/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

![P5L_star_01_20260526174843](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Sketches/P5L_star_01_20260526174843.png)

```javascript
// {"P5LIVE":{"name":"Textblöcke_001","mod":1780353152057}} 

let letters = ["C", "H", "A", "O", "T", "E", "N"];
let boxes = [];
let num = letters.length;

function setup() {
	createCanvas(windowWidth/3, windowHeight);
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	a5.ease = .075 // customize ease speed
	for (let i = 0; i < num; i++) {
    	boxes.push({
    	offset: i * 0.2,
    });
  }
}

function draw() {
	background(0); 
	updateAudio();
	let t = millis() * 0.001;

	// 1. Gewichte berechnen (Dynamik)
	let weights = []; 
	let total = 0;
	let bpm = 145;
	let freq = (bpm / 60) / 4; // 1 kompletter Zyklus pro Takt (4 Beats)

	
	for (let i = 0; i < num; i++) {
    	// Animation: wandert von oben nach unten
    	let wave = sin(TWO_PI * freq * t + i * 0.4);
		let w = map(wave, -1, 1, 0.3, 2);
    	// in 0..1
    	weights[i] = w; 
		total += w;
		
		
	 }

  // 2. Normieren auf Canvas-Höhe
	let y = 0;

	for (let i = 0; i < num; i++) {
		let h = (weights[i] / total) * height;
		let wave = sin(TWO_PI * freq * t*2);
		push();
		translate(width / 2, y + h / 2);
		
		// Hintergrund-Box
		let bg = wave > 0 ? 255 : 0;
		fill(bg);
		noStroke();
		rectMode(CENTER);
		rect(0, 0, width, h);

		// Text
		let letter = letters[i % letters.length];
		let fg = wave > 0 ? 0 : 255
		fill(fg);
		textAlign(CENTER, CENTER);

		// Basisgröße + Stretch nur in Y
		let baseSize = 650;
		textSize(baseSize);

		// Y-Verzerrung über scale
		let stretchY = h / 650; // 120 = Referenzhöhe
		scale(1, stretchY);

		text(letter, 0, 0);

		pop();

		y += h;
	}
	
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

![P5L_Textblöcke_001_20260601223232](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Sketches/P5L_Textblöcke_001_20260601223232.png)

```javascript
// {"P5LIVE":{"name":"Textblöcke","mod":1780353133263}} 

let letters = ["C", "R", "A", "Z", "Y"];
let boxes = [];
let num = letters.length;

function setup() {
	createCanvas(windowWidth/3, windowHeight);
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	a5.ease = .075 // customize ease speed
	for (let i = 0; i < num; i++) {
    	boxes.push({
    	offset: i * 0.2,
    });
  }
}

function draw() {
	background(0); 
	updateAudio();
	let t = millis() * 0.001;

	// 1. Gewichte berechnen (Dynamik)
	let weights = []; 
	let total = 0;

	for (let i = 0; i < num; i++) {
    	// Animation: wandert von oben nach unten
		let bpm = 145;
		let freq = (bpm / 60) / 4; // 1 kompletter Zyklus pro Takt (4 Beats)

		let wave = sin(TWO_PI * freq * t + i * 0.4);		
		let w = map(wave, -1, 1, 0.3, 2);
    	// in 0..1

    	weights[i] = w; 
		total += w;
		
		
	 }

  // 2. Normieren auf Canvas-Höhe
	let y = 0;

	for (let i = 0; i < num; i++) {
		let h = (weights[i] / total) * height;

		push();
		translate(width / 2, y + h / 2);

		// Hintergrund-Box
		let col = (i % 2 === 0) ? 255 : 0;
		fill(col);
		noStroke();
		rectMode(CENTER);
		rect(0, 0, width, h);

		// Text
		let letter = letters[i % letters.length];

		fill(col === 255 ? 0 : 255);
		textAlign(CENTER, CENTER);

		// Basisgröße + Stretch nur in Y
		let baseSize = 650;
		textSize(baseSize);

		// Y-Verzerrung über scale
		let stretchY = h / 650; // 120 = Referenzhöhe
		scale(1, stretchY);

		text(letter, 0, 0);

		pop();

		y += h;
	}
	
} 

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

![P5L_Textblöcke_20260601223213](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Sketches/P5L_Textblöcke_20260601223213.png)

```javascript
// {"P5LIVE":{"name":"tutorial particles","mod":1778981254756}} 

const particles_size = 10;
const resolution = 10;
const Max_Force = 10;
const Min_Force = 0;


let img;
let particles = [];

function preload() {
  img = loadImage('/data/images/5628_Ashinoko_Lake_-_Fuji_reflect_2.jpg.webp');
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	spawnParticles();
}

function draw() {
		background(40);
		//image(img, 0, 0);
		particles.forEach((particle)=>{
			particle.update();
			particle.draw();
		})
}

function spawnParticles(){
	for(let i = 0; i < width; i += resolution){
		for(let j = 0; j < height; j += resolution){
			let x = i/width*img.width
			let y = j/height*img.height
			
				const color = img.get(x, y);
			particles.push(new Particle(i + particles_size/2, j + particles_size/2, color));
		}
	}
}

class Particle{
	constructor(x, y, color){
		this.x = x;
		this.y = y;
		this.color = color;
		this.targetX = x;
		this.targetY = y;
	}
	update(){
		//get vectors for mouse, target and current position
		let mouseVector = createVector(mouseX, mouseY);
		let currentVector = createVector(this.x, this.y)
		let targetVector = createVector(this.targetX, this.targetY);
		
		//calculate vector from mouse to particle and its magnitude (distance)
		let fromMousetoParticle = p5.Vector.sub(currentVector, mouseVector);
		let distancetoMouse = fromMousetoParticle.mag();
		
		//calculate vector to target and calculate its magnitude
		let fromParticletoTarget = p5.Vector.sub(targetVector, currentVector);
		let distancetoTarget = fromParticletoTarget.mag();
		let totalForce = createVector(0, 0);
		
		
		//if mouse is within 100 pixels, calculate a repulsive force
		if(distancetoMouse < 100){
			let repulsionForce = map(distancetoMouse, 0, 100, Max_Force, Min_Force)
			fromMousetoParticle.setMag(repulsionForce);
			totalForce.add(fromMousetoParticle);
		}
		//if particle is not a target, calculate an attractive force
		if(distancetoMouse > 0){
			let attractionForce = map(distancetoTarget, 0, 100, Min_Force, Max_Force)
			fromParticletoTarget.setMag(attractionForce);
			totalForce.add(fromParticletoTarget);
		}
		//add the forces to the position
		this.x += totalForce.x;
		this.y += totalForce.y;
	}
	draw(){
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, particles_size);
	}
}
```



```javascript
// {"P5LIVE":{"name":"tutorial particles_webcam_001","mod":1778981307116}} 

const particles_size = 20;
const resolution = 20;
const Max_Force = 10;
const Min_Force = 0;


let img;
let particles = [];


function setup() {
	createCanvas(windowWidth, windowHeight)
	img = createCapture(VIDEO, { flipped: true });
	img.size(width, height);
	img.hide();
	img.elt.onloadeddata = () => {
		spawnParticles();
	};	
}

function draw() {
		background(40);
		//image(img, 0, 0);
		img.loadPixels();
		
		particles.forEach((particle)=>{
			particle.update();
			particle.draw();
		})
}

function spawnParticles(){
	for(let i = 0; i < width; i += resolution){
		for(let j = 0; j < height; j += resolution){
			let x = i/width*img.width
			let y = j/height*img.height
			
				const color = img.get(x, y);
			particles.push(new Particle(i + particles_size/2, j + particles_size/2));
		}
	}
}

class Particle{
	constructor(x, y, color){
		this.x = x;
		this.y = y;
		this.color = color;
		this.targetX = x;
		this.targetY = y;
	}
	update(){
		//get vectors for mouse, target and current position
		let mouseVector = createVector(mouseX, mouseY);
		let currentVector = createVector(this.x, this.y)
		let targetVector = createVector(this.targetX, this.targetY);
		
		//calculate vector from mouse to particle and its magnitude (distance)
		let fromMousetoParticle = p5.Vector.sub(currentVector, mouseVector);
		let distancetoMouse = fromMousetoParticle.mag();
		
		//calculate vector to target and calculate its magnitude
		let fromParticletoTarget = p5.Vector.sub(targetVector, currentVector);
		let distancetoTarget = fromParticletoTarget.mag();
		let totalForce = createVector(0, 0);
		
		
		//if mouse is within 100 pixels, calculate a repulsive force
		if(distancetoMouse < 100){
			let repulsionForce = map(distancetoMouse, 0, 100, Max_Force, Min_Force)
			fromMousetoParticle.setMag(repulsionForce);
			totalForce.add(fromMousetoParticle);
		}
		//if particle is not a target, calculate an attractive force
		if(distancetoMouse > 0){
			let attractionForce = map(distancetoTarget, 0, 100, Min_Force, Max_Force)
			fromParticletoTarget.setMag(attractionForce);
			totalForce.add(fromParticletoTarget);
		}
		//add the forces to the position
		this.x += totalForce.x;
		this.y += totalForce.y;
	}
	draw(){
		let x = floor(map(this.x, 0, width, 0, img.width));
		let y = floor(map(this.y, 0, height, 0, img.height));
		let i = (x + y * img.width) * 4;

		let r = img.pixels[i];
		let g = img.pixels[i + 1];
		let b = img.pixels[i + 2];

		fill(r, g, b);
		noStroke();
		ellipse(this.x, this.y, particles_size);
	}
}
```

![P5L_tutorial particles_webcam_001_20260601222559](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Sketches/P5L_tutorial particles_webcam_001_20260601222559.png)

```javascript
// {"P5LIVE":{"name":"typo_particles_beat","mod":1779817755672}} 

const particles_size = 10;
const resolution = 10;
const Max_Force = 10;
const Min_Force = 0;

let pullSize = 500



let img;
let particles = [];



function preload() {
  img = loadImage('/data/TYPO_PICS/Text_Images4.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	// a5.ease = .075 // customize ease speed
	spawnParticles();
}

function draw() {
		updateAudio()
		background(40);
		//image(img, 0, 0);
		particles.forEach((particle)=>{
			particle.update();
			particle.draw();
		})
}

function spawnParticles(){
	for(let i = 0; i < width; i += resolution){
		for(let j = 0; j < height; j += resolution){
			let x = i/width*img.width
			let y = j/height*img.height
			
				const color = img.get(x, y);
			particles.push(new Particle(i + particles_size/2, j + particles_size/2, color));
		}
	}
}

class Particle{
	constructor(x, y, color){
		this.x = x;
		this.y = y;
		this.color = color;
		this.targetX = x;
		this.targetY = y;
	}
	update(){
		//get vectors for mouse, target and current position
		let mouseVector = createVector(mouseX, mouseY);
		let currentVector = createVector(this.x, this.y)
		let targetVector = createVector(this.targetX, this.targetY);
		
		//calculate vector from mouse to particle and its magnitude (distance)
		let fromMousetoParticle = p5.Vector.sub(currentVector, mouseVector);
		let distancetoMouse = fromMousetoParticle.mag();
		
		//calculate vector to target and calculate its magnitude
		let fromParticletoTarget = p5.Vector.sub(targetVector, currentVector);
		let distancetoTarget = fromParticletoTarget.mag();
		let totalForce = createVector(0, 0);
		
		
		
		//if mouse is within 100 pixels, calculate a repulsive force
		if(distancetoMouse < amp*2){
			let repulsionForce = map(distancetoMouse, 0, amp, Max_Force, Min_Force)
			fromMousetoParticle.setMag(repulsionForce);
			totalForce.add(fromMousetoParticle);
		}
		//if particle is not a target, calculate an attractive force
		if(distancetoMouse > 0){
			let attractionForce = map(distancetoTarget, 0, 50, Min_Force, Max_Force)
			fromParticletoTarget.setMag(attractionForce);
			totalForce.add(fromParticletoTarget);
		}
		//add the forces to the position
		this.x += totalForce.x;
		this.y += totalForce.y;
	}
	draw(){
		fill(this.color);
		noStroke();
		ellipse(this.x, this.y, particles_size);
	}
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

![P5L_typo_particles_20260517224118](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Sketches/P5L_typo_particles_20260517224118.png)

```javascript
// {"P5LIVE":{"name":"TYPOGRAFIE_TUTORIAL","mod":1780352642583}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10;
	let words = ["187", "acab", "zzzz", "ZZZZ", "yolo", "yala", "boring", "mmhh", "hihi", "xDxD", "uff", "mit alles"];
	let sine = floor(5*sin(frameCount*0.1)+5) // floor rundet es auf ganze Zahlen
	let rand = random(words)
	
	frameRate(2);
	
	background(255, 0, 0);
	fill(0);
	textSize(60);
	textWrap(CHAR) //oder CHAR, random() um zu veràndern []
	textFont('monospace');
	textAlign(LEFT);
	textStyle(random([BOLD]));
	textLeading(70);
	text(words[sine].replace(/a./g,"0").repeat(100), //.repeat(50), .replace(/[ouiea], "0")
	100, 20, //Positionierung
	windowWidth*0.9, windowHeight); //Textrahmen erstellen
}

```

![P5L_TYPOGRAFIE_TUTORIAL_20260601222402](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Inputs/P5L_TYPOGRAFIE_TUTORIAL_20260601222402.png)

```javascript
let font;
let i = 0;
let p = 0;

let words = ["BOOM","XOXO"];
let colors = [0, 255];

function preload() {
  font = loadFont('/data/Disclaimer-Plain.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);
}

function draw() {
  background(255, 0, 0);

  textFont(font);
  fill(colors[p]);
  textSize(1200);
  textAlign(CENTER, CENTER);

  text(words[i], width / 2, height / 2- 242);

  i++;


  if (i >= words.length) {
    i = 0;
  }
  p++;

  if (p >= colors.length) {
    p = 0;
  }
}
```

![P5L_TYPO_COOLER_20260601231436](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Sketches/P5L_TYPO_COOLER_20260601231436.png)

```javascript
let txt = "BOOM";
let spacing = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(200);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0,0,255);

  let totalWidth = 0;

  for (let char of txt) {
    totalWidth += textWidth(char) + spacing;
  }

  let x = width/2 - totalWidth/2;
  let y = height/2;

  for (let char of txt) {
    text(char, x, y);
    x += textWidth(char) + spacing;
  }
}
```

![P5L_Typo_Spacing_20260601231515](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/Sketches/P5L_Typo_Spacing_20260601231515.png)
