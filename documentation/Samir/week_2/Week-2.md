# Week 2

## Day 1

install P5live offline

cd /Users/stash/Documents/P5LIVE 

npm install

npm start

(to end) control + C



control + shift + a 

--> to include sound measure thingy

## Day 2

 **missed the morning**

How to create buttons and interactions in P5Live



##### Afternoon

Created ways of drawing and moving with trigonomoteire and playing around with different ways of numbers 

![P5L_new_001_20260505135727](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/P5L_new_001_20260505135727.png)

It looks like the meal from the ovie Ratatouille 

![151008_1-809601338](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/151008_1-809601338.jpg)

```javascript
// {"P5LIVE":{"name":"new_001","mod":1777989447376}} 

let number = 5
let speedX

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	
	let speedX = sin(frameCount *.02)*100 + sin(frameCount *.08)*50
	let speedY = cos(frameCount *.02)*100 + cos(frameCount*.02)* 50
	
	fill(random (255),random (255),0)
	ellipse (width/2+speedX, height/2 +speedY, 100)
	
}
```



I tried to play around with the microphone here by ledding the sound decide on the movement or also the colours (letting the teacher speak for about 1')

![P5L_talking_star_20260505140522](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/P5L_talking_star_20260505140522.png)

```javascript
// {"P5LIVE":{"name":"talking_star","mod":1777989922175}} 

let number = 5
let speedX

function setup() {
	createCanvas(windowWidth, windowHeight)

	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()

	let speedX = sin(frameCount * .02) * 20 + sin(frameCount * .01) * ampEase*40
	let speedY = cos(frameCount * .02) * 20 + cos(frameCount * .01) * ampEase*40

	fill(random(1255), random (255), 255)
	ellipse(width / 2 + speedX, height / 2 + speedY, 100)


}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

We played around with linedrawing

![P5L_new_001_20260505135134](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/P5L_new_001_20260505135134.png)

```javascript
// {"P5LIVE":{"name":"new_001","mod":1777989094987}} 

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
	stroke(0);
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()


	let pen1 = map(sin(frameCount * .075), -1, 1, 50, 10)
	let differentX = map(mouseX, 0, width, 0, width / 2)
	// ellipse(width/2 + cos(frameCount*.025)*200, height/2 + sin(frameCount*.025)*200, 100)
	// ellipse(mouseX, height / 2 + sin(frameCount*0.025)*200, 20)
	if(mouseIsPressed) {
		stroke(random(255), 255, random(255));
		strokeWeight(pen1);
		line(prevX, prevY, mouseX, mouseY);
		// ellipse(mouseX,mouseY, pen1, pen1)
		// stroke(255,random (255),random (255))
		// ellipse(mouseX-50, mouseY+50, pen1, pen1)

	}
	prevX = mouseX;
	prevY = mouseY;

}

function keyPressed() {
	if(key == 'S') {
		save('drawing.png')
	}
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```



And including the keyboard I tried to to a sort of colour panel for the whole screen which didn't turn out the way I'd like it to have you can see the left and upper frames beign quite colourful while the rest is "just" yellow.



I tried using the map function which we got introduced quickly and I also saw it on the P5js tutorial videos.

![P5L_type_drawing_20260505152542](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/P5L_type_drawing_20260505152542.png)

```
// {"P5LIVE":{"name":"type_drawing","mod":1777994742730}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	map(mouseX, 0, windowWidth, 0, 255)
	map(mouseY, 0, windowHeight, 0 ,255)
	textSize(80);
	fill(255);
	background(200);
}

function draw() {
	let red = mouseX
	let green = mouseY
	let blue = 100
	let moveX = sin(frameCount * .02) * 300
	let moveY = sin(frameCo
	Punt * .01) * 300
	strokeWeight(4)
	stroke(0);
	fill(red, green, blue);
	// text(key, width / 2 + moveX, height / 2 + moveY); // Draw at coordinate (20,75)
	text(key, mouseX, mouseY)
}
```

## Day 3

w. Andrea

Hydra introduction

combining

Tring out in hydra with different sources and 

![Bildschirmfoto 2026-05-06 um 10.36.11](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/hydra/Bildschirmfoto 2026-05-06 um 10.36.11.png)

```javascript
  .pixelate(5).modulate (src(o0).scale(5),.005)
  .modulateKaleid(osc(11,0.5,0),50)
  .scale(0.1,0.3)
  .modulate(noise(5,0.1))
  .mult(solid(1,1,1))
  .out(o0)
src(o0).scrollY(1,.05).out(o1)


render(o1)
```

![Bildschirmfoto 2026-05-06 um 11.24.51](/Users/stash/Desktop/Bildschirmfoto 2026-05-06 um 11.24.51.png)

```javascript
  src(o0).modulate(noise(15,.5).rotate(.5)).out(o1)
src(o1).scrollY(1,.1).out(o2)

render(o2)
```

![Bildschirmfoto 2026-05-06 um 11.30.48](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/hydra/Bildschirmfoto 2026-05-06 um 11.30.48.png)

```javascript
  src(o0).modulateKaleid(noise(2,.1).rotate(1.5)).out(o1)
src(o1).invert().out(o2)

render(o2)
```

![Bildschirmfoto 2026-05-06 um 13.02.00](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/hydra/Bildschirmfoto 2026-05-06 um 13.02.00.png)

```javascript
  .kaleid(time).out(o0)
  src(o0)
.scale (0.1)
  .diff(o0)
  .rotate(0.25)
  .out(o1)

src(o1)
  .modulateScale(noise(10000),0.5)
  .invert()
  .out(o2)

render(o2)
```

![Bildschirmfoto 2026-05-06 um 13.10.54](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/hydra/Bildschirmfoto 2026-05-06 um 13.10.54.png)

```javascript
src(s0)
  .invert(-.5)
  .kaleid(3.14).modulate(noise(6,1))
  .scale(0.1)
  .out(o0)
```

![Bildschirmfoto 2026-05-06 um 13.17.15](/Users/stash/Desktop/Bildschirmfoto 2026-05-06 um 13.17.15.png)

```javascript
s0.initCam()
src(s0)
  .invert( () => a.fft[0])
  .kaleid(0.1).modulate(noise(6,1))
  .scale(1)
  .out(o0)
```

Trying to connect hydra to P5LIVE

![Bildschirmfoto 2026-05-06 um 13.42.16](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/Bildschirmfoto 2026-05-06 um 13.42.16.png)

```javascript
// {"P5LIVE":{"name":"moving_ellipse","mod":1778074860868}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)

	.modulate(voronoi(100,100))
	.out()
// sandbox - end

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 102, 0)
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()

	fill(255, 100, 255, 30)
	circle(width / 2 + sin(frameCount * .7) * 300, height / 2 + cos(frameCount * .7) * 250, 60)
	circle(width / 2 + sin(frameCount * .7) * 500, height / 2 + cos(frameCount * .7) * 50, 60)

	}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

## Day 3

w. Jasmin

working with text

trying something new with combining hydra with a previous created code P5

![Bildschirmfoto 2026-05-07 um 10.17.42](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/Bildschirmfoto 2026-05-07 um 10.17.42.png)

```javascript

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)

	.modulate(noize(1.5,.5))
	.out()
// sandbox - end

let dimX = 453
let dimY = dimX
let num = 17
let reduction = dimX / num
let posX = 0
let posY = 0

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(255, 255, 200)
	rectMode(CENTER)
	angleMode(DEGREES)
	posX = width * 0.5
	posY = height * 0.5
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing

}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	background(100, 100, 255)
	noFill()
	strokeWeight(2)
	stroke(0)
	let count = 20
	for(let i = 0; i < count; i++) {
		let dimension = width / count
		let posX = dimension / 2 + (i * dimension)
		for(let j = 0; j < count; j++) {
			let posY = dimension / 2 + (j * dimension)
			tmcs(posX, posY, dimension, 10, 400)

		}

	}


}




// this function draws squares at position
// posX and posY, and they moce randomly
// a tiny bit
function tmcs(x, y, dim, num, speed) {

	let dimension = dim + sin(frameCount * speed * 10)
	//num = 10
	reduction = dimension / num

	for(let i = 0; i < num; i++) {
		let offsetX = random(7)
		let offsetY = random(7)
		stroke(255, 0, 255)
		strokeWeight(3)
		square(
			x + offsetX,
			y + offsetY,
			(dimension) - (reduction * i)
		)
	}
}
```

creating Text and playing around with the postition and the way of reading it

![P5L_new_002_20260507112828](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/P5L_new_002_20260507112828.png)

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)

}

function draw() {
	background(230)
	fill(10)
	textSize(100)
	textWrap(WORD)
	textFont('monospace')
	textAlign(LEFT, CENTER)
	textStyle(BOLDITALIC)
	textLeading(-40)
	text("having trouble reading this?", 100, 100, windowWidth / 1.5, windowHeight)
}
```

![P5L_textdraft_001_20260507130551](/Users/stash/Library/CloudStorage/OneDrive-Persönlich/03_DMI/4. Semester/CO_Creative_Coding/documentation/week_2/P5L_textdraft_001_20260507130551.png)

```
```

```javascript
function setup() {
	createCanvas(windowWidth, windowHeight)

}

function draw() {
	let live = frameCount % 100;
	let words = ["hmm", "lecker", "schmecker"]

	frameRate(10)
	background(0, 255, 0)
	fill(255, 0, 0)
	textSize(100)
	textWrap(CHAR)
	textFont('monospace')
	textAlign(CENTER)
	textStyle(ITALIC)
	textLeading(40 * (live / 50))
	text(words[0].repeat(100), 10, 10, windowWidth / 1.1, windowHeight)
}
```