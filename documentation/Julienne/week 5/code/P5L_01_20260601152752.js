// {"P5LIVE":{"name":"01","mod":1780327672806}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
//scrolling effect
.scrollY(1,-.5)
	.out()
// sandbox - end


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawNote(x, y, size, highlight) {
  if (highlight) {
    fill(255);
    rect(x - size * 0.8, y - size * 3.2, size * 1.8, size * 4.5);
    fill(0, 0, 255);
  } else {
    fill(255);
  }
  ellipse(x, y, size * 1.4, size);
  rect(x + size * 0.5, y - size * 3, size * 0.2, size * 3);
}

function draw() {
  background(0, 0, 255);
  noStroke();

//Play the steps one after another
  let bpm = 130;
  let duration = 60 / bpm * 60;
  let step = floor(frameCount / duration) % 4;
 
 //let step = 3

//Define the individual steps here
  let size, cols, rows;
  if (step == 0 ){size = 200, cols = 3, rows = 1;}
  if (step == 1 ){size = 100, cols = 6, rows = 2;}
  if (step == 2 ){size = 50, cols = 12, rows = 4;}
  if (step == 3 ){size = 20, cols = 20, rows = 10;}



  // Frames per note and position 0 to cols for highlight
  let highlightSpeed = 5; 
  let pos = floor(frameCount / highlightSpeed) % cols; 

  for (let row = 0; row < rows; row++) {
   let highlightCol;
if (row % 2 == 0) {
  highlightCol = (pos + row * 3) % cols;
} else {
  highlightCol = cols - 1 - (pos + row * 3) % cols;
}

    for (let col = 0; col < cols; col++) {
      let x = (col + 0.5) * (width / cols);
      let y = (row + 0.5) * (height / rows) + size;
      drawNote(x, y, size,col == highlightCol);
    }
  }
}