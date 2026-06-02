// {"P5LIVE":{"name":"schwarm-klein","mod":1779787097576}} 

// ──────────────────────────────────────────────────
// Globale Variablen & p5.js-Einstiegspunkte
// ──────────────────────────────────────────────────

// noprotect — sagt dem p5.js-Editor: "Bitte nicht eingreifen,
//             auch wenn eine Schleife lang läuft."
let flock; // Wird später mit einem Flock-Objekt befüllt

// setup() wird von p5.js EINMAL beim Start aufgerufen
function setup() {
  createCanvas(windowWidth, windowHeight); // Zeichenfläche = ganzes Browserfenster
  flock = new Flock();                   // Leerer Schwarm wird angelegt
  for (let i = 0; i < 100; i++)
    flock.add(new Boid(width/2, height/2)); // Anz. Boids starten in Mitte definieren
}

// draw() wird von p5.js ca. 60× pro Sekunde aufgerufen — jeder Aufruf = 1 Frame
function draw() {
  background(82, 0, 69); // Hintergrund-Farbe (löscht das vorherige Frame)
  flock.run();   // Jeden Boid bewegen und zeichnen
}

// Wenn die Maus gedrückt und gezogen wird, erscheinen neue Boids
function mouseDragged() {
  flock.add(new Boid(mouseX, mouseY)); // Neuer Boid genau an der Mausposition
}


// ──────────────────────────────────────────────────
// Klasse Flock — der Schwarm
// ──────────────────────────────────────────────────

// Flock ist nur ein Behälter: eine Liste aller Boids plus zwei Hilfsmethoden.
// Der Schwarm selbst "denkt" nicht — das macht jeder Boid für sich.
class Flock {
  constructor() {
    this.boids = []; // Leeres Array, das alle Boid-Objekte hält
  }
  add(b)  { this.boids.push(b); } // Einen neuen Boid zur Liste hinzufügen
  run()   {
    // Jeden Boid in der Liste einmal ausführen.
    // Jeder bekommt die GESAMTE Liste (this.boids), damit er
    // seine Nachbarn selbst herausfiltern kann.
    this.boids.forEach(b => b.run(this.boids));
  }
}


// ──────────────────────────────────────────────────
// Klasse Boid — ein einzelnes Tier im Schwarm
// ──────────────────────────────────────────────────

class Boid {
  constructor(x, y) {
    // pos = aktuelle Position auf der Leinwand (x/y-Koordinaten)
    this.pos = createVector(x, y);
    // vel = Geschwindigkeit: wohin und wie schnell bewegt er sich gerade?
    // Zufällige Startwerte → jeder Boid fliegt am Anfang in eine andere Richtung
    this.vel = createVector(random(-1,1), random(-1,1));
    // acc = Beschleunigung: welche Kraft wirkt gerade auf ihn?
    // Startet immer bei (0,0) — kein Schub am Anfang
    this.acc = createVector(0, 0);
    this.r  = 1;    // r  = Radius/Größe des Dreiecks in Pixeln
    this.ms = 3;    // ms = max speed  — wie schnell darf er maximal sein?
    this.mf = 0.03; // mf = max force  — wie stark darf er seine Richtung ändern?
                     //                  (kleiner Wert = träges, realistisches Lenken)
  }

  // run() wird jeden Frame einmal aufgerufen.
  // bs = das Array aller Boids (um Nachbarn zu finden)
  run(bs) {
    // ── Schritt 1: Kräfte berechnen und aufaddieren ──────────────────────
    this.acc.add(this.separate(bs).mult(1.2)); // Abstand halten (1.5× stärker gewichtet)
    this.acc.add(this.align(bs));            // Gleiche Richtung wie Nachbarn
    this.acc.add(this.cohesion(bs));         // Zum Zentrum der Nachbarn bewegen

    // ── Schritt 2: Physik anwenden ────────────────────────────────────────
    this.vel.add(this.acc).limit(this.ms); // Geschwindigkeit += Beschleunigung, aber max. ms
    this.pos.add(this.vel);                // Position += Geschwindigkeit
    this.acc.set(0, 0);                   // Beschleunigung auf 0 zurücksetzen (wird nächsten Frame neu berechnet)

    // ── Schritt 3: Zeichnen ───────────────────────────────────────────────
    this.borders(); // Rand-Teleport: am rechten Rand raus = links wieder rein
    this.render();  // Dreieck auf die Leinwand zeichnen
  }

  // ── Hilfsmethode: Nachbarn im Radius finden ──────────────────────────────
  // dist  = wie weit schaut der Boid?
  // fn    = was soll mit jedem Nachbar gemacht werden? (als Funktion übergeben)
  // Gibt den Durchschnittsvektor aller gefundenen Nachbarn zurück.
  steer(bs, dist, fn) {
    let sum   = createVector(0, 0); // Hier werden die Vektoren aufaddiert
    let count = 0;                    // Zählt, wie viele Nachbarn gefunden wurden
    for (let o of bs) {
      let d = p5.Vector.dist(this.pos, o.pos); // Abstand zu diesem Boid berechnen
      // d > 0 schließt den Boid selbst aus (Abstand zu sich selbst = 0)
      if (d > 0 && d < dist) { fn(sum, o, d); count++; }
    }
    // Durchschnitt zurückgeben, oder Nullvektor wenn keine Nachbarn gefunden
    return count > 0 ? sum.div(count) : createVector(0, 0);
  }

  // Normalisiert einen Vektor zu einer Lenkkraft:
  // "Ich will in Richtung s, mit Maximalgeschwindigkeit, abzüglich meiner aktuellen Fahrtrichtung"
  // Das Ergebnis ist die nötige Kurskorrektur.
  limit(s) {
    return s.normalize().mult(this.ms).sub(this.vel).limit(this.mf);
  }

  // Berechnet die Lenkkraft in Richtung eines Zielpunkts t
  seek(t) {
    return this.limit(p5.Vector.sub(t, this.pos)); // Richtungsvektor zum Ziel berechnen
  }

  // ── REGEL 1: Separation ─────────────────────────────────────────────────
  // "Halte Abstand!" — Boids die zu nah sind, stoßen sich ab.
  // Radius 25 px: nur sehr nahe Nachbarn zählen.
  // Je näher der Nachbar, desto stärker die Abstoßung (÷ d).
  separate(bs) {
    let s = this.steer(bs, 25, (sum, o, d) =>
      sum.add(p5.Vector.sub(this.pos, o.pos).normalize().div(d)));
    // Nur lenken wenn wirklich Nachbarn da sind (mag() = Länge des Vektors)
    return s.mag() > 0 ? this.limit(s) : s;
  }

  // ── REGEL 2: Ausrichtung ────────────────────────────────────────────────
  // "Flieg in dieselbe Richtung wie deine Nachbarn!"
  // Radius 50 px: weiter schauen als bei Separation.
  // Mittelt die Geschwindigkeitsvektoren (vel) aller Nachbarn.
  align(bs) {
    let s = this.steer(bs, 50, (sum, o) => sum.add(o.vel));
    return s.mag() > 0 ? this.limit(s) : s;
  }

  // ── REGEL 3: Kohäsion ───────────────────────────────────────────────────
  // "Bleib beim Schwarm!" — Bewege dich zur Mitte deiner Nachbarn.
  // Radius 50 px. Mittelt die Positionen (pos) aller Nachbarn,
  // dann wird seek() benutzt um dorthin zu steuern.
  cohesion(bs) {
    let s = this.steer(bs, 50, (sum, o) => sum.add(o.pos));
    return s.mag() > 0 ? this.seek(s) : s;
  }

  // Rand-Teleport: verlässt ein Boid die Leinwand, kommt er auf der anderen Seite rein.
  // Die for-Schleife macht das kompakt für x und y gleichzeitig.
  borders() {
    for (let [ax, max] of [['x', width], ['y', height]]) {
      if (this.pos[ax] < -this.r)       this.pos[ax] = max + this.r; // Links raus → rechts rein
      if (this.pos[ax] > max + this.r)  this.pos[ax] = -this.r;      // Rechts raus → links rein
    }
  }


// ──────────────────────────────────────────────────
// Den Boid als kleines Dreieck zeichnen, das in Flugrichtung zeigt.
// ──────────────────────────────────────────────────

  render() {
    push();                                       // Aktuellen Zustand des Koordinatensystems speichern
    translate(this.pos.x, this.pos.y);           // Nullpunkt auf die Boid-Position verschieben
    rotate(this.vel.heading() + radians(90));      // In Flugrichtung drehen (+90° weil Dreieck nach oben zeigt)
    fill(255, 217, 249);                         // Füllfarbe: helles Rosa
    stroke(252, 121, 230);                       // Umrandungsfarbe: kräftiges Pink
    beginShape();
      vertex( 0,       -this.r * 2); // Spitze (oben/vorne)
      vertex(-this.r,   this.r * 2); // Linke untere Ecke
      vertex( this.r,   this.r * 2); // Rechte untere Ecke
    endShape(CLOSE);
    pop(); // Koordinatensystem wieder zurücksetzen (für den nächsten Boid)
  }
}
