// Julian Mora — Week 1 variation: Radial concentric circles
// inspired by Vera Molnar, from squares to circles in polar grid

let rings = 8;
let cols = 12;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  angleMode(DEGREES);
  noFill();
}

function draw() {
  background(10, 30);
  let t = frameCount * 0.4;
  for (let col = 0; col < cols; col++) {
    let cx = (width / cols) * col + (width / cols) / 2;
    for (let row = 0; row < 5; row++) {
      let cy = (height / 5) * row + (height / 5) / 2;
      let phase = col * 15 + row * 25;
      for (let r = 0; r < rings; r++) {
        let d = map(r, 0, rings, 90, 4);
        let wobble = sin(t + phase + r * 12) * 6;
        let br = map(r, 0, rings, 200, 40);
        stroke(br, br + 20, br + 60);
        strokeWeight(map(r, 0, rings, 0.5, 2));
        ellipse(cx, cy, d + wobble, d + wobble);
      }
    }
  }
}
