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
//Hintergrund erstellen
osc(107, 0, 0.7)
  .color(0.4, 1, 1)
  .rotate(0, -0.08)
  .modulateRotate(o1, 0.4)
  .out(o0)
//src o0 nehmen und verändern und dann Maske mit Form hinzufügen
src(o0)
  .add(osc(33))
  .modulateRepeat(noise(3))
  .diff(o0)
//Zwei Dreiecke ergeben Stern
  .mask(shape(3).add(shape(3).rotate(1.3)).rotate(0, 0.08))
  .out(o1)
src(o1).osc(20,10,4).out(o2)




// sandbox - end


function setup() {
	createCanvas(windowWidth, windowHeight)
}

