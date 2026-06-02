// {"P5LIVE":{"name":"musik 1","mod":1780321724801}} 

let margin = 30;
let gap = 20;

// Verschiedene Startphasen damit alle versetzt schwingen
let phase = [0.0, 1.2, 2.4, 3.6, 4.8];
let speed = [0.7, 1.1, 0.5, 2, 1.3];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(20, 0, 255);
  fill(235);

  let h = height - margin * 2 - gap;
  let colW = width / 5;
  let w = colW * 0.75;

  for (let i = 0; i < 5; i++) {

    // sin() geht von -1 bis +1 → +1 verschiebt auf 0 bis 2 → /2 = 0 bis 1
let ratio = map(sin(frameCount * 0.01 * speed[i] + phase[i]), -1, 1, 50/h, 1 - 50/h);

    let cx = colW * (i + 0.5);

    if (i % 2 == 0) {
      let r = h * ratio;
      let e = h - r;
      rect(cx - w/2, margin, w, r);
      ellipse(cx, margin + r + gap + e/2, w, e);
    } else {
      let e = h * ratio;
      let r = h - e;
      ellipse(cx, margin + e/2, w, e);
      rect(cx - w/2, margin + e + gap, w, r);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}