// {"P5LIVE":{"name":"circles_in_motion_002","mod":1779805660577}} 



let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']

// sandbox - start
H.pixelDensity(2) // 2x = retina, set <= 1 if laggy

s0.initP5() // send p5 to hydra
P5.toggle(0) // optionally hide p5


osc(10,[0.1,0.1,0.1,0.1,-0.1],1)
.colorama(3)
.modulate(s0)
.mask(s0)
.repeatX(1, [.5,()=> time%1])
.repeatY(10, ()=> time%10*.1)
.pixelate(300,150)
.rotate(()=>time%100*.1)

	.out(o0)

src(o0)

.out(o2)


// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
	background('#00f')
	frameRate(30)
}

function draw() {
//clear()
	//noStroke()
	circle(width/2, height/2, height)


}