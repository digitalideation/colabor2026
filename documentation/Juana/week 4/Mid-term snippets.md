# Mid-term snippets 18.5

### Snippet1

```javascript
// {"P5LIVE":{"name":"Snippet1","mod":1779127321995}} 


function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let frase = ("blablabla");
		
	textFont('Arial', 50)
	// textWrap(NORMAL)
	fill(255)
	stroke(0,0,255)
	
	//Move the frase with the sin and cos funtion and also with the mouse
	text((frase),mouseX + sin(frameCount*0.020)*250, mouseY - cos(frameCount*0.010)*250)
}
```

![[P5L_Snippet1_20260518180201.png]]
### Snippet 2 -Hydra screen

```javascript
let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start

// select a window to share
s0.initScreen()
src(s0)
  .color([1,0,0,1],[0,1,0,10],[0,0,1,1])
  .colorama([0.005,0.33,0.66,0.55].fast(1))
  .modulateScale(osc(1,1,-1)
  .kaleid(10)
  //.scale(1),1,0
  )
  .out(o0)

// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {

}
```

![[Snippet 2- Hydra.png]]

### Snippet 3

```javascript
// {"P5LIVE":{"name":"Snippet 3","mod":1779127995378}} 

//Array:define the words to display
let texts = ["i have", "doubts", "dilemma", "capital", "our", "time", "unnaming", "future"];
let rain = [];
let textSizeValue = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(textSizeValue);
  textFont('arial');
  
  // Generate "raindrop" objects, each with a random position, word, and falling speed
  for (let i = 0; i < 100; i++) {
    rain[i] = {
      x: random(width),
      y: random(-height, 0),
      text: random(texts),
      speed: random(1, 5)};
  }
}
function draw() {
  background(255, 10); 
  fill(0, 0, 255);  

// Loop: move the "drops" down, and reset them at the bottom
  rain.forEach(rain => {
    text(rain.text, rain.x, rain.y);
    rain.y += rain.speed;
    if (rain.y > height) 
    {rain.y = random(-200, 0);}
  })
}

```

![[P5L_Snippet 3_20260518181315.png]]
