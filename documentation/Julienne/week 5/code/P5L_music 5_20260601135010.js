// {"P5LIVE":{"name":"music 5","mod":1780321810433}} 


/*
	_HY5_p5_hydra // cc teddavis.org 2024
	pass p5 into hydra
	docs: https://github.com/ffd8/hy5
*/

 let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// // sandbox - start
// H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
.kaleid([3,8,2,4])
.scrollX(1,0.5)
.out()
// sandbox - end



function setup() {
  createCanvas(windowWidth, windowHeight);
 setupAudio(true) // global vars
// a5.ease = .075 // set easing 
}

function draw() {
  updateAudio()
  background(255, 255, 255,10);
  strokeWeight(2);
  let spacing = height / 6;
  let speed = 2 * fftEase[80];

  for (let i = 1; i <= 5; i++) {
    if (i == 1 || i == 5) {
      stroke(255, 0, 150); // <-- pink
    } else {
      stroke(0, 0, 255);
    }
    let intens = 100;
    let offset = sin(frameCount / speed + i) * intens;
    line(0, i * spacing + offset, width, i * spacing + offset);
  }
}


/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/