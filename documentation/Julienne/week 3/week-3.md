# Day 1



- Stefanie gave us an interesting Input on Sound and Visual Music
- We worked in groups and analyzed texts on the topic of sound and music
- Hubs in the afternoon 



# Day 2

- Support-Meeting with Yann
- He gave us helpful Input to code our snippets
- We discussed our plan leading up to the midterms as a group
- We worked on our code snippets

```javascript
let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
	.modulate(noize(
		() => 2 + ampEase * 0.1,
		() => 0.8 + ampEase * 0.1
	))
	.out()
// sandbox - end

function setup() {
	createCanvas(windowWidth, windowHeight)

	setupAudio(true) // global vars
	// a5.ease = .075 // set easing 
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	let live = frameCount % 10
	let words = ["MANGO ", "GRAPEFRUITE ", "STRAWBERRY ", "BLUEBERRY ", "BANNANA ","MANGO ", "GRAPEFRUITE ", "STRAWBERRY ", "BLUEBERRY ", "BANNANA "];
	let rand = random(words);
	let sine = floor(5 * sin(frameCount / 2) + 5)
	//Damit Framecount weniger schnell ist
	frameRate(2)
	background(0, 0, 255)
	fill(random(255), random(255), random(255))
	textSize(10 * live)
	//Zeilenumbruch bei Wort oder Character
	textWrap(CHAR)
	textFont('monospace')
	textAlign(LEFT)
	textStyle(NORMAL)
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(50)
	//.repeat um Text zu wiederholen
	text(words[sine].repeat(3000), 0, 0,
		windowWidth, windowHeight)

}
```



![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 3/images/P5L_text animation wave_20260515154410.png)







```javascript
let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']
// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy
s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5
src(s0)
    .modulate(noize(2,1))
    .out()
// sandbox - end

function setup() {
	createCanvas(windowWidth, windowHeight)
	
 setupAudio(true) // global vars
// a5.ease = .075 // set easing 
}

function draw() {
 /* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
updateAudio() 
	let live = frameCount%10
	let words = ["MANGO ","GRAPEFRUITE ","STRAWBERRY ", "BLUEBERRY ", "BANNANA ", "KIWI ", "ANANAS", "APPLE", "ORANGE", "BLUEBERRY "];
	let rand = random(words);
	let sine = floor(5*sin(frameCount/10)+5)
	//Damit Framecount weniger schnell ist
	frameRate(5)
	background(255,255,255)
	fill(random(255),random(255),random(255))
	textSize(50)
	//Zeilenumbruch bei Wort oder Character
	textWrap(CHAR)
	textFont('monospace')
	textAlign(LEFT)
	textStyle(NORMAL)
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(50)
	//.repeat um Text zu wiederholen
	text(words[sine].repeat(2000), 200,300, 
	windowWidth/2,windowHeight/2)
  
}


```

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 3/images/P5L_snippet 1_001_20260515154707.png)





# Day 3

- Got introduced to strudel
- Experimented with it 

```javascript
//bpm festlegen mit setcpm(bmp/4)
setcpm(120/4)
//playing a bass drum = bd // bd*4 = viermal im bpm
//.gain(0 bis 1) = Lautstärke regulieren
$:sound("bd*4").gain(0.25)
//playing snare drum
$:sound("sd*2").gain(0.25)
//playing guitar
//sound kann mit s abegürzt werden
_$:note("c3 c4 c5 c4")
  .s("piano")
//chords
_$:note("1 2 3".add(50)).chord("C A F").voicing()
  .s("piano")

//using other notes in second, third.. cicle
_$:note("1 2 <3 4 6>".add(50)).chord("C A F").voicing()
  .s("piano")

//creating a subsequenz with [ ]
$:note("1 2 [3 4 6]".add(50)).chord("C A F").voicing()
  .slow(2)
  .s("piano")
//extending the length of the cicle with .slow(number)

//$: = sounds miteinander abspielen
//_ vor zeile = stumm
._punchcard()
```



# Day 5

- Worked on the snippets for the midterms
- Discussed how we want to present it and how we want to go on after the midterms

```javascript
let lines = `Das isch en Text wo 
nur so da staht. Er bedütet 
nüt aber ich bruche ihn, 
demit ich chan luege wies 
usgseht.`.split('\n');

let t = 0;
let spacing = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textFont('Helvetica');
	textSize(54);
}

function draw() {
	background(255, 0, 127);
	noStroke();
	//wenn Maus gedrückt wird
	if(mouseIsPressed) {
		//MausX wert ganz links = spacing 0, ganz rechts = spacing 20
		spacing = map(mouseX, 0, width, 0, 20);
	} else {
		// Sonst spacing animiert zwischen 0 und 20
		// sin(t) geht zwischen -1 und 1 → map() rechnet es auf 0–20 um
		spacing = map(sin(t), -1, 1, 0, 20);
	}

	let y = 120;
	//für alle Linien von line durchgehen
	for(let line of lines) {
		// Linie startet horizonzal bei 500
		let x = 500;
		//für alle Buchstaben von line durchgehen
		for(let char of line) {
			// w = länge der Buchstaben messen
			let w = textWidth(char);
			//schwarzer block hinter buchstaben 
			// fängt bei -2 vertikal und -48 horizontal an bei jedem Buchstaben
			fill(0);
			rect(x - 2, y - 48, w + 4, 56);
			fill(255);
			// nimmt text von char funktion , position wie x und y definiert sind
			text(char, x, y);
			//x um die Buchstabenbreite + wert in variabel spacing vergrössern
			x += w + spacing;
		}
		//damit jede linie 70 weiter unten startet
		y += 70;
	}
	// t = geschwindigkeit
	t += 0.04;
}
```

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 3/images/P5L_Snippet 1 mit maus_20260515155810.png)







```javascript
let colorText;
let colorBG;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorText = color(255);
	colorBG = color(0, 0, 255);
}

function draw() {
	//wenn maus gedrückt wird und zwar in einem wertebereich von x bei width/2
	//wird wert in colorText geändert 
	//ansonsten wenn maus gedrückt wird, wird Wert in colorBG geändert
	if(mouseIsPressed) {
		if(mouseX < width / 2) {
			colorText = color(random(255), random(255), random(255));
		} else {
			colorBG = color(random(255), random(255), random(255));
		}
	}

	let live = frameCount % 10;
	let words = ["-- --", "ooo oo", ",,,,", "!!! !!", "???? ?", "<< <<<", ".. ...", "||| ||||||", "xx x", ">> >>>"];
	let sine = floor(5 * sin(frameCount / 10) + 5);
	//Damit Framecount weniger schnell ist
	frameRate(10);
	//Wert von colorBG als Hintergrund übernehmen
	background(colorBG);
	//Wert von colorText als Textfarbe übernehmen
	fill(colorText);
	textSize(200);
	//Zeilenumbruch bei Wort oder Character
	textWrap(CHAR);
	textFont('monospace');
	textAlign(LEFT);
	textStyle(NORMAL);
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(30 * (live / 2));
	//.repeat um Text zu wiederholen
	text(words[sine].repeat(1000),
	100, 100, windowWidth - 100, windowHeight - 100);
}
```

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 3/images/P5L_snippet 2_20260515155950.png)