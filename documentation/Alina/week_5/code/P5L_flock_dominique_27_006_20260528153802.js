// {"P5LIVE":{"name":"flock_dominique_27_006","mod":1779982682922}} 

// noprotect
const PALETTE = [
  "#ffffff", "#a5b2cf", "#0015ad"
];
const wordColorMap = {};
let colorIndex = 0;
function getWordColor(word) {
  const key = word.toLowerCase();
  if (!wordColorMap[key]) {
    wordColorMap[key] = PALETTE[colorIndex++ % PALETTE.length];
  }
  return wordColorMap[key];
}
 
let wordPool = ["△", "▲"]
let wordInput;
let flock;
function setup() {
  createCanvas(windowWidth, windowHeight);
  setupAudio(true);  // Mikrofon aktivieren
  a5.ease = .15;     // Glättung der FFT-Werte (träger = ruhiger)
  flock = new Flock();
  for (let i = 0; i < 200; i++)
    flock.add(new Boid(width/2, height/2));
    
 // Eingabefeld für neue Wörter
  wordInput = createInput('');
  wordInput.position(width/2 - 140, 12);
  wordInput.size(280, 30);
  wordInput.attribute('placeholder', 'Wort eingeben, Enter = hinzufügen');
  wordInput.elt.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const words = wordInput.value().trim().split(/\s+/).filter(w => w.length > 0);
      words.forEach(w => {
        if (!wordPool.includes(w)) wordPool.push(w);
        getWordColor(w);
        flock.add(new Boid(width/2, height/2));
      });
      flock.boids.forEach(b => {
        b.word = wordPool[floor(random(wordPool.length))];
      });
      wordInput.value('');
    }
  });
}
function draw() {
//bei Ted nachfragen, wie wir das optimieren können
  updateAudio();  // Audio-Analyse jeden Frame aktualisieren
 
 //circle that demonstrates the UK
 noStroke()
 circle(windowWidth/2,windowHeight/2,200)
 
  // Bass (tiefe Frequenzen) aus FFT: Index 0–2 mitteln
let bassSum =0;
for(let i = 0; i < 80; i++) {
    bassSum += fftEase[i];
  }
 let bass = bassSum /80 //desto grösser die Zahl umso reaktiver?
 
 //console.log(bass)
 
  // Helle Blitze bei starkem Bass (Hintergrund kurz aufhellen)
  let bgAlpha = map(bass, 0, 255, 1, 255);
  background(0, 30, 255,bgAlpha);
 
 //je nachdem map der mouseX und mouseY weglassen?
 
  //let x = map(mouseX, 0, width,  0.00001, 6);
  //let y = map(mouseY, 0, height, 0.00001, 1);
  
  let x=0
  let y=0
 
  // Bass steuert Separation — bei Beat weichen Boids stärker aus
  let separation = map(bass, 0, 255, 3,12); //gemapt auf 1.5,4
  flock.run(separation, y, x);
}
function mouseDragged() {
  flock.add(new Boid(mouseX, mouseY));
}
// ──────────────────────────────────────────────────
// Klasse Flock — der Schwarm
// ──────────────────────────────────────────────────
class Flock {
  constructor() { this.boids = []; }
  add(b)  { this.boids.push(b); }
  run(s, a, c) {
    this.boids.forEach(b => b.run(this.boids, s, a, c));
  }
}
// ──────────────────────────────────────────────────
// Klasse Boid — ein einzelnes Tier im Schwarm
// ──────────────────────────────────────────────────
class Boid {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-1,1), random(-1,1));
    this.acc = createVector(0, 0);
    this.r  = 5;
    this.ms = 15;
    this.mf = 1.833;
    // Zufälliges Wort aus dem Pool beim Erstellen zuweisen
    this.word = wordPool[floor(random(wordPool.length))];
    // Jedem Boid einen eigenen FFT-Index zuweisen → verschiedene Frequenzen steuern verschiedene Boids
    this.fftIndex = floor(random(fftEase.length));
  }
  run(bs, s, a, c) {
    this.acc.add(this.separate(bs).mult(s));
    this.acc.add(this.align(bs).mult(a));
    this.acc.add(this.cohesion(bs).mult(c));
    this.vel.add(this.acc).limit(this.ms);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.borders();
    this.render();
  }
  steer(bs, dist, fn) {
    let sum = createVector(0, 0);
    let count = 0;
    for (let o of bs) {
      let d = p5.Vector.dist(this.pos, o.pos);
      if (d > 0 && d < dist) { fn(sum, o, d); count++; }
    }
    return count > 0 ? sum.div(count) : createVector(0, 0);
  }
  limit(s) {
    return s.normalize().mult(this.ms).sub(this.vel).limit(this.mf);
  }
  seek(t) {
    return this.limit(p5.Vector.sub(t, this.pos));
  }
  separate(bs) {
    let s = this.steer(bs, 125, (sum, o, d) =>
      sum.add(p5.Vector.sub(this.pos, o.pos).normalize().div(d)));
    return s.mag() > 0 ? this.limit(s) : s;
  }
  align(bs) {
    let s = this.steer(bs, 150, (sum, o) => sum.add(o.vel));
    return s.mag() > 0 ? this.limit(s) : s;
  }
  cohesion(bs) {
    let s = this.steer(bs, 150, (sum, o) => sum.add(o.pos));
    return s.mag() > 0 ? this.seek(s) : s;
  }
  borders() {
    for (let [ax, max] of [['x', width], ['y', height]]) {
      if (this.pos[ax] < -this.r)       this.pos[ax] = max + this.r;
      if (this.pos[ax] > max + this.r)  this.pos[ax] = -this.r;
    }
  }
  // ──────────────────────────────────────────────────
  // Den Boid als Wort zeichnen, das in Flugrichtung zeigt.
  // Gleiche Wörter → gleiche Farbe (aus wordColorMap)
  // Eigene FFT-Frequenz steuert Schriftgrösse
  // ──────────────────────────────────────────────────
  render() {
    // Schriftgrösse pulsiert mit der eigenen Frequenz des Boids
    let freq = fftEase[this.fftIndex];
    let size = this.r * 2.2 + map(freq, 0, 255, 0, this.r * 4);
 
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading() + radians(90)); // In Flugrichtung drehen
    fill(getWordColor(this.word).fftEase/100);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(size);  // Schriftgrösse proportional zu r + FFT
    text(this.word, 0, 0);
    pop();
  }
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/