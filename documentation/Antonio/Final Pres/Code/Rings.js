// {"P5LIVE":{"name":"new_019","mod":1780254397264}} 

// no p5sound
// v2 — prstenovi
// prstenovi koji se šire iz centra kad ima zvuka

let libs = ["https://unpkg.com/tone"]

let mic, meter
let rings = []

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

  let vol = max(0, meter.getValue() + 100) / 100

  if (vol > 0.05) {
    rings.push({
      r: 10,
      alpha: map(vol, 0.05, 1, 20, 80),
      speed: map(vol, 0.05, 1, 2, 8)
    })
  }

  for (let i = rings.length - 1; i >= 0; i--) {
    let rng = rings[i]
    noFill()
    stroke(35, 70, 95, rng.alpha)
    strokeWeight(map(rng.r, 0, min(width, height), 2, 0.3))
    ellipse(width / 2, height / 2, rng.r * 2, rng.r * 2)
    rng.r += rng.speed
    rng.alpha -= 0.8
    if (rng.alpha <= 0) rings.splice(i, 1)
  }
}