// {"P5LIVE":{"name":"Full","mod":"1780254397264"}} 

// no p5sound
// v7 — sve zajedno
// prstenovi + trake + waveform + poligon + čestice

let libs = ["https://unpkg.com/tone"]

let mic, meter, fft, waveform
let rings = []
let t = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100, 100)
  angleMode(DEGREES)
  background(0, 0, 5)

  mic = new Tone.UserMedia()
  meter = new Tone.Meter()
  fft = new Tone.FFT(64)
  waveform = new Tone.Waveform(256)
  mic.connect(meter)
  mic.connect(fft)
  mic.connect(waveform)
  mic.open()
}

function draw() {
  background(0, 0, 5, 12)

  let vol = max(0, meter.getValue() + 100) / 100
  let spectrum = fft.getValue()
  let wave = waveform.getValue()
  let mids = max(0, map(spectrum[floor(spectrum.length * 0.18)], -120, 0, 0, 1))
  let highs = max(0, map(spectrum[floor(spectrum.length * 0.6)], -120, 0, 0, 1))
  t += 0.01

  // --- trake odozdo ---
  let n = 48
  for (let i = 0; i < n; i++) {
    let idx = floor(map(i, 0, n, 0, spectrum.length * 0.4))
    let h = map(spectrum[idx], -120, 0, 0, height * 0.7)
    h = max(0, h)
    let al = map(i, 0, n, 70, 20)
    noStroke()
    fill(35, 75, 90, al)
    rect(i * (width / n), height, width / n - 2, -h)
  }

  // --- waveform ---
  noFill()
  stroke(35, 60, 95, 60)
  strokeWeight(1.5)
  beginShape()
  for (let i = 0; i < wave.length; i++) {
    let x = map(i, 0, wave.length, 0, width)
    let y = map(wave[i], -1, 1, height * 0.35, height * 0.65)
    curveVertex(x, y)
  }
  endShape()

  // --- poligon ---
  let sides = 6
  let baseR = min(width, height) * 0.18 + mids * 60
  push()
  translate(width / 2, height / 2)
  for (let k = 0; k < 4; k++) {
    let r = baseR - k * 22
    if (r <= 0) continue
    noFill()
    stroke(35, 65, 95, map(k, 0, 3, 60, 10))
    strokeWeight(map(k, 0, 3, 1.5, 0.3))
    push()
    rotate(t * 15 + k * (360 / sides / 2))
    beginShape()
    for (let i = 0; i <= sides; i++) {
      vertex(cos(i * 360 / sides) * r, sin(i * 360 / sides) * r)
    }
    endShape(CLOSE)
    pop()
  }
  pop()

  // --- čestice ---
  let numP = floor(map(highs, 0, 1, 3, 30))
  for (let i = 0; i < numP; i++) {
    let x = noise(i * 0.4, t) * width
    let y = noise(i * 0.4 + 99, t) * height * 0.5
    let sz = map(highs, 0, 1, 1, 5)
    noStroke()
    fill(35, 70, 95, map(highs, 0, 1, 10, 80))
    ellipse(x, y, sz, sz)
  }

  // --- prstenovi ---
  if (vol > 0.05) {
    rings.push({
      r: 10,
      alpha: map(vol, 0.05, 1, 15, 60),
      speed: map(vol, 0.05, 1, 2, 7)
    })
  }
  for (let i = rings.length - 1; i >= 0; i--) {
    let rng = rings[i]
    noFill()
    stroke(35, 65, 95, rng.alpha)
    strokeWeight(map(rng.r, 0, min(width, height), 2, 0.2))
    ellipse(width / 2, height / 2, rng.r * 2, rng.r * 2)
    rng.r += rng.speed
    rng.alpha -= 0.6
    if (rng.alpha <= 0) rings.splice(i, 1)
  }
}