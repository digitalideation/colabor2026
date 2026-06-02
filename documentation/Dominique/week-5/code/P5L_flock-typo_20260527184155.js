// {"P5LIVE":{"name":"flock-typo","mod":1779907315663}} 

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

//let wordPool = ["⏅", "⍡"]
 let wordPool = ["△", "▲"]
// let wordPool = ["☆", "⎈", "△", "▲"]
let wordInput;
let flock;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
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
  background(0, 30, 255, 10);
  let x = map(mouseX, 0, width,  0.00001, 6);
  let y = map(mouseY, 0, height, 0.00001, 1);
  flock.run(2.0, y, x);
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
  // ──────────────────────────────────────────────────
  render() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading() + radians(90)); // In Flugrichtung drehen
    fill(getWordColor(this.word));
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(this.r * 2.2);   // Schriftgröße proportional zu r
    text(this.word, 0, 0);
    pop();
  }
}