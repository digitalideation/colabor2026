#FinalPresentation

```
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
```

```
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
```

```
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
```

```
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
```

```
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
```

```
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
```

```
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
```

```
// {"P5LIVE":{"name":"New_main_code A&J","mod":"1779976671693"}}

// noprotect

let t         = 0
let thresh    = 15    // ← [1–80] lower: reacts to everything · higher: only loud peaks
let waveCount = 200   // ← [1–200] number of wave lines

function setup() {
	createCanvas(windowWidth, windowHeight)
	setupAudio(true)
	angleMode(DEGREES)
	textFont('monospace')
}

function draw() {
	updateAudio()
	if (amp > thresh) t += amp * 0.003  // ← [0.0005–0.03] animation speed
	background(10, 0, 0, 0)            // ← 30 [3–255] trail length
	if (amp < thresh) return

	kick()
	bass()
	 wave()
	//keys()

	 //hats()

	/////////////////WORDS/////////////////

	 stop()
	//pushpull()
	 //serotonin()
	 //outofsystem()
}

////////////////////////////KICK////////////////////////////
// reacts to HIGHS — fftEase[0.75]

function kick() {
	let K  = fftEase[floor(fftEase.length * 0.75)] / 255  // highs 0-1
	let n  = floor(K * 20) + 1    // ← K controls ring count: silence=1 · peak=21
	let cx = width / 2
	let cy = height / 2
	for (let i = 0; i < n; i++) {
		let phase = (t * 0.018 * (1 + K * 4)  // ← K speeds up expansion [1–8]
		          + i / n) % 1                  // i/n spreads rings evenly
		let r  = phase * min(width, height) * 1.2 * K  // ← K scales radius
		let al = K * 255                               // ← full bright when highs hit
		noFill()
		stroke(230, 140, 45, al)
		strokeWeight(map(phase, 0, 1, 3, 0.3))
		ellipse(cx, cy, r * 2, r * 2)
	}
}

////////////////////////////BASS////////////////////////////
// reacts to LOWS — fftEase[0–0.10]

function bass() {
	let n = 48  // ← [4–200] number of bars
	for (let i = 0; i < n; i++) {
		let bin = floor(map(i, 0, n, 0, fftEase.length * 0.10))  // ← [0.04–0.20] bass range
		let h   = (fftEase[bin] / 255) * height * 0.8            // ← [0.1–2.0] max bar height
		let al  = map(i, 0, n, 10, 10)                          //bar brigh
		noStroke()
		fill(230, 140, 45, al)
		rect(i * (width / n), height, width / n - 1, -h)
	}
}

////////////////////////////WAVE////////////////////////////
// reacts to HIGHS — fftEase[0.75]

function wave() {
	let H = fftEase[floor(fftEase.length * 0.75)] / 255  // ← highs 0-1, bin [0.4–0.95]
	for (let j = 0; j < waveCount; j++) {
		let yPos   = map(j, 0, waveCount, 0.2, 0.8)               // distributes top to bottom
		let ampMul = map(j, 0, waveCount, 0.1, 0.3) * (1 + H * 3) // ← H inflates wave height [1–8]
		let al     = map(j, 0, waveCount, 60, 180) * H             // ← H controls brightness
		noFill()
		stroke(100, 140, 100, al)
		strokeWeight(1.5)                                           // ← [0.3–8]
		beginShape()
		for (let i = 0; i < waveformEase.length; i++) {
			let x = map(i, 0, waveformEase.length, 0, width)
			let y = height * yPos + waveformEase[i] * height * ampMul
			curveVertex(x, y)
		}
		endShape()
	}
}

////////////////////////////KEYS////////////////////////////
// reacts to MIDS — fftEase[0.18]

function keys() {
	let M     = fftEase[floor(fftEase.length * 0.18)]  // ← mids bin [0.03–0.6]
	let cx    = width / 2
	let cy    = height / 2
	let sides = 3                           // ← [3–12] 3: triangle · 4: square · 6: hex · 12: circle
	let r     = min(width, height) * 0.25  // ← [0.05–0.6] base radius
	          + M * 0.6                    // ← [0.05–3.0] mids expand radius
	push()
	translate(cx, cy)
	for (let k = 0; k < 4; k++) {          // ← [1–10] concentric layers
		noFill()
		stroke(230, 140, 45, map(k, 0, 3, 160, 15))
		strokeWeight(map(k, 0, 3, 1.5, 0.3))
		push()
		rotate(t * 0.15 + k * (360 / sides / 2))  // ← [0–1.0] rotation speed
		beginShape()
		for (let i = 0; i <= sides; i++) {
			vertex(
				cos(i * 360 / sides) * (r - k * 28),  // ← [5–80] layer gap
				sin(i * 360 / sides) * (r - k * 28)
			)
		}
		endShape(CLOSE)
		pop()
	}
	pop()
}

////////////////////////////HATS////////////////////////////
// reacts to HIGHS — fftEase[0.6]

function hats() {
	let H = fftEase[floor(fftEase.length * 0.6)]  // ← bin [0.4–0.95]
	let n = floor(H * 0.5) + 3                    // ← [0.1–2.0] dot density
	for (let i = 0; i < n; i++) {
		let x  = noise(i * 0.4, t * 0.008) * width              // ← [0.001–0.04] drift speed
		let y  = noise(i * 0.4 + 99, t * 0.008) * height * 0.5  // ← [0.1–1.0] vertical zone
		let sz = H * 0.02 + 1                                    // ← [0.005–0.12] dot size
		noStroke()
		fill(230, 140, 45, H)  //////COLOR
		ellipse(x, y, sz, sz)
	}
}

////////////////////////////WORDS////////////////////////////

function stop() {
	let M     = fftEase[floor(fftEase.length * 0.18)]
	let words = ['STOP!!!!!']
	for (let i = 0; i < 12; i++) {
		let s = t * 0.006 + i * 0.4
		let x = noise(s, i * 0.3) * width
		let y = noise(i * 0.3, s + 7) * height
		noStroke()
		fill(230, 140, 45, amp * 0.6)  //////COLOR
		textSize(100 + M * 0) //POSITION OF TEXT
		text(words[i % words.length], x, y)
	}
}

function pushpull() {
	let M     = fftEase[floor(fftEase.length * 0.18)]
	let words = ['PULLING','PUSHING']
	for (let i = 0; i < 12; i++) {
		let s = t * 0.006 + i * 0.4
		let x = noise(s, i * 0.3) * width
		let y = noise(i * 0.3, s + 7) * height
		noStroke()
		fill(230, 0, 0, amp * 0.6)  //////COLOR
		textSize(50 + M * 0) //POSITION OF TEXT
		text(words[i % words.length], x, y)
	}
}

function outofsystem() {
	let M     = fftEase[floor(fftEase.length * 0.18)]
	let words = ['I','CANT','GET','IT','OUT','OF','MY','SYSTEM']
	for (let i = 0; i < 12; i++) {
		let s = t * 0.006 + i * 0.4
		let x = noise(s, i * 0.3) * width
		let y = noise(i * 0.3, s + 7) * height
		noStroke()
		fill(230, 140, 45, amp * 0.6)  //////COLOR
		textSize(50 + M * 0.15) //POSITION OF TEXT
		text(words[i % words.length], x, y)
	}
}

function serotonin() {
	let M     = fftEase[floor(fftEase.length * 0.18)]
	let words = ['MY','SWEET','SEROTONIN','RUSHES']
	for (let i = 0; i < 12; i++) {
		let s = t * 0.006 + i * 0.4
		let x = noise(s, i * 0.3) * width
		let y = noise(i * 0.3, s + 7) * height
		noStroke()
		fill(255, 0, 0, amp * 0.6) //////COLOR
		textSize(50 + M * 0) //POSITION OF TEXT
		text(words[i % words.length], x, y)
	}
}

/*
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/
```