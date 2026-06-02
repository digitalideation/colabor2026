// {"P5LIVE":{"name":"new_017","mod":1779907021963}} 

// noprotect

// ──────────────────────────────────────────────────
// Wörter hier eintragen — beliebig viele
// ──────────────────────────────────────────────────
const WORDS = ["D'n'B'", 'Jungle', 'Drum&Bass', 'Windrush', 'history'];

// ──────────────────────────────────────────────────
// Jedes Wort bekommt eine feste Farbe (H, S, B)
// ──────────────────────────────────────────────────
const WORD_COLORS = {};
function buildWordColors() {
  const step = 360 / WORDS.length;
  WORDS.forEach((w, i) => {
    WORD_COLORS[w] = [i * step, 70, 95]; // gleichmäßig über den Farbkreis verteilt
  });
}

// ──────────────────────────────────────────────────
// Globale Variablen & p5.js-Einstiegspunkte
// ──────────────────────────────────────────────────

let flock;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  textFont('Lobular');
  buildWordColors();
  flock = new Flock();
  for (let i = 0; i < 100; i++)
    flock.add(new Boid(width/2, height/2));
}

function draw() {
  background(300, 100, 32); // entspricht ungefähr rgb(82,0,69) in HSB
  flock.run();
}

function mouseDragged() {
  flock.add(new Boid(mouseX, mouseY));
}


// ──────────────────────────────────────────────────
// Klasse Flock — der Schwarm
// ──────────────────────────────────────────────────

class Flock {
  constructor() {
    this.boids = [];
  }
  add(b)  { this.boids.push(b); }
  run()   {
    this.boids.forEach(b => b.run(this.boids));
  }
}


// ──────────────────────────────────────────────────
// Klasse Boid — ein einzelnes Tier im Schwarm
// ──────────────────────────────────────────────────

class Boid {
  constructor(x, y) {
    this.pos  = createVector(x, y);
    this.vel  = createVector(random(-1,1), random(-1,1));
    this.acc  = createVector(0, 0);
    this.r    = 1;
    this.ms   = 3;
    this.mf   = 0.03;
    this.word = random(WORDS);
    this.fs   = random(13, 19);
    this.col  = WORD_COLORS[this.word]; // feste Farbe für dieses Wort
  }

  run(bs) {
    this.acc.add(this.separate(bs).mult(1.2));
    this.acc.add(this.align(bs));
    this.acc.add(this.cohesion(bs));

    this.vel.add(this.acc).limit(this.ms);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.borders();
    this.render();
  }

  steer(bs, dist, fn) {
    let sum   = createVector(0, 0);
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

  // Separation: Radius von 10 → 28 erhöht damit Wörter lesbar bleiben
  separate(bs) {
    let s = this.steer(bs, 20, (sum, o, d) =>
      sum.add(p5.Vector.sub(this.pos, o.pos).normalize().div(d)));
    return s.mag() > 0 ? this.limit(s) : s;
  }

  // Align: Radius von 50 → 80, stärkere Ausrichtung = engere Schwärme
  align(bs) {
    let s = this.steer(bs, 100, (sum, o) => sum.add(o.vel));
    return s.mag() > 0 ? this.limit(s) : s;
  }

  // Cohesion: Radius von 50 → 80, Boids ziehen sich stärker zusammen
  cohesion(bs) {
    let s = this.steer(bs, 100, (sum, o) => sum.add(o.pos));
    return s.mag() > 0 ? this.seek(s) : s;
  }

  borders() {
    for (let [ax, max] of [['x', width], ['y', height]]) {
      if (this.pos[ax] < -this.r)      this.pos[ax] = max + this.r;
      if (this.pos[ax] > max + this.r) this.pos[ax] = -this.r;
    }
  }

  render() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    textAlign(CENTER, CENTER);
    textSize(this.fs);
    fill(this.col[0], this.col[1], this.col[2]);
    noStroke();
    text(this.word, 0, 0);
    pop();
  }
}