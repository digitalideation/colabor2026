// {"P5LIVE":{"name":"Week 2, 2","mod":1779129420662}} 

// {"P5LIVE":{"name":"_hy5_p5_hydra_001","mod":1778079238913}} 

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


osc(27, 0.3, 3.9).kaleid(4).out(o0)
noise(2).pixelate(27, 12).out(o1)

render(o0)    // show stripes
render(o)    // show noise

// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	circle(mouseX, mouseY, 100)
}