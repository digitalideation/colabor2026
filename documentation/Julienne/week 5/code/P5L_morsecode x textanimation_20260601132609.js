// {"P5LIVE":{"name":"morsecode x textanimation","mod":1780320369697}} 

let colorText;
let colorBG;

let currentWord = "";
let words = [];
let morseWords = [];

// Morse-Tabelle
let morseMap = {
	a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".",
	f: "..-.", g: "--.", h: "....", i: "..", j: ".---",
	k: "-.-", l: ".-..", m: "--", n: "-.", o: "---",
	p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-",
	u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--",
	z: "--.."
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorText = color(255);
	colorBG = color(0, 0, 255);
	frameRate(10);
}

function wordToMorse(word) {
	word = word.toLowerCase();
	let result = "";

	for (let i = 0; i < word.length; i++) {
		let char = word[i];
		if (morseMap[char]) {
			result += morseMap[char] + " ";
		}
	}

	return result.trim();
}

function draw() {

	// Farbsteuerung
	if (mouseIsPressed) {
		if (mouseX < width / 2) {
			colorText = color(random(255), random(255), random(255));
		} else {
			colorBG = color(random(255), random(255), random(255));
		}
	}

	background(colorBG);
	fill(colorText);

	textFont('monospace');

	// =========================
	// OBEN: INPUT ANZEIGE
	// =========================
	textSize(40);
	textAlign(LEFT);

	let displayInput = words.join(" ") + (currentWord.length > 0 ? " " + currentWord : "");

	text(displayInput, 100, 60);

	// =========================
	// MORSE ANIMATION
	// =========================
	textSize(100);
	textWrap(CHAR);
	textAlign(LEFT);
	textStyle(random([NORMAL, ITALIC]));

	let live = frameCount % 10;
	let sine = floor(5 * sin(frameCount / 10) + 5);

	textLeading(30 * (live / 2));

	if (morseWords.length > 0) {
		let index = sine % morseWords.length;
		text(morseWords[index].repeat(50), 100, 150, windowWidth/1.1, windowHeight);
	}
}

// Tastatur → Wort bauen
function keyTyped() {
	if (key === " ") {
		if (currentWord.length > 0) {
			words.push(currentWord);
			morseWords.push(wordToMorse(currentWord));
			currentWord = "";
		}
	} else {
		currentWord += key;
	}
}

// Steuerung
function keyPressed() {

	if (keyCode === ENTER) {
		if (currentWord.length > 0) {
			words.push(currentWord);
			morseWords.push(wordToMorse(currentWord));
			currentWord = "";
		}
	}

	if (keyCode === BACKSPACE) {
		currentWord = currentWord.slice(0, -1);
		return false;
	}

	if (keyCode === ESCAPE) {
		words = [];
		morseWords = [];
		currentWord = "";
	}
}