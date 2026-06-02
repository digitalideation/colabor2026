// {"P5LIVE":{"name":"hydra-2","mod":1778082362980}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// ->Hydra in sandbox
// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra = init -> camera
P5.toggle(0) // optionally hide p5

	osc(40, 0.01, 5)
	.scale(() => 1 + a.fft[0] * 0.5) // bass
	.modulate(noise(3), () => a.fft[1] * 0.3) // mids
	.kaleid(() => 3 + a.fft[2] * 5) // hight mids
	.hue(() => a.ff[3] * 5) // treble
	.pixelate(100)
	.out()

console.log(() => 3 + a.fft[2]*5)
// sandbox - end

// normal P5LIVE
function setup() {
	createCanvas(windowWidth, windowHeight)
}

// function draw() {
// 	// clear()
// 	circle(mouseX, mouseY, 100)}

// Wenn Shift + s auf Tastatur gedrückt wird > Screenshot
function keyPressed(){
	if(key == 'SS') {
		save('drawing.png')
	}
}