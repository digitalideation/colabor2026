// {"P5LIVE":{"name":"Morsecode to text","mod":1780320255832}} 

let morseInput = "";

// Morse Alphabet
let morse = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(70);
  textAlign(CENTER, CENTER);
}

function draw() {

  background(0);
  fill(255);

  // oben: Morsecode
  text(morseInput, width / 2, height / 3);

  // unten: Übersetzung
  let translated = translateMorse(morseInput);

  text(translated, width / 2, height / 1.5);
}

// Morse → Text
function translateMorse(str) {

  // Wörter mit 3 Leerzeichen trennen
  let words = str.split("   ");

  let result = "";

  for (let w = 0; w < words.length; w++) {

    // einzelne Buchstaben trennen
    let letters = words[w].split(" ");

    for (let i = 0; i < letters.length; i++) {

      if (morse[letters[i]]) {
        result += morse[letters[i]];
      }
    }

    // Leerzeichen zwischen Wörtern
    result += " ";
  }

  return result;
}

// Tastatur
function keyPressed() {

  // löschen
  if (keyCode === BACKSPACE) {
    morseInput = morseInput.slice(0, -1);
  }

  // erlaubte Zeichen
  if (key === "." || key === "-" || key === " ") {
    morseInput += key;
  }

  return false;
}
'// noprotect'