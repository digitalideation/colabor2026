# Mid-term-presentation

Snippet 1: 

```
// {"P5LIVE":{"name":"snippet 2","mod":1779113311368}} 

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
	let words = ["-- --", "ooo oo", ",,,,", "°°° ", "§§§§ ", "<< <<<", ".. ...", "||| ||||||", "xx x", ">> >>>"];
	//floor = rundet auf ganze Zahlen
	//Ergibt eine ganze Zahl als Indexwert zwischen 0 und 9
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
	textStyle(random([NORMAL, ITALIC]))
	//Zeilenabstand = textLeading, animiert mit Framecount
	textLeading(30 * (live / 2));
	//.repeat um Text zu wiederholen
	//words[sine]um ein random Element aus words zu nehmen
	text(words[sine].repeat(1000),
		100, 100, windowWidth - 100, windowHeight - 100);
}
```

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 4/images/P5L_snippet 2_20260518140831.png)



Snippet 2:

```
// {"P5LIVE":{"name":"Snippet 1 ","mod":1779113553772}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)

      .rotate(() => mouse.x * 0.005)
      .out()
// sandbox - end



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

	let y = 200;
	//für alle Linien von line durchgehen
	for(let line of lines) {
		// Linie startet horizonzal bei 500
		let x = 300;
		//für alle Buchstaben von line durchgehen
		for(let char of line) {
			// w = länge der Buchstaben messen
			let w = textWidth(char);
			//schwarzer block hinter buchstaben 
			// fängt bei -2 vertikal und -48 horizontal an bei jedem Buchstaben
			fill(0);
			rect(x - 2, y - 48, w + 4, 56);
			fill(255);
			// nimmt text nach durchlauf des char loops, position wie x und y definiert sind
			text(char, x, y);
			//x um die Buchstabenbreite + wert in variabel spacing vergrössern
			x += w + spacing;
		}
		//damit jede linie 70 weiter unten startet
		y += 70;
	}
	// t = geschwindigkeit
	t += 0.08;
}
```

![](/Users/juliennedurr/Documents/Studium/10_Creative Coding/documentation/week 4/images/P5L_Snippet 1 _20260518141233.png)



Snippet 3: 

```
// {"P5LIVE":{"name":"Scatman","mod":1779113673424}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)

      .rotate(() => mouse.x * .005)
      .pixelate(() => mouse.y, () => mouse.y)
      .out()
// sandbox - end
let lyrics = `Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub (I'm the Scatman)
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Ba-da-ba-da-ba-be bop-bop-bodda-bope
Bop-ba-bodda-bope
Be-bop-ba-bodda-bope, bop-ba-bodda
Ba-da-ba-da-ba-be bop-ba-bodda-bope
Bop-ba-bodda-bope
Be-bop-ba-bodda-bope, bop-ba-bodda-bope
Everybody stutters, one way or the other
So check out my message to you
As a matter of fact, I don't let nothin' hold you back
If the Scatman can do it, so can you
Everybody's sayin' that the Scatman stutters
But doesn't ever stutter when he sings
But what you don't know, I'm gonna tell you right now
That the stutter and the scat is the same thing, yo
I'm the Scatman
Where's the Scatman?
I'm the Scatman
Why should we be pleasing in the politician heathens
Who would try to change the seasons if they could?
The state of the condition insults my intuitions
And it only makes me crazy and a heart like wood
Everybody stutters one way or the other
So check out my message to you
As a matter of fact, I'm letting nothing hold you back
If the Scatman can do it, brother, so can you
I'm the Scatman
Ba-da-ba-da-ba-be bop-bop-bodda-bope
Bop-ba-bodda-bope
Be-bop-ba-bodda-bope, bop-ba-bodda
Ba-da-ba-da-ba-be bop-ba-bodda-bope
Bop-ba-bodda-bope
Be-bop-ba-bodda-bope, bop-ba-bodda-bope
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Everybody stutters one way or the other
So check out my message to you
As a matter of fact, I don't let nothing hold you back
If the Scatman can do it, so can you
I hear you all ask 'bout the meaning of scat
Well, I'm the professor and all I can tell you is
While you're still sleeping, the saints are still weeping 'cause
Things you called dead haven't yet had the chance to be born
I'm the Scatman
Ba-da-ba-da-ba-be bop-bop-bodda-bope
Bop-ba-bodda-bope
Be-bop-ba-bodda-bope, bop-ba-bodda
Ba-da-ba-da-ba-be bop-ba-bodda-bope
Bop-ba-bodda-bope
Be-bop-ba-bodda-bope, bop-ba-bodda-bope
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Ski-bi-dibby-dib yo-da-dub-dub, yo-da-dub-dub
Yeah, I'm the Scatman
Dong dong dong, ding ding-dong, dong
Wo-go-ez-ze-ze-za-de-ya-de-za-de-ya-ze-ze-zee
Dong-ding-dong-dong-dong, do-dong-ding
Where's the Scatman?
I'm the Scatman, repeat after me
It's a scoobie-oobie-doobie, scoobie-doobie melody
I'm the Scatman, sing along with me
It's a scoobie-oobie-doobie, scoobie-doobie melody
Yeah, I'm the Scatman (I'm the Scatman)
Bop-ba-bodda-bope
Be-bop-ba-bodda-bope, bop-ba-bodda
I'm the Scatman (I'm the Scatman)
Bop-ba-bodda-bope
Be-bop-ba-bodda-bope`;
let words = [];
let shownWords = [];
let lastTime = 0;
let interval; // Millisekunden zwischen Wörtern
let colorBG;
let colorText;

function setup() {
      createCanvas(windowWidth, windowHeight);
      words = lyrics.split(" ");
      textSize(32);
      textAlign(CENTER, CENTER);
      colorBG = color(200);
      colorText = color(255, 255, 0);
      interval = 80

}

function draw() {
      background(colorBG)

      // Nächstes Wort hinzufügen, wenn Zeit abgelaufen
      if(millis() - lastTime > interval && shownWords.length < words.length) {
            shownWords.push(words[shownWords.length]);
            lastTime = millis();
      }

      // Aktuellen Text zeichnen
      fill(colorText);
      let currentText = shownWords.join(" ");
      text(currentText, width / 2, height / 2);

}

function mousePressed() {
      // Neustart bei Klick
      shownWords = [];
      lastTime = millis();
      if(mouseIsPressed) {
            if(mouseX < width / 2) {
                  colorText = color(random(255), random(255), random(255));
            } else {
                  colorBG = color(random(255), random(255), random(255));
            }
      }
      interval = random(100, 800)
}
```

![](/Users/juliennedurr/Desktop/Bildschirmfoto 2026-05-18 um 14.15.18.png)