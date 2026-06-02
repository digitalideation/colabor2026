// {"P5LIVE":{"name":"pixelated_typo","mod":1780165900059}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(1)

s0.initP5()
P5.toggle(0)

osc(13, 0.01, 20) // Wir starten mit der Farbe
  .modulate(noise(0.3), () => typeof a !== 'undefined' ? a.fft[1] * 0.3 : 0.1)
  .mult(src(s0)) // Der Oszillator wird überall dort sichtbar, wo der Text weiß ist!
  .pixelate(100, 800)
  .out(o0)
// sandbox - end

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
  clear(); // Hintergrund bleibt transparent für Hydra
  frameRate(2);
  
  textFont("monospace");
  textSize(80);
  
  fill(255); 
  
  textStyle(random([ITALIC, NORMAL]));
  textWrap(WORD);
  textAlign(LEFT, TOP);
  textLeading(90);
  
  text(
    "did you hear about the windrush generation before? ".repeat(3),
    100, 
    100, 
    windowWidth / 1.2, 
    windowHeight
  );
}