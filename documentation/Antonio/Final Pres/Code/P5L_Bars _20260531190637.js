// {"P5LIVE":{"name":"Bars ","mod":"1780254397264"}} 

// no p5sound
// v3 — trake
// FFT trake koje rastu odozdo, samo bas frekvencije

let libs = ["https://unpkg.com/tone"]

let mic, fft

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
}