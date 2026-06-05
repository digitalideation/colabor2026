// {"P5LIVE":{"name":"02","mod":1780327988525}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
//scroll effect
	.scrollX(1, .5)

	.out()
// sandbox - end


let bpm = 130
let margin = 30;
let gap = 20;

// Different start phases so that everyone swings in a staggered pattern
let phase = [0.0, 1.2, 2.4, 3.6, 4.8];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
 setupAudio(true) // global vars
// a5.ease = .075 // set easing 
}

function draw() {
 /* audio vars: amp, ampEase, fft, fftEase, waveform, waveformEase */
updateAudio() 
//speed audio reactive by using fttEase
let speed = [fftEase[30]*0.0002, fftEase[100]*0.0007, fftEase[80]*0.0002, fftEase[120]*0.0007, fftEase[5]*0.0002];

let invertDuration = 60 / bpm * 60 * 4; // * 4 = change every 4th beat
let invert = floor(frameCount / invertDuration) % 2;

// Alternating background colors
if(invert){
	background(255)
}else{
	background(color(0,0,255))
}

// Alternating fill colors
if(invert){
	fill(color(0,0,255))
}else{
	fill(255)
}


  let h = height - margin * 2 - gap;
  let colW = width / 5;
  let w = colW * 0.75;

  for (let i = 0; i < 5; i++) {

 // sin() ranges from -1 to +1 → shifting to +1 results in a range of 0 to 2 → /2 = 0 to 1
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





/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/