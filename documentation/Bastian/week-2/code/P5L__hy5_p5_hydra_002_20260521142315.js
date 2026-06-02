// {"P5LIVE":{"name":"_hy5_p5_hydra_002","mod":1779373396014}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy
s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

src(s0)
	.modulateScale(noize(3))
	.invert()
//shape(10). scroll(1, 0,)
	.out()
// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	//clear()
	circle(mouseX, mouseY, 300)
}