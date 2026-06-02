// {"P5LIVE":{"name":"Morse Flash","mod":1780320497107}} 

//Text speichern, leer starten
let inputText = "";
let morseQueue = [];
let isPlaying = false;

let morseMap = {
	a: ".-",
	b: "-...",
	c: "-.-.",
	d: "-..",
	e: ".",
	f: "..-.",
	g: "--.",
	h: "....",
	i: "..",
	j: ".---",
	k: "-.-",
	l: ".-..",
	m: "--",
	n: "-.",
	o: "---",
	p: ".--.",
	q: "--.-",
	r: ".-.",
	s: "...",
	t: "-",
	u: "..-",
	v: "...-",
	w: ".--",
	x: "-..-",
	y: "-.--",
	z: "--.."
};

let bgColor = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	textSize(40);
}

function draw() {
	//wert von bgColor übernehmen
	background(bgColor);
	fill(255);
	// Text weiss und zentriert
	text(inputText, width / 2, height / 2);
}


function startMorse() {
	//Input von inputText in morsezeichen übersetzen und in morseString speichern
	let morseString = textToMorse(inputText);
	//einzelne Morsezeichen aufteilen und in morseQue speichern
	morseQueue = morseString.split("");
	isPlaying = true;
	//playNext Funktion abrufen
	playNext();
}


function playNext() {
	//wenn Queue leer = alle Symbole wurden abgespielt
	if(morseQueue.length === 0) {
		//Hintergrund wieder schwarz
		bgColor = 0;
		isPlaying = false;
		return;
	}
	//  Symbol aus der Queue holen und entfernen und in symbol speichern
	let symbol = morseQueue.shift();
	//wenn symbol . dann kurzer flash
	if(symbol === ".") {
		flash(120);
	}
	//wenn symbol - dann langer flash
	else if(symbol === "-") {
		flash(350);
	}
	//wenn symbol Leerzeichen, warten
	else {
		setTimeout(playNext, 180);
	}
}


function flash(duration) {
	//Hintergrund Rot
	bgColor = color(5, 20, 150);
	// nach duraton ms Hintergrund wieder schwarz
	setTimeout(() => {
		bgColor = 0;
	//nach 100ms Pause nächstes Symbol
		setTimeout(playNext, 100);
	}, duration);
}


function textToMorse(text) {
	text = text.toLowerCase();

	let result = "";

	for(let i = 0; i < text.length; i++) {
		let c = text[i];

		if(c === " ") {
			result += "   ";
		}
		else if(morseMap[c]) {
			result += morseMap[c] + " ";
		}
	}

	return result.trim();
}

// ======================
// INPUT
// ======================
function keyPressed() {

	if(keyCode === ENTER) {
		if(!isPlaying) {
			startMorse();
		}
	}

	if(keyCode === BACKSPACE) {
		inputText = inputText.slice(0, -1);
	}

	if(key.length === 1 && !isPlaying) {
		inputText += key;
	}

	return false;
}