// {"P5LIVE":{"name":"hydra-3","mod":1778082690859}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// ->Hydra in sandbox
// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra = init -> camera
P5.toggle(0) // optionally hide p5

osc(10, 0.1, () => mouse.x * 0.1)
	.modulate(noise(3)
	.sub(gradient()),6)
	.mask(shape(1))



.out(o0)



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