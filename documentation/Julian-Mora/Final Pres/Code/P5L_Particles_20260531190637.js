// {"P5LIVE":{"name":"Particles","mod":"1780254397264"}} 

// no p5sound
// v6 — čestice
// Perlin noise čestice po cijelom ekranu, vođene visokim frekvencijama

let libs = ["https://unpkg.com/tone"]

let mic, fft
let t = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100, 100)
  background(0, 0, 5)

  mic = new Tone.UserMedia()
  fft = new Tone.FFT(64)
  mic.connect(fft)
  mic.open()
}

function draw() {
  background(0, 0, 5, 12)

  let spectrum = fft.getValue()
  let highs = max(0, map(spectrum[floor(spectrum.length * 0.6)], -120, 0, 0, 1))
  t += 0.01

  let numP = floor(map(highs, 0, 1, 5, 60))
  for (let i = 0; i < numP; i++) {
    let x = noise(i * 0.4, t) * width
    let y = noise(i * 0.4 + 99, t) * height
    let sz = map(highs, 0, 1, 1, 6)
    noStroke()
    fill(35, 70, 95, map(highs, 0, 1, 15, 90))
    ellipse(x, y, sz, sz)
  }
}