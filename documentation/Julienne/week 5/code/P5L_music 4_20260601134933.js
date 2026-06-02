// {"P5LIVE":{"name":"music 4","mod":1780321773649}} 


/*
	_HY5_p5_hydra // cc teddavis.org 2024
	pass p5 into hydra
	docs: https://github.com/ffd8/hy5
*/

 let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// // sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
.kaleid([3,8,1,4])
.scrollX(1,0.5)
.out()
// sandbox - end

function setup() {
  createCanvas(windowWidth, windowHeight);
 setupAudio(true) // global vars
// a5.ease = .075 // set easing 
}

function draw() {
 /* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
updateAudio() 
  background(0, 0, 255, 10);
  noFill();
  let speed = 20;
  let t = frameCount / speed;

  // Weisse Linien
  stroke(255);
  strokeWeight(3);
  
  // line(0, baseY, width, baseY); // gerade Linien
     
  for (let i = 1; i <= 5; i++) {
    let baseY = (height / 6) * i;
    beginShape();
    for (let x = 0; x <= width; x += 5) {
      let amp = sin((x / width) * PI) * 300;
      let phase = (i / 5) * TWO_PI;
      let y = baseY + sin(t + (x / width) * TWO_PI + phase) * amp;
      vertex(x, y);
    }
    endShape();
  }
  
}






/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/