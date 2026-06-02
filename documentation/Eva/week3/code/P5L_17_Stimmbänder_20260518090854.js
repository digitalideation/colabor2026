// {"P5LIVE":{"name":"17_Stimmbänder","mod":1779095334543}} 

let libs = [
	'https://unpkg.com/hydra-synth',
	'includes/libs/hydra-synth.js',
	'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js',
	'includes/libs/hy5.js'
]

H.pixelDensity(1)

//audio-reactive values
let bass = () => a.fft[0] * 0.01
let mid = () => a.fft[1] * 0.02
let high = () => a.fft[2] * 0.02

osc(
		() => 20 + bass() * 100, 
		0.02,
		() => 0.3 + high() * 0.2
	)
	.color(
		() => 0.3 + high(),
		0.1,
		() => 0.8 + mid()
	)
	.rotate(
		() => 0.1 + bass() * 0.4,
		0.1
	)
	.modulate(
		osc(
		() => 30 + mid() * 20)
		.rotate(0.5)
		.add(o0, 0.1),
		() => 0.05 + high() * 0.2
	)
	.add(
		osc(
	() => 20 + high() * 20,
	0.01,
	1
	).color(0.3, 0.1, 0.7)
	)
	.out(o0)

osc(
		() => 40 + bass() * 90,
		0.05,
		0.7
	)
	.color(
	0.9,0.4,
	() => 0.5 + bass(),
		
	)
	.diff(o0)
	.modulate(
	o1,
	() => 0.1 + mid() * 0.1
	)
	.out(o1)

render(o1)

let mic

function setup() {
	createCanvas(windowWidth, windowHeight)
	mic = new p5.AudioIn()
	mic.start()
	userStartAudio()
}

function draw() {

}