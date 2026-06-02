// {"P5LIVE":{"name":"04","mod":1780328295923}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
//scroll effect
.scrollY(1,0.5)
	.out()
// sandbox - end


let notes = [];
let words = []; 
//Input words here
let wordList = ['B#5','A5','F#5','D#5','F5','E5','THANK YOU FOR YOUR ATTENTION'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupAudio(true);
}

//single note
function drawNote(x, y, size) {
  ellipse(x, y, size * 1.4, size);
  rect(x + size * 0.5, y - size * 3, size * 0.2, size * 3);
}

//double note
function drawDoubleNote(x, y, size) {
  let gap = size * 2;
  drawNote(x, y, size);
  drawNote(x + gap, y, size);
  rect(x + size * 0.5, y - size * 3, gap, size * 0.2);
}

//appear on keypress
function keyPressed() {
  if (key == 's') {
    notes.push({ x: random(width), y: random(height), vx: random(-3, 3), vy: random(-3, 3), type: 'single' });
  }
  if (key == 'd') {
    notes.push({ x: random(width), y: random(height), vx: random(-3, 3), vy: random(-3, 3), type: 'double' });
  }
  if (keyCode == ENTER) {
    words.push({
      x: random(width),
      y: random(height),
      vx: random(-3, 3),
      vy: random(-3, 3),
      word: random(wordList) 
    });
  }
}

function draw() {
  updateAudio();

  let bpm = 130;
  let invertDuration = 60 / bpm * 60 * 4;
  let invert = floor(frameCount / invertDuration) % 2;

if (invert) {
    background(255);
    fill(color(0, 0, 255));
} else {
    background(color(0, 0, 255));
    fill(255);
}
noStroke();

//reaction to audio
  let noteSize = map(fftEase[50], 0, 255, 15, 100);
  let fontSize = map(fftEase[50], 0, 255, 20, 80); 

  // notes
  for (let n of notes) {
    let mouseSpeed = map(mouseY, 0, height, 2, 0.1);
    n.x += n.vx * mouseSpeed;
    n.y += n.vy * mouseSpeed;
    if (n.x < 0 || n.x > width)  n.vx *= -1;
    if (n.y < 0 || n.y > height) n.vy *= -1;
    if (n.type == 'single') {
      drawNote(n.x, n.y, noteSize);
    } else {
      drawDoubleNote(n.x, n.y, noteSize);
    }
  }

  // words
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  for (let w of words) {
    let mouseSpeed = map(mouseY, 0, height, 2, 0.1);
    w.x += w.vx * mouseSpeed;
    w.y += w.vy * mouseSpeed;
    if (w.x < 0 || w.x > width)  w.vx *= -1;
    if (w.y < 0 || w.y > height) w.vy *= -1;
    text(w.word, w.x, w.y);
  }
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/