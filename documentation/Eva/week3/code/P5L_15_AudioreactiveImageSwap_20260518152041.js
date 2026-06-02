// {"P5LIVE":{"name":"15_AudioreactiveImageSwap","mod":1779117641778}} 

let mic;
let currentImg;
let imgURL = "";
let threshold = 0.03; // volume trigger
let cooldown = 1000; // ms between switches
let lastSwitch = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // start microphone
  mic = new p5.AudioIn();
  mic.start();

  // load first image
  loadRandomImage();
}

function draw() {
  background(0);

  // draw image fullscreen
  if (currentImg) {
    image(currentImg, 0, 0, width, height);
  }

  // microphone volume
  let vol = mic.getLevel();

  // debug volume meter
  fill(255);
  noStroke();
  rect(20, height - 40, vol * 1000, 20);

  fill(255);
  textSize(16);
  text("Volume: " + nf(vol, 1, 3), 20, height - 50);

  // trigger image switch on loud sound
  if (vol > threshold && millis() - lastSwitch > cooldown) {
    loadRandomImage();
    lastSwitch = millis();
  }
}

function loadRandomImage() {

  // random seed so image changes every time
  let seed = floor(random(100000));

  // random online image source
  imgURL = "https://picsum.photos/seed/" + seed + "/1200/800";

  loadImage(
    imgURL,
    img => {
      currentImg = img;
      console.log("Loaded:", imgURL);
    },
    err => {
      console.error("Image failed:", err);
    }
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}