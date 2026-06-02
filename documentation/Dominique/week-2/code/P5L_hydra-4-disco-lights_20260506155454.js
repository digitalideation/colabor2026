// {"P5LIVE":{"name":"hydra-4-disco-lights","mod":1778082894439}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// ->Hydra in sandbox
// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra = init -> camera
P5.toggle(0) // optionally hide p5

shape(200, 0.5, 1.5)
	.scale(0.5, 0.5)
	.color([0.5, 2].smooth(1), 0.3, 0)
	.repeat(2,2)
	.modulateScale(osc(3,0.5), -0.6)
	.add(o0, 0.5)
	.scale(0.9)
.out()
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