// {"P5LIVE":{"name":"Morsezeichen 2","mod":1779376874176}} 

// input = Textfeld 
// words = Wörter-Array 
//wordIndex, letterIndex, symbolIndex = wo wir gerade sind
let input, words = [],
	wordIndex = 0,
	letterIndex = 0,
	symbolIndex = 0;
// t = Zeit in Millisekunden
//synth = Ton
// currentSymbols = aktueller Morsecode
let t = 0,
	bgColor, started = false,
	synth, currentSymbols = "";

// Größe der Morse-Symbole 
const morseSize = 4; 

// Übersetzungstabelle
const morse = { a: ".-",b: "-...",c: "-.-.",d: "-..",
	e: ".",f: "..-.",g: "--.",h: "....",i: "..",j: ".---",
	k: "-.-",l: ".-..",m: "--",n: "-.",o: "---",p: ".--.",
	q: "--.-",r: ".-.",s: "...",t: "-",u: "..-",v: "...-",
	w: ".--",x: "-..-",y: "-.--",z: "--.."
};

//wird einmal beim Start ausgeführt
function setup() {
	// Zeichenfläche und Start-Hintergrundfarbe erstellen
	createCanvas(windowWidth, windowHeight); 
	bgColor = color(255, 0, 127); 

	// Ton erstellen mit Sinuswelle und stumm starten
	synth = new p5.Oscillator('sine');
	synth.start();
	// Lautstärke
	synth.amp(0); 

	// Texteingabefeld erstellen
	input = createInput("");
	input.position(20, 20);

	// startet wenn man etwas in input tippt
	input.input(() => {
		const text = input.value().toLowerCase().trim(); // In Kleinbuchstaben umwandeln und kein Leerzeichen
		//.split = Text in Wörter aufteilen -> "hallo welt" = ["hallo", "welt"]
		//.filter = nur Wörter (w) die länger als 0 sind 
		words = text.split(" ").filter(w => w.length > 0); 
		started = words.length > 0; // Animation nur starten wenn Wörter vorhanden
		wordIndex = letterIndex = symbolIndex = 0; // Alle Zähler zurücksetzen
	});
}

function draw() {
	background(bgColor); // Hintergrund wird Farbe von bgColor 
	fill(255);
	textAlign(CENTER); 

	// Wenn nichts eingegeben = "Text eingeben um zu starten" anzeigen
	if(!started) {
		textSize(20);
		text("Text eingeben um zu starten", width / 2, height / 2);
		return;
	}

	// millis() Zeit in Millisekunden, die seit Programmstart vergangen ist
	//Wenn 200ms vergangen = einen Schritt im Morsecode weitergehen
	if(millis() - t > 400) {
		stepMorse(); 
	//dann Zeitmessung zurücksetzen
		t = millis();
	}

	drawMorse(); 
	// Aktuelles Wort anzeigen (% = Loop)
	textSize(150)
	text(words[wordIndex % words.length] || "", width / 2, height / 6 + 200);
}

//schaltet zum nächsten Morse-Symbol weiter ===
function stepMorse() {
	// aktuelles Wort holen
	const word = words[wordIndex % words.length] || ""; 
	// Morsecode des aktuellen Buchstabens in Tabelle nachschauen
	const code = morse[word[letterIndex]] || ""; 
// für drawMorse() aktueller Morsecode merken
	currentSymbols = code; 

	// symbolIndex erhöhen; wenn wir am Ende des Codes sind → nächster Buchstabe
	//z.B. "h" = "...." (4 Symbole = code.length = 4)
	// deshalb ++symbolIndex = 4  →  4 >= 4? Ja → symbolIndex = 0, nächster Buchstabe
	if(++symbolIndex >= code.length) {
	//Index zurück auf 0, damit bei nächsten Buchstaben wieder bei ersten Symbol anfängt
		symbolIndex = 0;

		// letterIndex erhöhen; wenn wir am Ende des Wortes sind -> nächstes Wort
		//z.B. word = "hi"  → word.length = 2 / ++letterIndex = 2 ->nächstes Wort
		if(++letterIndex >= word.length) {
			wordIndex++;
			letterIndex = 0;
		// Zufällige neue Hintergrundfarbe beim Wortwechsel
			bgColor = color(random(50, 255), random(50, 255), random(50, 255));
		}
	}
// Ton für das aktuelle Symbol abspielen
	triggerSound(code[symbolIndex]); 
}

function triggerSound(sym) {
	if(!sym) return; // kein Symbol = kein Ton

	synth.freq(400); // Tonhöhe
	synth.amp(0.35, 0.02); // Erste Zahl = Lautstärke, wie schnell so laut = zweite Zahl

//sym === "."  ->  true  -> dann 80ms   (kurz)
//sym === "."  -> false -> dann 240ms  (lang)
	setTimeout(() => synth.amp(0, 0.05), sym === "." ? 80 : 240);
}

function drawMorse() {
	const spacing = 40 * morseSize; // Abstand zwischen den Symbolen
//Für jedes Symbol in currentSymbols einmal drawMorse aufgerufen 
//jedes Zeichen einzeln an der richtigen Position gezeichnet
//nach jedem Durchlauf i um 1 erhöhen
	for(let i = 0; i < currentSymbols.length; i++) {
		const sym = currentSymbols[i];

		// Position und Farbe 
		const px = width / 2 + 70 + (i - currentSymbols.length / 2) * spacing;
		const py = height / 2 + 100;
		fill(255);
		noStroke(); 
// Symbole für . und - zeichenen
		if(sym === ".") circle(px, py, 12 * morseSize); 
// rect(x, y, breite, höhe, rundung)
		if(sym === "-") rect( 
			px - 15 * morseSize, py - 6 * morseSize,
			30 * morseSize, 12 * morseSize,
			4 * morseSize 
		);
	}
}