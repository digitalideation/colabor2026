// {"P5LIVE":{"name":"hydra-1","mod":1778081478107}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// ->Hydra in sandbox
// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra = init -> camera
P5.toggle(0) // optionally hide p5

	// erstellt Oszillator (Striche):
	// Frequenz(Anz) / Bewegungsgeschwindigkeit / Farbraumverschiebung
	osc(40, 0.01, 1.5)
	// skaliert Bild abhängig von Bass > mehr Bass = grösseres Bild
	.scale(() => 1 + a.fft[0] * 0.5) 
	// verzerrt Signal mit Noise(wolkig) > abhängig von Mids
	.modulate(noise(3), () => a.fft[1] * 0.3) 
	// Kaleidoskop-Effekt > Anz der Segmente reagiert auf High-Mids (
	.kaleid(() => 3 + a.fft[2] * 5) 
	// // Farbverschiebung von Höhen (Treble)
	.hue(() => a.ff[3] * 5) 
	.out()

console.log(() => 3 + a.fft[2]*5)
// sandbox - end

// normal P5LIVE
function setup() {
	createCanvas(windowWidth, windowHeight)
}