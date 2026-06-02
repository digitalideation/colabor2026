// noprotect

let t      = 0
let thresh = 15  // ← THIS [1–80] lower: reacts to everything · higher: only loud peaks

function setup() {
	createCanvas(windowWidth, windowHeight)
	setupAudio(true)
	angleMode(DEGREES)
	textFont('monospace')
}

function draw() {
	updateAudio()
	if (amp > thresh) t += amp * 0.005  // ← 0.005 [0.0005–0.03] lower: slow motion · higher: frenetic
	background(10, 8, 6, 30)            // ← 30 [3–255] lower: long ghost trails · higher: no trails
	if (amp < thresh) return

	kick()
	// bass()
	// wave()
	// keys()
	// hats()

	// voice functions — stack them or swap them
	// voiceFloat()    — words drift organically across screen
	// voiceGrid()     — words locked to a grid, flash with audio
	// voiceTicker()   — words scroll horizontally like a news ticker
	// voicePulse()    — one big word at center, jumps on beat
	// voiceRain()     — words fall from top like rain
}

// KICK — expanding rings, driven by sub-bass
function kick() {
	let K  = fftEase[2]   // ← 2 [0–15] lower: reacts to kick/sub · higher: reacts to mid-bass
	let cx = width / 2
	let cy = height / 2
	for (let i = 0; i < 5; i++) {  // ← 5 [1–20] lower: minimal · higher: dense overlapping rings
		let phase = (t * 0.018   // ← 0.018 [0.002–0.06] lower: slow heavy pulse · higher: fast strobe
		             + i * 0.2)  // ← 0.2 [0.05–0.5] lower: rings bunched · higher: evenly spread
		             % 1
		let r = phase * min(width, height) * 1.2  // ← 1.2 [0.3–2.5] lower: tight rings · higher: bleed off screen
		let al = (1 - phase) * K
		noFill()
		stroke(230, 140, 45, al)
		strokeWeight(map(phase, 0, 1, 3, 0.3))
		ellipse(cx, cy, r * 2, r * 2)
	}
}

// BASS — VU meter bars from the bottom, driven by bass
function bass() {
	let n = 48  // ← 48 [4–200] lower: chunky blocks · higher: fine resolution
	for (let i = 0; i < n; i++) {
		let bin = floor(map(i, 0, n, 2, fftEase.length * 0.12))  // ← 0.12 [0.04–0.35] lower: only deep bass · higher: includes mids
		let h   = (fftEase[bin] / 255) * height * 0.8            // ← 0.8 [0.1–2.0] lower: short bars · higher: bars overflow screen
		let al  = map(i, 0, n, 180, 60)                          // ← 180 left [50–255] · 60 right [0–255] brightness gradient L→R
		noStroke()
		fill(230, 140, 45, al)
		rect(i * (width / n), height, width / n - 1, -h)
	}
}

// WAVE — waveform as a flowing curve
function wave() {
	noFill()
	stroke(230, 140, 45, 180)  // ← 180 [30–255] lower: ghost line · higher: solid bright line
	strokeWeight(1.5)           // ← 1.5 [0.3–8] lower: hair thin · higher: bold brushstroke
	beginShape()
	for (let i = 0; i < waveformEase.length; i++) {
		let x = map(i, 0, waveformEase.length, 0, width)
		let y = height * 0.5           // ← 0.5 [0.0–1.0] moves line up or down the screen
		      + waveformEase[i]
		      * height * 0.25          // ← 0.25 [0.02–0.8] lower: flat calm · higher: wild chaotic wave
		curveVertex(x, y)
	}
	endShape()
}

// KEYS — breathing polygon, driven by mids
function keys() {
	let M     = fftEase[floor(fftEase.length * 0.18)]  // ← 0.18 [0.03–0.6] lower: bass drives it · higher: hi-hats drive it
	let cx    = width / 2
	let cy    = height / 2
	let sides = 6                          // ← 6 [3–12] 3: triangle · 4: square · 6: hex · 12: near-circle
	let r     = min(width, height) * 0.25  // ← 0.25 [0.05–0.6] base size when silent
		        + M * 0.6                  // ← 0.6 [0.05–3.0] lower: barely reacts · higher: explodes with audio
	push()
	translate(cx, cy)
	for (let k = 0; k < 4; k++) {  // ← 4 [1–10] lower: single clean shape · higher: dense onion rings
		noFill()
		stroke(230, 140, 45, map(k, 0, 3, 160, 15))
		strokeWeight(map(k, 0, 3, 1.5, 0.3))
		push()
		rotate(t * 0.15               // ← 0.15 [0–1.0] 0: frozen · higher: spins fast
		       + k * (360 / sides / 2))
		beginShape()
		for (let i = 0; i <= sides; i++) {
			vertex(
				cos(i * 360 / sides) * (r - k * 28),  // ← 28 [5–80] lower: layers overlap · higher: layers spread apart
				sin(i * 360 / sides) * (r - k * 28)
			)
		}
		endShape(CLOSE)
		pop()
	}
	pop()
}

// HATS — scattered dots, driven by hi-hats
function hats() {
	let H = fftEase[floor(fftEase.length * 0.6)]  // ← 0.6 [0.4–0.95] lower: picks up mids too · higher: only cymbals/air
	let n = floor(H * 0.5) + 3                    // ← 0.5 [0.1–2.0] lower: sparse dots · higher: packed rain
	for (let i = 0; i < n; i++) {
		let x  = noise(i * 0.4, t * 0.008) * width              // ← 0.008 [0.001–0.04] lower: frozen · higher: fast drift
		let y  = noise(i * 0.4 + 99, t * 0.008) * height * 0.5  // ← 0.5 [0.1–1.0] lower: top strip only · higher: full screen
		let sz = H * 0.02 + 1                                    // ← 0.02 [0.005–0.12] lower: pixel dust · higher: big circles
		noStroke()
		fill(230, 140, 45, H)
		ellipse(x, y, sz, sz)
	}
}

let words = ['ankle','cassette','tinsel','foil','collarbone','loop','pulse','mono']
// ↑ shared word list — change these for all voice functions at once

// ─────────────────────────────────────────────────────────────────
// VOICE FLOAT
// words drift organically across the screen using noise
// fftEase[mids] → text size   amp → opacity
// ─────────────────────────────────────────────────────────────────
function voiceFloat() {
	let M = fftEase[floor(fftEase.length * 0.18)] // mids → text size
	for (let i = 0; i < 12; i++) {  // ← 12 [1–50] number of words on screen
		let s = t * 0.006            // ← 0.006 [0–0.025] drift speed — t driven by amp
		      + i * 0.4              // i → unique offset per word
		let x = noise(s, i * 0.3) * width   // noise → organic x position
		let y = noise(i * 0.3, s + 7) * height  // +7 decouples y from x
		noStroke()
		fill(230, 140, 45, amp * 0.6)  // amp → opacity, vanish in silence ← 0.6 [0.1–2.0]
		textSize(10 + M * 0.15)        // ← base 10 [6–40] + mids expansion 0.15 [0–0.8]
		text(words[i % words.length], x, y)
	}
}

// ─────────────────────────────────────────────────────────────────
// VOICE GRID
// words locked to a grid, each one flashes with its own fft bin
// fftEase[per cell] → opacity of each word individually
// ─────────────────────────────────────────────────────────────────
function voiceGrid() {
	let cols = 6   // ← 6 [2–12] columns in the grid
	let rows = 4   // ← 4 [2–8]  rows in the grid
	let cw   = width / cols    // cell width
	let ch   = height / rows   // cell height
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			let idx = r * cols + c                          // word index
			let bin = floor(map(idx, 0,                    // maps each cell to a unique fft bin
			          cols * rows, 0, fftEase.length * 0.5))
			let al  = fftEase[bin] * 1.2                   // fftEase[bin] → each word flashes independently
			let x   = cw * c + cw * 0.5                    // center of cell x
			let y   = ch * r + ch * 0.5                    // center of cell y
			textAlign(CENTER, CENTER)
			noStroke()
			fill(230, 140, 45, al)
			textSize(14 + fftEase[bin] * 0.08)             // fftEase → word grows when its bin hits ← 0.08 [0–0.3]
			text(words[idx % words.length], x, y)
		}
	}
	textAlign(LEFT, BASELINE)  // reset alignment
}

// ─────────────────────────────────────────────────────────────────
// VOICE TICKER
// words scroll horizontally like a news ticker
// amp → scroll speed   fftEase[mids] → text size
// ─────────────────────────────────────────────────────────────────
function voiceTicker() {
	let M      = fftEase[floor(fftEase.length * 0.18)] // mids → text size
	let sz     = 18 + M * 0.2          // ← base 18 [8–60] + mids expansion 0.2 [0–0.5]
	let gap    = 80                    // ← 80 [20–200] space between words in px
	let speed  = t * 2.5               // ← 2.5 [0.5–8] scroll speed — t driven by amp
	let total  = words.length * gap    // total width of one word cycle
	textSize(sz)
	textAlign(LEFT, CENTER)
	noStroke()
	for (let i = 0; i < words.length * 2; i++) {  // *2 to fill screen with no gaps
		let x = (i * gap - speed % total + total) % (total * 2) - gap  // looping x position
		let y = height * 0.5           // ← 0.5 [0–1.0] vertical position of ticker
		fill(230, 140, 45, amp * 0.8)  // amp → opacity ← 0.8 [0.1–2.0]
		text(words[i % words.length], x, y)
	}
	textAlign(LEFT, BASELINE)
}

// ─────────────────────────────────────────────────────────────────
// VOICE PULSE
// one big word at center, changes on loud transients
// amp → size jump   fftEase[sub] → which word shows
// ─────────────────────────────────────────────────────────────────
let pulseIdx = 0       // current word index
let lastAmp  = 0       // previous amp value for transient detection
function voicePulse() {
	let M  = fftEase[floor(fftEase.length * 0.18)]  // mids → extra size
	let sz = 40 + amp * 0.8 + M * 0.3              // amp → word jumps in size ← 0.8 [0.1–2.0]
	if (amp - lastAmp > 30) pulseIdx++              // ← 30 [10–80] transient threshold — changes word on hit
	lastAmp = amp
	textAlign(CENTER, CENTER)
	noStroke()
	fill(230, 140, 45, amp * 1.2)                   // amp → opacity ← 1.2 [0.3–3.0]
	textSize(sz)                                     // ← base 40 [10–120]
	text(words[pulseIdx % words.length], width / 2, height / 2)
	textAlign(LEFT, BASELINE)
}

// ─────────────────────────────────────────────────────────────────
// VOICE RAIN
// words fall from top, speed and size driven by audio
// amp → fall speed   fftEase[mids] → size   amp → opacity
// ─────────────────────────────────────────────────────────────────
function voiceRain() {
	let M = fftEase[floor(fftEase.length * 0.18)]  // mids → text size
	for (let i = 0; i < 10; i++) {  // ← 10 [2–30] number of falling words
		let x  = noise(i * 0.9) * width             // i → fixed random x lane per word
		let y  = (t * 1.5 * (i * 0.3 + 0.5))       // t (amp) → falls faster with louder audio ← 1.5 [0.2–5.0]
		         % height                            // wraps back to top when off screen
		let sz = 12 + M * 0.12                      // ← base 12 [6–40] + mids expansion 0.12 [0–0.5]
		let al = map(y, 0, height, 50, 220)         // y → fades in as it falls
		noStroke()
		fill(230, 140, 45, al * (amp / 100))        // amp → rain appears with volume ← /100 sensitivity
		textSize(sz)
		text(words[i % words.length], x, y)
	}
}
