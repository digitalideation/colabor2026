// {"P5LIVE":{"name":"new_017","mod":1780254065553}} 

// no p5sound
// v1 — baza
// mikrofon kroz Tone.js, puls krug u centru

let libs = ["https://unpkg.com/tone"]

let mic, meter

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100, 100)
  background(0, 0, 5)

  mic = new Tone.UserMedia()
  meter = new Tone.Meter()
  mic.connect(meter)
  mic.open()
}

function draw() {
  background(0, 0, 5, 12)

  let vol = max(0, meter.getValue() + 100) / 100 // -100..0 dB → 0..1

  let r = map(vol, 0, 1, 20, min(width, height) * 0.8)
  noFill()
  stroke(35, 80, 90, 60)
  strokeWeight(2)
  ellipse(width / 2, height / 2, r, r)
}