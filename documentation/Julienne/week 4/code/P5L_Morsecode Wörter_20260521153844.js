// {"P5LIVE":{"name":"Morsecode Wörter","mod":1779377924309}} 

// === VARIABLEN ===
let input, words = [], wordIndex = 0, letterIndex = 0, symbolIndex = 0;
let t = 0, bgColor, started = false, synth, currentSymbols = "";
let currentWordMorse = "";

const morseSize = 2; // Größe der Morse-Symbole
const morse = {
  a:".-", b:"-...", c:"-.-.", d:"-..", e:".", f:"..-.", g:"--.", h:"....",
  i:"..", j:".---", k:"-.-", l:".-..", m:"--", n:"-.", o:"---", p:".--.",
  q:"--.-", r:".-.", s:"...", t:"-", u:"..-", v:"...-", w:".--",
  x:"-..-", y:"-.--", z:"--.."
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(20, 80, 180);
  synth = new p5.Oscillator('sine');
  synth.start();
  synth.amp(0);
  input = createInput("");
  input.position(20, 20);
  input.input(() => {
    const text = input.value().toLowerCase().trim();
    words = text.split(" ").filter(w => w.length > 0);
    started = words.length > 0;
    wordIndex = letterIndex = symbolIndex = 0;
    if (started) updateWordMorse();
  });
}

function draw() {
  background(bgColor);
  fill(255); textAlign(CENTER);
  if (!started) {
    textSize(20);
    text("Text eingeben um zu starten", width / 2, height / 2);
    return;
  }
  if (millis() - t > 800) { stepMorse(); t = millis(); }
  drawMorse();
  textSize(150);
  text(words[wordIndex % words.length] || "", width / 2, height / 2 + 200);
}

function updateWordMorse() {
  const word = words[wordIndex % words.length] || "";
  currentWordMorse = word
    .split("")
    .map(ch => morse[ch] || "")
    .join(" ");
}

function stepMorse() {
  const word = words[wordIndex % words.length] || "";
  const code = morse[word[letterIndex]] || "";
  currentSymbols = code;

  if (++symbolIndex >= code.length) {
    symbolIndex = 0;
    if (++letterIndex >= word.length) {
      wordIndex++;
      letterIndex = 0;
      bgColor = color(random(50, 255), random(50, 255), random(50, 255));
      updateWordMorse();
    }
  }
  triggerSound(code[symbolIndex]);
}

function triggerSound(sym) {
  if (!sym) return;
  synth.freq(400);
  synth.amp(0.35, 0.02);
  setTimeout(() => synth.amp(0, 0.05), sym === "." ? 80 : 240);
}

function drawMorse() {
  const symbols = currentWordMorse.replace(/ /g, ""); // Leerzeichen entfernen
  const spacing = 40 * morseSize;   // Abstand zwischen Symbolen
  const margin = 60;                // Randabstand links und rechts
  const usableWidth = width - margin * 2; // verfügbare Breite
  const symbolsPerRow = floor(usableWidth / spacing); // wie viele Symbole pro Zeile passen

  // Symbole in Zeilen aufteilen
  // z.B. 20 Symbole, 8 pro Zeile → [[0-7], [8-15], [16-19]]
  const rows = [];
  for (let i = 0; i < symbols.length; i += symbolsPerRow) {
    rows.push(symbols.slice(i, i + symbolsPerRow));
  }

  const rowHeight = 50 * morseSize; // vertikaler Abstand zwischen Zeilen
  const totalHeight = rows.length * rowHeight; // Gesamthöhe aller Zeilen
  const startY = height / 2 - totalHeight / 2; // Startpunkt so dass alles vertikal zentriert ist

  // jede Zeile einzeln zeichnen
  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];
    const py = startY + r * rowHeight; // y-Position dieser Zeile

    for (let i = 0; i < row.length; i++) {
      const sym = row[i];
      // x-Position: Zeile zentriert auf dem Screen
      const px = width / 2 + (i - row.length / 2) * spacing;

      fill(255); noStroke();
      if (sym === ".") circle(px, py, 12 * morseSize);
      if (sym === "-") rect(px - 15 * morseSize, py - 6 * morseSize, 30 * morseSize, 12 * morseSize, 4 * morseSize);
    }
  }
}