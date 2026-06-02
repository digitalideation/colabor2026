// {"P5LIVE":{"name":"02_video","mod":1780356631551}} 

let myVideo1, myVideo2;
let activeVideo;

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js'];

//Rain Code Config
let texts = ["demand","could rise", "to 1200 litters"];
let rain = [];
let textSizeValue = 20;

// HYDRA

// sandbox - start
s0.initP5() // send p5 to hydra
P5.toggle(0) // keep p5 visible through hydra

//PHASE 1 EFFECTS
src(s0)
  .color([1,0,0,1],[0,1,0,10],[0,0,1,1])
  .colorama([0.005,0.33,0.66,0.55].fast(1))

//PHASE 2 EFFECTS
  //.modulate(noise(5,0.1))
  //.mult(solid(1,1,0.3))
  .out(o0)

// sandbox - end


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Text Setup
  textSize(textSizeValue);
  textFont('arial');

  // Video 1
  myVideo1 = createVideo(['data/video2.mp4']);
  configureVideo(myVideo1);
  
  // Video 2
  myVideo2 = createVideo(['data/video3.mp4']);
  configureVideo(myVideo2);

  // --- Start Performance State ---

  activeVideo = myVideo1; 
  activeVideo.loop();
  
  // Rain Structure
//   for (let i = 0; i < 100; i++) {
//     rain[i] = {
//       x: random(width),
//       y: random(-height, 0),
//       text: random(texts),
//       speed: random(1, 5)
//     };
//   }
// }

function configureVideo(v) {
  v.hide();
  v.volume(1);
  //v.speed(2.0);
}

function draw() {
  background(0);
  
  if (activeVideo) {
    image(activeVideo, 0, 0, width, height);
  }
  
  // PHASE 1 RAIN 
  
  ///*
  fill(0, 0, 0); // Rain Color
  rain.forEach(drop => {
    text(drop.text, drop.x, drop.y);
    drop.y += drop.speed;
    if (drop.y > height) {
      drop.y = random(-200, 0);
      drop.x = random(width);
    }
  });
  //*/
}

function keyPressed() {
  if (key === '1') {
    switchVideo(myVideo1);
  } else if (key === '2') {
    switchVideo(myVideo2);
  }
}

function switchVideo(newVideo) {
  if(activeVideo) activeVideo.pause(); 
  activeVideo = newVideo;
  activeVideo.loop();
}