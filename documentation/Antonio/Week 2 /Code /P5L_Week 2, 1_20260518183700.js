// {"P5LIVE":{"name":"Week 2, 1","mod":1779129420662}} 

// {"P5LIVE":{"name":"_hy5_p5_hydra_001","mod":1778077029543}} 

/*
	_HY5_p5_hydra // cc teddavis.org 2024
	pass p5 into hydra
	docs: https://github.com/ffd8/hy5
*/

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5
shape(4, 0.5, 0.1)
osc(27).rotate(10)
.kaleid(4).out();
// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	circle(mouseX, mouseY, 100)
}