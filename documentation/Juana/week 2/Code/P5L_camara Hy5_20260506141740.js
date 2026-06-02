// {"P5LIVE":{"name":"camara Hy5","mod":1778077060721}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

s0.initCam()
src(s0)	.modulate(noize(20, 3))
.kaleid(6)
.out()


// osc(50, 0.1, 1.5)
//   .modulate(src(o0).scale(0.95), 0.15)
//   .out(o0)


// src(s0)
// 	.modulate(noize())
// 	.out()
// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	circle(mouseX, mouseY, 100)
}