// {"P5LIVE":{"name":"Waves","mod":"1780254397264"}} 

// no p5sound
// v4 — waveform
// krivulja zvučnog vala kroz sredinu ekrana

let libs = ["https://unpkg.com/tone"]

let mic, waveform

function setup() {
  createCanvas(windowWidth, windowHeight)
  colorMode(HSB, 360, 100, 100, 100)
  background(0, 0, 5)

  mic = new Tone.UserMedia()
  waveform = new Tone.Waveform(256)
  mic.connect(waveform)
  mic.open()
}

function draw() {
  background(0, 0, 5, 12)

  let wave = waveform.getValue()

  noFill()
  stroke(35, 60, 95, 80)
  strokeWeight(1.5)
  beginShape()
  for (let i = 0; i < wave.length; i++) {
    let x = map(i, 0, wave.length, 0, width)
    let y = map(wave[i], -1, 1, height * 0.25, height * 0.75)
    curveVertex(x, y)
  }
  endShape()
}