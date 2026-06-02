# week 2

#### 04.05.26 - Ted Davis

https://dusie.ch/2526/colabor/

##### Audioreactive circle

```javascript
// {"P5LIVE":{"name":"Audioreactive circle","mod":1778008098409}} 

// ctrl + shift + a = audioreactive snippet

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0, 0, 255)

	setupAudio(true) // global vars
	// a5.ease = .1 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	circle(mouseX, mouseY, ampEase*10)
	
	
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```

![P5L_Audioreactive circle_20260505190818](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Audioreactive circle_20260505190818.png)

##### Circle growing

```javascript
// {"P5LIVE":{"name":"Circle growing","mod":1778008235568}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	// background(0, 15, 255,15) // r, g, b, a
	fill(frameCount %  255 ,255,0 )
	circle(mouseX, mouseY, frameCount % 200)
	
	print(frameCount % 200) //BIGnumber % (limited by) smallnumber
}
```

![P5L_Circle growing_20260505191035](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Circle growing_20260505191035.png)

##### How to import libreries

Let libs =

```javascript
// {"P5LIVE":{"name":"How to import libreries","mod":1778579750524}} 

// How to import libreries 
let libs = ['https://tetunori.github.io/BMWalker.js/dist/v0.6.1/bmwalker.js', '']

// Create biological motion walker instance
const bmw = new BMWalker();

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	
	// Get array of the current marker coordinates 
	const walkerHeight = height / 2;
	const markers = bmw.getMarkers(walkerHeight);
	
	
	translate (width / 2, height / 2) // move 0,0 origin 
	// translate (mouseX, mouseY)
	
		// Draw each markers
	markers.forEach((m) => {
	  circle(m.x, m.y, 60);
	});
	}
```

##### ![P5L_How to import libreries_20260512095550](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_How to import libreries_20260512095550.png)

#### 05.05.26 - Alper Yagcioglu

[Workshop Experience](https://alperyagcioglu.ch/workshop.html)

##### Tools in Interaction

```javascript
// {"P5LIVE":{"name":"Tools in Interaction","mod":1778580172930}} 

        let slider, checkbox, button, colorPicker, dropdown, input, sliderText, buttonText;
        let radomStroke
        let bgColor;
        let colorText;
        let positionDOM;

        function setup() {
            createCanvas(windowWidth, windowHeight);

			positionDOM = width - 400
			
            //checkbox
            checkbox = createCheckbox('Show Form', true);
            checkbox.position(width - 400, 20);

            //sliders
            slider = createSlider(0, height - 100, 200);
            slider.position(positionDOM, 60);
            
            sliderText = createSlider(20, 300, 200);
            sliderText.position(positionDOM, 260);

            // Button
            button = createButton('Random Background');
            button.position(positionDOM, 100);
            button.mousePressed(() => {
            bgColor = color(random(255), random(255), random(255));
            });
            bgColor = color(220);
            
            // ButtonText
            button = createButton('Random Color Text');
            button.position(positionDOM, 300);
            button.mousePressed(() => {
                colorText = color(random(255), random(255), random(255));
            });
           colorText = color(120);
        
            // Color Picker
            colorPicker = createColorPicker('#ff0000');
            colorPicker.position(positionDOM, 140);
            
            // Dropdown
            dropdown = createSelect();
            dropdown.position(positionDOM, 180);
            dropdown.option('Circle');
            dropdown.option('Square');
            dropdown.option('Circle2');
            rectMode(CENTER);
            
            // Input field
            input = createInput('Type text');
            input.position(positionDOM, 220);
            textAlign(CENTER, CENTER);
            
            //Radio button
            radio = createRadio();
            radio.option('Black');
            radio.option('White');
            radio.selected('white');
            radio.position(positionDOM, 340);
        }
        
        function draw() {
            background(bgColor);
            
            fill(colorPicker.value());
            
            push()
            if (radio.value() === 'Black') stroke(0);
            if (radio.value() === 'White') stroke(255);
            
            if (checkbox.checked()) {
                if (dropdown.value() === 'Circle') {
                    ellipse(width / 2, height / 2, slider.value(), slider.value());
                }else if (dropdown.value() === 'Square') {
                    rect(width / 2, height / 2, slider.value(), slider.value());
                }
                else if (dropdown.value() === 'Circle2') {
                    ellipse(width / 2 + 100, height / 2, slider.value(), slider.value());
                    ellipse(width / 2 - 100, height / 2, slider.value(), slider.value());
                }
            }
             pop()
             
            fill(colorText)
            textSize(sliderText.value());
            text(input.value(), width / 2, height / 2);
        }  
```

##### ![P5L_Tools in Interaction_20260512100252](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Tools in Interaction_20260512100252.png)

##### Random sin & cos

```javascript
// {"P5LIVE":{"name":"Random sin & cos","mod":1778580261667}} 

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(200);
  stroke(0);
}

function draw() {
  //background (100)
  
  let pen1 = map(sin(frameCount*0.055),-1,1,2,50)
  
  let diffrentX = map(mouseX, 0, width, 0, width/2)
  
  let speedX = sin(frameCount * 0.02) * 300 + sin(frameCount * 0.08)*50
  let speedY = cos(frameCount * 0.02) * 300 + cos(frameCount * 0.08)*50

    ellipse(mouseX -50,speedX, mouseY +50,speedY, pen1)
  
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(pen1);
    
    line(prevX, prevY, mouseX, mouseY);
    ellipse(mouseX,mouseY, pen1, pen1)
  
	// ellipse (diffrentX, height/2 -100,20)	
  }
  
  prevX = mouseX;
  prevY = mouseY;
}

function keyPressed(){
	if(key == 'S'){
		save('drawing.png')
	}
}
```

![P5L_Random sin & cos_20260512100421](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Random sin & cos_20260512100421.png)

##### Sin & Cos ex

```javascript
// {"P5LIVE":{"name":"Sin & Cos ex","mod":1778580286028}} 

let number = 5
let speedX

function setup() {
  createCanvas(windowWidth,windowHeight);
background (198, 222, 18)
	
}

function draw() {
  //background(220);
  
  
  speedX = sin(frameCount * 0.02) * 100 + sin(frameCount * 0.08)*50
  let speedY = cos(frameCount * 0.02) * 100 + cos(frameCount * 0.02)*50
  
  ellipse(width/2 + speedX,height/2 + speedY,100)
  
  stroke(0,0,255)
  noFill()
  
  //line(width/2 + speedX,height/2 + speedY,height/2 + speedY,width/2 + speedX)
  
  console.log(speedX)
}

```

![P5L_Sin & Cos ex_20260512100446](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Sin & Cos ex_20260512100446.png)

##### Noise Function

```javascript
// {"P5LIVE":{"name":"Noise example","mod":1778580311229}} 

let number = 5
let speedX

function setup() {
  createCanvas(windowWidth, windowHeight);
background(198, 222, 18)
	
}

function draw() {
  //background(220);
  
  //fill(25, 31, 194)
  stroke(25, 31, 194)
  noFill()
  
  speedX = sin(frameCount * 0.02) * 200 + sin(frameCount * 0.08)*200
  let speedY = cos(frameCount * 0.02) * 100 + cos(frameCount * 0.02)*50
  
  //ellipse(width/2 + speedX,height/2 + speedY,100)
  
  ellipse(noise(frameCount * 0.008) * width,noise(frameCount * 0.006) * height,100)
  
  //line(width/2 + speedX,height/2 + speedY,height/2 + speedY,width/2 + speedX)
  
  console.log(speedX)
}

```

![P5L_Noise example_20260512100511](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Noise example_20260512100511.png)

##### Pincels

```javascript
// {"P5LIVE":{"name":"Pincels","mod":1778580432311}} 

let moveX = 0;
let moveY = 0;
let position = 0;

function setup () {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(155) 

  if (keyIsDown(49)) { // 49 = Taste "1"
  
	fill (0,0,255)
	noStroke()
	ellipse(mouseX, mouseY, 20);
	ellipse(mouseX + 40, mouseY + 40, 20);
	ellipse(mouseX - 40, mouseY - 40, 20);
	
  }

  if (keyIsDown(50)) { // 39 = Taste "2"
    noStroke()
    fill (100,0,200)
    rect(mouseX + sin(frameCount * 0.05) *100, mouseY + cos(frameCount * 0.05)* 100, 40);
  }
  
  if (keyIsDown(39)) {
    position -= 2;
  }

  fill(255, 0, 0);
  ellipse(width / 2 + position, height / 2, 50 + moveX, 50 + moveY);

  text("keyCode: " + keyCode, 50, 100);
}

```

![P5L_Pincels_20260512100712](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Pincels_20260512100712.png)

##### sin & Cos other ex

```javascript
// {"P5LIVE":{"name":"sin & Cos other ex ","mod":1778580357861}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background (198, 222, 18)
}

function draw() {

// fill(sin(frameCount*0.001)*255,sin(frameCount*0.006)*255,sin(frameCount*0.003)*200)

fill(noise(frameCount*0.0021)*255,noise(frameCount*0.0026)*255,noise(frameCount*0.006)*200)

noStroke()
ellipse(width/2 + sin(frameCount*0.005)*250, height/2 + cos(frameCount*0.005)*250 
+ cos(frameCount*0.021)*50, 40 + sin(frameCount*0.025)*150 )	
  
}

```

![P5L_sin & Cos other ex _20260512100557](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_sin & Cos other ex _20260512100557.png)

#### 06.05.26 - AndreaZaccuri

https://learn-andreazaccuri.azeta.workers.dev/260506-colabor/intro/

https://hydra.ojack.xyz/functions/#functions/initScreen/0

https://hydra-functions-selector.vercel.app

https://hydra.ojack.xyz/garden/

https://ojack.xyz/page/3/

##### Tools

- [online board for sketching and questions](https://excalidraw.com/#room=19956c62d15a919a351b,fk3B0rPmnpv5pH1w6fj26w)
- [hydra online](https://hydra.ojack.xyz/)
- p5live (localhost)

##### Hourse Gif w extension

```javascript
// {"P5LIVE":{"name":"Hourse Gif w extension","mod":1778079805404}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js', 'https://cdn.jsdelivr.net/gh/geikha/hyper-hydra@latest/hydra-gif.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

s1.initGif("https://upload.wikimedia.org/wikipedia/commons/d/d5/Muybridge_horse_walking_animated.gif")
src(s1)
	.diff(noize(1))
	.kaleid(1)
	
.out(o0)

// osc(10,0.3,2)
// 	.mask(shape(4))
// .out(o0)

// src(o0)
//   .diff(noize(10))
// .out(o1)

// render(o1)


// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	// circle(mouseX, mouseY, 10)
}
```

![Horse](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/Horse.png)

##### Camera Audio reacting

```javascript
let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

// s0.initCam(o0)
// src(s0)	

osc(40, 0.1, 1.5)
  .scale(() => 1 + a.fft[0] * 0.5)          // bass
  .modulate(noise(3), () => a.fft[1] * 0.3) // mids
  .kaleid(() => 6 + a.fft[2] * 10)           // high mids
  .hue(() => a.fft[3] * 0.5)                // treble
  .out()
	
sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	circle(mouseX, mouseY, 100)
}
```

![Screenshot 2026-05-13 at 14.08.48](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/Screenshot 2026-05-13 at 14.08.48.png)

##### noize rectangle

```javascript
// {"P5LIVE":{"name":"noize rectangle","mod":1778077226739}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

osc(10,0.3,2)
	.mask(shape(4))
.out(o0)

src(o0)
  .diff(noize(10))
.out(o1)

render(o1)


// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	// circle(mouseX, mouseY, 10)
}
```

![noize rectangle](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/noize rectangle.png)

##### camera Hy5

```javascript
// {"P5LIVE":{"name":"camera Hy5","mod":1778077060721}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

s0.initCam()
src(s0)	.modulate(noize(20, 3))
.kaleid(6)
.out()


// osc(50, 0.1, 1.5)
//   .modulate(src(o0).scale(0.95), 0.15)
//   .out(o0)


// src(s0)
// 	.modulate(noize())
// 	.out()
// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	circle(mouseX, mouseY, 100)
}
```

![P5L_camara Hy5_](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_camara Hy5_.png)

#### 07.05.26 - Jasmin Meerhoff

##### Concrete Poetry in P5LIVE

**Reference: Décio Pignatari, Poeta y ensayista brasileño**

![4-70x50_jpg](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/4-70x50_jpg.webp)



#####  Basic text

```javascript
// {"P5LIVE":{"name":"Basic text","mod":1778682688388}} 

let font, points

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	let sine = floor(5*sin(frameCount/10)+5)
	let words = ("El amor es para mí un Iroqués, de color amarillo y feroz catadura Que viene siempre a galope, montado,En una yegua llamada Tristeza.");

	frameRate(2);
	background(225);
	fill(0,0,255);
	textSize(50);
	textWrap(WORD);
	textFont('monospace');
	textStyle(NORMAL);
	textLeading(40)
	// text(words .replace(/a/g,"w")),
	text((words),200,100, windowWidth/3, windowHeight);
	
	}

```

![P5L_Basic text_20260513143128](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Basic text_20260513143128.png)

##### Replacing vocal

```javascript
// {"P5LIVE":{"name":"Replacing vocal","mod":1778682680462}} 

let font, points

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	let sine = floor(5*sin(frameCount/10)+5)
	let words = ["Iroqués", "catadura", "galope", "esporas", "asfaltada",";","arboledos","silencio","aaa","3"];
	
	frameRate(2);
	background(225);
	fill(0,0,255);
	textSize(50);
	textWrap(CHAR);
	textFont('monospace');
	textStyle(NORMAL);
	textLeading(30);
	text(words[live].replace(/[aeiou]/g,"w").repeat(100),10,10,
	windowWidth/1.1, windowHeight);
	
	}
	//Replacing vocals 
	// text(words[0].replace(/o/g,"a"),400,400,
```

![P5L_Replacing vocal_20260513143120](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Replacing vocal_20260513143120.png)

##### Text test_002

```javascript
// {"P5LIVE":{"name":"Text test_002","mod":1778682698352}} 

let font, points

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	background(225);

	frameRate(4);
	
	let comma = "3";
	let space = ["--"];
	let commaline;
	let count = frameCount%10
	
	fill(0,0,255);
	textSize(windowWidth/50);
	textWrap(CHAR);
	textFont('monospace');
	// textLeading(2)
	for (let i=0; i<11; i++){
	
	space.push("tercer");
	comma = comma + space[1];
	commaline = comma.repeat(33)
	let x = sin(frameCount) *50;

	text(commaline,windowWidth * 0.3 + x, i* 100, windowWidth, windowHeight/ 2);
	console.log (x)
	}
}
```

![P5L_Text test_002_20260513143138](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 2/images/P5L_Text test_002_20260513143138.png)

