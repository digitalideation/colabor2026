// {"P5LIVE":{"name":"hydra-typography_pixel_001","mod":1778081183737}} 

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
	.pixelate(80)
	.modulate(noize(2, 1))
	.repeat([1, 3, 5], [1, 2, 3] )
	.out(o0)
	
src(o0)
	.modulate(osc(2.5,1.1))
	.out(o2)
	
render(o2)
	
// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
	
	background(255)
}

function draw() {
	// clear()
	frameRate(0.99)
	let options = ["rgb(236, 0, 168)", "rgb(0, 15, 255)", "rgb(169, 0, 255)"]
	let chosenText = random(options)
	
	let options2 = ["rgb(0, 208, 58)", "rgb(255, 144, 3)", "rgb(213, 243, 0)"]
	let chosenBg = random(options2)
	background(chosenBg)
	fill(chosenText)
	textAlign(CENTER, CENTER)
	textSize(800)
	text('sali', width / 2, height / 2)
}