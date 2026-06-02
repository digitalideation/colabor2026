// {"P5LIVE":{"name":"Scatman_Pulsierend","mod":1780345210688}} 

let song;
let amp, fft;

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
let interval = 80;
let bgColor, textColor;

function preload() {
  song = loadSound('scatman.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  words = lyrics.split(" ");
  textAlign(CENTER, CENTER);
  
  amp = new p5.Amplitude();
  fft = new p5.FFT();
  
  bgColor = color(0);
  textColor = color(255);
}

function draw() {
  // Audio analysieren
  fft.analyze();
  let level = amp.getLevel();
  let bass = fft.getEnergy("bass");
  let treble = fft.getEnergy("treble");
  
  // Hintergrund pulsiert mit Bass
  background(bass * 0.5, 0, bass * 0.3);
  
  // Textgröße pulsiert mit Lautstärke
  let size = map(level, 0, 0.4, 30, 120);
  textSize(size);
  
  // Geschwindigkeit hängt von Höhen ab → höhere Töne = schnellere Wörter
  let dynamicInterval = map(treble, 0, 255, 1000, 100);
  
  if (millis() - lastTime > dynamicInterval && shownWords.length < words.length) {
    shownWords.push(words[shownWords.length]);
    lastTime = millis();
  }
  
  // Textfarbe ändert sich mit Bass
  fill(255 - bass, 255, bass);
  text(shownWords.join(" "), width/2, height/2);
}

function mousePressed() {
  song.stop()
  song.play()
  
  shownWords = [];
  lastTime = millis();
}