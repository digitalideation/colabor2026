// {"P5LIVE":{"name":"new_001","mod":1778079425612}} 


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

src(s0)
	.modulate(noize(2,1)).scrollY(1, .75).pixelate(150)
	.out()
// sandbox - end

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}
function draw() {
	background(20,30,255)
	textAlign(CENTER,CENTER)
	fill(255,0,100)
	textSize(400)
	text('Hallo',width/2,height/2)
	
}