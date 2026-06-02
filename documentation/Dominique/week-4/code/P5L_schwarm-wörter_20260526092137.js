// {"P5LIVE":{"name":"schwarm-wörter","mod":1779787297643}} 

// ── Wort-Schwarm ─────────────────────────────────────────────────────────────
// Wörter in setup() eintragen oder live per addWord("...") hinzufügen
// Maus ziehen = zufälliges Wort aus dem Pool spawnen

let flock;
let wordPool = [];   // { word, brightness }
let started  = false;

// Graustufen: erstes Wort = hell (220), letztes = dunkel (60)
function brightnessForIndex(i, total) {
  if (total <= 1) return 200;
  return Math.round(220 - (i / (total - 1)) * 160);
}

function addWord(val) {
  if (!val || wordPool.find(w => w.word === val)) return;

  wordPool.push({ word: val, brightness: 200 });

  // Helligkeiten für alle Wörter neu verteilen
  wordPool.forEach((e, i) => {
    e.brightness = brightnessForIndex(i, wordPool.length);
  });

  // Einen neuen Boid in der Bildschirmmitte spawnen
  let entry = wordPool.find(w => w.word === val);
  let b = new Boid(
    width/2  + random(-100, 100),
    height/2 + random(-100, 100),
    val,
    entry.brightness
  );
  flock.add(b);

  // Helligkeiten aller bestehenden Boids aktualisieren
  flock.boids.forEach(b => {
    let e = wordPool.find(w => w.word === b.word);
    if (e) b.brightness = e.brightness;
  });

  started = true;
}

// ── p5.js Einstiegspunkte ─────────────────────────────────────────────────────

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  flock = new Flock();

  // ── Wörter hier eintragen ─────────────────────────────────────────────────
  addWord("Drum & Bass");
  addWord("Windrush-Generation");
  addWord("Wind");
  addWord("Chaos");
  addWord("Ordnung");
  addWord("Nähe");
  addWord("Richtung");
  addWord("Flug");
}

function draw() {
  background(10);

  if (!started) {
    fill(255, 255, 255, 45);
    noStroke();
    textSize(13);
    textAlign(CENTER, CENTER);
    text('addWord("dein Wort") aufrufen um zu starten', width/2, height/2);
    return;
  }

  flock.run();
}

// Maus ziehen: zufälliges Wort aus dem Pool an Mausposition spawnen
function mouseDragged() {
  if (!started || wordPool.length === 0) return;
  let entry = wordPool[floor(random(wordPool.length))];
  flock.add(new Boid(mouseX, mouseY, entry.word, entry.brightness));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ── Flock ─────────────────────────────────────────────────────────────────────

class Flock {
  constructor() { this.boids = []; }
  add(b) { this.boids.push(b); }
  run()  { this.boids.forEach(b => b.run(this.boids)); }
}

// ── Boid ──────────────────────────────────────────────────────────────────────

class Boid {
  constructor(x, y, word, brightness) {
    this.pos        = createVector(x, y);
    this.vel        = p5.Vector.random2D().mult(random(0.8, 1.6));
    this.acc        = createVector(0, 0);
    this.ms         = random(1.8, 2.6);  // max speed
    this.mf         = 0.05;              // max force — weich = flüssige Kurven
    this.word       = word;
    this.brightness = brightness;
  }

  run(bs) {
    // Separation schwächer, Ausrichtung + Kohäsion stärker → enger aber flexibler Schwarm
    this.acc.add(this.separate(bs).mult(1.0));
    this.acc.add(this.align(bs).mult(1.4));
    this.acc.add(this.cohesion(bs).mult(1.3));

    this.vel.add(this.acc).limit(this.ms);
    this.pos.add(this.vel);
    this.acc.set(0, 0);

    this.borders();
    this.render();
  }

  // Nachbarn im Radius finden und fn darauf anwenden, Durchschnitt zurückgeben
  steer(bs, dist, fn) {
    let sum = createVector(0, 0), count = 0;
    for (let o of bs) {
      let d = p5.Vector.dist(this.pos, o.pos);
      if (d > 0 && d < dist) { fn(sum, o, d); count++; }
    }
    return count > 0 ? sum.div(count) : createVector(0, 0);
  }

  // Lenkkraft: gewünschte Richtung minus aktuelle Geschwindigkeit, begrenzt auf mf
  steerLimit(s) {
    return s.normalize().mult(this.ms).sub(this.vel).limit(this.mf);
  }

  // Zum Zielpunkt t steuern
  seek(t) {
    return this.steerLimit(p5.Vector.sub(t, this.pos));
  }

  // Regel 1: Abstand halten — Abstoßung von zu nahen Nachbarn (Radius 45 px)
  separate(bs) {
    let s = this.steer(bs, 45, (sum, o, d) =>
      sum.add(p5.Vector.sub(this.pos, o.pos).normalize().div(d)));
    return s.mag() > 0 ? this.steerLimit(s) : s;
  }

  // Regel 2: Ausrichtung — gleiche Richtung wie Nachbarn (Radius 90 px)
  align(bs) {
    let s = this.steer(bs, 90, (sum, o) => sum.add(o.vel));
    return s.mag() > 0 ? this.steerLimit(s) : s;
  }

  // Regel 3: Kohäsion — zum Mittelpunkt der Nachbarn bewegen (Radius 160 px)
  cohesion(bs) {
    let s = this.steer(bs, 160, (sum, o) => sum.add(o.pos));
    return s.mag() > 0 ? this.seek(s) : s;
  }

  // Rand-Teleport: links raus = rechts rein, oben raus = unten rein
  borders() {
    for (let [ax, max] of [['x', width], ['y', height]]) {
      if (this.pos[ax] < -50)      this.pos[ax] = max + 50;
      if (this.pos[ax] > max + 50) this.pos[ax] = -50;
    }
  }

  // Als Text zeichnen — Helligkeit bestimmt die Graustufe
  render() {
    push();
    translate(this.pos.x, this.pos.y);
    noStroke();
    textAlign(CENTER, CENTER);
    fill(this.brightness);
    textSize(11);
    text(this.word, 0, 0);
    pop();
  }
}