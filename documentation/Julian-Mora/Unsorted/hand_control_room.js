// {"P5LIVE":{"name":"hand_control_room"}}
let libs = [
	"https://unpkg.com/ml5@1/dist/ml5.min.js"
];

// ============================================================
// HAND CONTROL ROOM — instrumento visual controlado por manos
// ------------------------------------------------------------
// Usa ml5.js handPose para detectar tus dos manos por webcam
// y mapear gestos a los parámetros visuales. Los sliders HTML
// siguen ahí como respaldo: si no se ve ninguna mano, mandan
// los sliders; si aparece una mano, ella manda ese parámetro.
//
// MAPEO DE MANOS:
//   • Mano IZQUIERDA — posición X        → cols   (densidad)
//   • Mano IZQUIERDA — apertura dedos    → shake  (temblor)
//   • Mano DERECHA   — posición Y        → pulse  (latido)
//   • Mano DERECHA   — apertura dedos    → thick  (grosor)
//   • Distancia entre las dos manos      → trail  (estela)
//
// TECLADO:
//   1-4    paleta · f fill · s shape · h HUD
//   espacio flash · r reset
// ============================================================

// --- CÓMO CARGA ml5 ---
// El "let libs = [...]" de arriba es la sintaxis oficial de p5LIVE
// para cargar librerías externas por CDN. p5LIVE lo detecta y
// descarga la librería ANTES de ejecutar tu setup(). No la borres.
// Podés tipear "libs" + TAB en el editor para insertarlo automáticamente.

let handPose, video, hands = []
let sCols, sShake, sPulse, sThick, sTrail
let palette = 1, useFill = false, useCircle = false
let showHUD = true, flash = 0

const PALETTES = [
	[[255, 255, 255], [200, 200, 200]],
	[[255, 60, 120], [60, 200, 255], [255, 220, 0]],
	[[255, 80, 0], [120, 0, 255], [0, 255, 180]],
	[[40, 255, 40], [0, 100, 0], [200, 255, 200]]
]

function preload() {
	handPose = ml5.handPose({ flipped: true })
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	rectMode(CENTER)
	angleMode(DEGREES)
	// arranca la webcam (escondida, sólo la usamos para detección)
	video = createCapture(VIDEO, { flipped: true })
	video.size(640, 480)
	video.hide()
	handPose.detectStart(video, gotHands)
	buildSliders()
}

function buildSliders() {
	let y = 20
	sCols  = mkSlider(4,   40,  12,  1,   y); y += 38
	sShake = mkSlider(0,   60,  6,   1,   y); y += 38
	sPulse = mkSlider(0,   10,  3,   0.1, y); y += 38
	sThick = mkSlider(0.5, 8,   1.5, 0.1, y); y += 38
	sTrail = mkSlider(0,   255, 255, 1,   y)
}

function mkSlider(mn, mx, val, st, y) {
	let s = createSlider(mn, mx, val, st)
	s.position(20, y); s.style("width", "160px"); return s
}

// callback de ml5: guarda las manos detectadas
function gotHands(results) { hands = results }

function draw() {
	// resolver parámetros: manos sobrescriben sliders
	let p = resolveParams()

	noStroke()
	fill(0, p.trail)
	rect(width/2, height/2, width, height)

	if (flash > 0) {
		fill(255, flash); rect(width/2, height/2, width, height); flash -= 15
	}

	pulseGrid(p.cols, p.shake, p.pulse, p.thick)
	drawHandSkeleton()
	if (showHUD) drawHUD(p)
}

// lee manos y mezcla con sliders
function resolveParams() {
	let p = {
		cols:  sCols.value(),
		shake: sShake.value(),
		pulse: sPulse.value(),
		thick: sThick.value(),
		trail: sTrail.value()
	}
	let left = findHand("Left"), right = findHand("Right")

	if (left) {
		let palm = left.keypoints[0]            // base de la palma
		let scaled = palm.x / video.width       // 0..1 según posición X
		p.cols = floor(map(scaled, 0, 1, 4, 40))
		p.shake = map(pinchDist(left), 0, 200, 60, 0, true) // dedos cerrados = mucho temblor
	}
	if (right) {
		let palm = right.keypoints[0]
		let scaled = palm.y / video.height
		p.pulse = map(scaled, 0, 1, 10, 0)      // arriba = rápido, abajo = quieto
		p.thick = map(pinchDist(right), 0, 200, 0.5, 8, true)
	}
	if (left && right) {
		let d = dist(left.keypoints[0].x, left.keypoints[0].y,
		             right.keypoints[0].x, right.keypoints[0].y)
		p.trail = map(d, 50, 500, 5, 255, true)  // manos juntas = mucha estela
	}
	return p
}

// busca una mano por handedness ("Left" / "Right")
function findHand(side) {
	for (let h of hands) if (h.handedness === side) return h
	return null
}

// distancia entre pulgar (kp 4) e índice (kp 8) = "pinch"
function pinchDist(hand) {
	let t = hand.keypoints[4], i = hand.keypoints[8]
	return dist(t.x, t.y, i.x, i.y)
}

// grilla que tiembla y respira (igual que control_room)
function pulseGrid(cols, shake, pulse, thick) {
	let step = width / cols
	let beat = 0.5 + 0.5 * sin(frameCount * pulse)
	let cellSize = step * (0.4 + 0.5 * beat)
	strokeWeight(thick)
	for (let x = step/2; x < width; x += step) {
		for (let y = step/2; y < height; y += step) {
			let c = pickColor(x, y)
			stroke(c[0], c[1], c[2])
			if (useFill) fill(c[0], c[1], c[2], 80); else noFill()
			let ox = random(-shake, shake), oy = random(-shake, shake)
			if (useCircle) circle(x + ox, y + oy, cellSize)
			else            square(x + ox, y + oy, cellSize)
		}
	}
}

function pickColor(x, y) {
	let pal = PALETTES[palette - 1]
	return pal[(floor(x/50) + floor(y/50)) % pal.length]
}

// dibuja sólo los puntos y huesos de las manos detectadas
// (la webcam queda oculta, sólo se ve el "esqueleto" flotando)
function drawHandSkeleton() {
	// huesos: agrupa keypoints en cadenas de dedos
	const FINGERS = [
		[0,1,2,3,4],       // pulgar
		[0,5,6,7,8],       // índice
		[0,9,10,11,12],    // medio
		[0,13,14,15,16],   // anular
		[0,17,18,19,20]    // meñique
	]
	for (let h of hands) {
		// escalar coords de video (640x480) al canvas
		let sx = width / video.width, sy = height / video.height
		stroke(255, 200); strokeWeight(2); noFill()
		for (let finger of FINGERS) {
			beginShape()
			for (let id of finger) {
				let k = h.keypoints[id]
				vertex(k.x * sx, k.y * sy)
			}
			endShape()
		}
		// puntos en cada articulación
		noStroke(); fill(255)
		for (let k of h.keypoints) circle(k.x * sx, k.y * sy, 6)
	}
}

function drawHUD(p) {
	noStroke(); fill(0, 180); rect(width - 110, 130, 200, 260)
	fill(255); textFont("monospace"); textSize(12); textAlign(LEFT, TOP)
	let lines = [
		"hands   " + hands.length + "/2",
		"palette " + palette,
		"fill    " + (useFill ? "on" : "off"),
		"shape   " + (useCircle ? "circle" : "square"),
		"",
		"cols  " + nf(p.cols, 2, 0),
		"shake " + nf(p.shake, 2, 1),
		"pulse " + nf(p.pulse, 2, 1),
		"thick " + nf(p.thick, 2, 1),
		"trail " + nf(p.trail, 3, 0),
		"",
		"1-4 paleta · f fill",
		"s shape · h hud · space flash"
	]
	text(lines.join("\n"), width - 200, 20)
}

function keyPressed() {
	if (key >= "1" && key <= "4") palette = int(key)
	if (key === "f" || key === "F") useFill = !useFill
	if (key === "s" || key === "S") useCircle = !useCircle
	if (key === "h" || key === "H") showHUD = !showHUD
	if (key === " ") flash = 255
}
