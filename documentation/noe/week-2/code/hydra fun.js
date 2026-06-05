// {"P5LIVE":{"name":"_hy5_p5_hydra_003","mod":1779731798024}} 



let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']
let video;
// sandbox - start
H.pixelDensity(2)

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5

noise(2,0.3)
.thresh(0.5,0.04)
.color(0.5,15,12)
.modulatePixelate(noise(5,0.3),100)
.brightness(amount=0.1)
.modulate(noise(3,0).add(gradient(),-1),1)
.rotate(angle=5,speed=0.2)
.contrast(amount=0.9)
.colorama(amount=0.005)
.invert(amount=1)
.out()

// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {

}