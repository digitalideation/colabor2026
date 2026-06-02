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