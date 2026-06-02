# MID TERM PRESENTATION

### CODE SNIPPETS

###### AUDIOREACTIVE SPACING ANIMATION

```javascript
let word = "SOUND "
let spread = 40

function setup() {
	createCanvas(windowWidth, windowHeight);
	setupAudio(true) // global vars
	// a5.ease = .075 // set easing
}

function draw() {
	/* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	background(0);
	fill(255)
	textSize(20)
	textAlign(CENTER)

	// spread influences width of the different bows -> in sine function
	// target (input in spread) reacts to amplitude of the audio -> audioreactive
  // lerp makes spread more organic and less linear
	let target = ampEase * 40;
	spread = lerp(spread, target, ampEase > spread / 100 ? 0.1 : 0.03);


	// for-loop creates the many lines of text
	for(let i = 0; i < 50; i++) {
		fill(255)
		// spacing changes according to sine curve; can only be positive (abs = Betrag)
		let spac = abs(sin(frameCount * 0.04 + i * 0.2) * spread)
		textSpacing(word.repeat(30), spac, 0, 20 * i)
	}
}

// spacing function to control spacing of text
function textSpacing(txt, spacing, x, y) {
	let totalWidth = 0;

	for(let char of txt) {
		totalWidth += textWidth(char) + spacing;
	}

	for(let char of txt) {
		text(char, x, y);
		x += textWidth(char) + spacing;
	}
}
```

![P5L_typo_spacing_left_audio_20260517221101](./week_1-3//week-3/documentation/images/P5L_typo_spacing_left_audio_20260517221101.png)

###### BOUNCING SPACING ANIMATION

```javascript
let word = "FLOAT"
let lineHeight = 27
let varySpacing = 0

// defines how many words there are per row -> few - many - few
let rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4, 3, 2];

function setup() {
	createCanvas(windowWidth, windowHeight)
}

//function to draw one text block
function drawBlock(yOffset) {
	for(let i = 0; i < rows.length; i++) {
		// text is repeated as often as defined in rows array
		let txt = word.repeat(rows[i]);
		let naturalWidth = 0;
		
		// calculates natural width by adding width of each character
		for(let char of txt) naturalWidth += textWidth(char);
		
		// spacing is calculated so that text fills whole width
		let spacing = (width - naturalWidth) / (txt.length - 1);
		
		// animation of spacing from 0 to filling width
		varySpacing = abs(sin(frameCount * 0.03))
		
		// writes text
		textSpacing(txt, varySpacing * spacing, width / 2, yOffset + lineHeight * (i + 1))
	}
}

function draw() {
	background(0)
	fill(255)
	textSize(20)
	
	// drawBlock function is applied
	drawBlock(0)
	// second block should be under first -> height first equals
	// amount of elements in rows array multiplied with line height
	drawBlock(rows.length * lineHeight)
}

// function that allows you to change spacing
function textSpacing(txt, spacing, x, y) {
	let totalWidth = 0;
	for(let char of txt) {
		totalWidth += textWidth(char) + spacing;
	}
	
	totalWidth -= spacing;
	x -= totalWidth / 2;
	for(let char of txt) {
		text(char, x, y);
		x += textWidth(char) + spacing;
	}
}
```

![P5L_typo_spacing_center_20260517221113](./week_1-3//week-3/documentation/images/P5L_typo_spacing_center_20260517221113.png)



### PROCESS & DECISIONS

The first phase of the module was mainly directed towards getting in touch with the programs and the countless possibilities provided by them. After the many inputs by different lecturers, Julian and I reflected upon what interested us most and we agreed on following the typographic approach presented by Jasmin. For me, it was quite difficult to be creative and come up with new ideas when having just a blank page and my keyboard to write code in front of me. Thus, I decided to start by looking for reference and trying to rebuild it. As I was limited by the skills obtained over the last few weeks and the insights gained from following some tutorials, new interesting visual impressions formed by accident which triggered new ideas. Whenever that happened, I let go of my initial reference and experimented further, until I achieved an interesting image. In order to bring live to the visuals, I implemented the sinus curve as a basis for the motion. It was quite interesting to see, how much the visual image can change when just altering the values inside of the sine function. That is why I used the audio input as a parameter within the sine function for one of the sketches. By implementing an input which can't be controlled in detail, new spontaneous images form which I find very fascinating. Therefore, I would like to experiment further with audio input or other uncontrollable features like the random function to get surprising results that one might not have thought of. Another approach that I'd like to follow through is the possibilty to distort letters, either within p5 or with the hydra add-on. In addition, I'd like to make new sketches using the "replace"- function. In the weeks to come, I will experiment further with these approaches and will also experiment how the typographic visuals change, when the text input is altered. In the end, it will be important to focus on the most interesting experiments and bring them together, the sketches I made as well as Julian's, to find a common shape and colour language for a coherent overall impression.  Apart from the visual component, sound production interested me, too and I would like to get into strudel more. In the end, it might be an approach to unify visuals and sound by the use of audioreactive parameters in the visual code.
