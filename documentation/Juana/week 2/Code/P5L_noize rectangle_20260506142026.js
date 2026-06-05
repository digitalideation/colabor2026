// {"P5LIVE":{"name":"noize rectangle","mod":1778077226739}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

osc(10,0.3,2)
	.mask(shape(4))
.out(o0)

src(o0)
  .diff(noize(10))
.out(o1)

render(o1)


// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	// circle(mouseX, mouseY, 10)
}