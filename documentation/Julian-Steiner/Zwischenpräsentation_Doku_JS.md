# Zwischenpräsentation

Snippet 1:

```javascript
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
```

![P5L_typo_particles_beat_20260526174915](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 2/images/P5L_typo_particles_beat_20260526174915.png)

Snippet 2:

```javascript
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

```

![P5L_star_01_20260526174843](/Users/juliansteiner/Documents/Studium/2BA/Creative Coding/Week 3/images/P5L_star_01_20260526174843.png)