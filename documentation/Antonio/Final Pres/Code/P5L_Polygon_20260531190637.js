// {"P5LIVE":{"name":"Polygon","mod":"1780254397264"}} 

// no p5sound
// v5 — poligon
// rotirajući heksagon koji diše s mid frekvencijama

let libs = ["https://unpkg.com/tone"]

let mic, fft
let t = 0

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100, 100)
  angleMode(DEGREES)
  background(0, 0, 5)

  mic = new Tone.UserMedia()
  fft = new Tone.FFT(64)
  mic.connect(fft)
  mic.open()
}

function draw() {
  background(0, 0, 5, 12)

  let spectrum = fft.getValue()
  let mids = max(0, map(spectrum[floor(spectrum.length * 0.18)], -120, 0, 0, 1))
  t += 0.5

  let sides = 6
  let baseR = min(width, height) * 0.2 + mids * 80

  push()
  translate(width / 2, height / 2)
  for (let k = 0; k < 4; k++) {
    let r = baseR - k * 25
    if (r <= 0) continue
    noFill()
    stroke(35, 65, 95, map(k, 0, 3, 70, 10))
    strokeWeight(map(k, 0, 3, 1.5, 0.3))
    push()
    rotate(t * 0.15 + k * (360 / sides / 2))
    beginShape()
    for (let i = 0; i <= sides; i++) {
      vertex(cos(i * 360 / sides) * r, sin(i * 360 / sides) * r)
    }
    endShape(CLOSE)
    pop()
  }
  pop()
}