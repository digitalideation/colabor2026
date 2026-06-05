// {"P5LIVE":{"name":"Scatman John","mod":1779037898476}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)

	.rotate( () => mouse.x * 0.005)
	.pixelate( () => mouse.y, () => mouse.y)
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
	interval = random (1,80)
}