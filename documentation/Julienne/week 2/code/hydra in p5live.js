let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']
// sandbox - start - inside sandbox we write hydra
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5
//s0 = p5
src(s0)
	.mult(gradient(3))
	.modulate(noise([10,100,2]))
	//.kaleid(10,0.2)
	//.scrollY(1, 0.2)
	.brightness(0.5)
	//.scale(() => 1 + a.fft[3])
	.modulateRepeatY(noise(3))
	.pixelate(30)
	.scrollY(1,0.3)
	.out(o1)
render(o1)
// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	// clear()
	ellipse(mouseX,mouseY,200)
	noStroke()

}