// {"P5LIVE":{"name":"Audio Control 3D 2","mod":1780313781402}} 

/*	
	_audio_analysis // cc teddavis.org 2019-24
	
	revamp of P5LIVE's Audio snippet, now built-in the background!
	add snippet to other sketches: CTRL + SHIFT + A 
*/

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	a5.ease = .275 // customize ease speed (kleiner wert = smooth)
}

function draw() {
	background(0)
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()

	orbitControl()



	// reddish light; first 3 values are colour, rest is point (x,y,z) where it originates
	stroke(229, 138, 255)
	fill(138, 255, 151)

	//gives objects a 3d look by adding lights and shadows
	lights()
	directionalLight(0, 0, 255, -10, 10, 0)

	let number = 6
	let index = 0
	
	for(let x = 0; x < number; x++) {
		let posX = map(x, 0, number - 1, -width / 4, width / 4)
		for(let y = 0; y < number; y++) {
			let posY = map(y, 0, number - 1, -width / 4, width / 4)
			for(let z = 0; z < number; z++) {
				let posZ = map(z, 0, number - 1, -width / 4, width / 4)
				if(index % 2 === 0){
				cube(posX, posY, posZ, 40 + (fftEase[index%fftEase.length]*0.25), 1)
				}else{
					sph(posY,posY,posZ, 20 + (fftEase[index%fftEase.length]*0.25), 1)
				}
				index++
			}
		}
	}

}

function sph(x, y, z, size, rSpeed) {
	push()
	translate(x, y, z)
	rotateY(frameCount * 0.01 * rSpeed)
	sphere(size)
	pop()
}

function cube(x, y, z, size, rSpeed) {
	push()
	translate(x, y, z)
	rotateZ(frameCount * 0.01 * rSpeed)
	rotateY(frameCount * 0.01 * rSpeed)
	box(size)
	pop()
}

function trs(x, y, z, size, rSpeed) {
	push()
	translate(x, y, z)
	rotateY(frameCount * 0.01 * rSpeed)
	torus(size, 20,10,6)
	pop()
}

// /* fftEase */
// for(let i = 0; i < fftEase.length; i++) {
// 	let freq = fftEase[i]; // (0, 255)
// 	let x = map(i, 0, fftEase.length, 0, width)
// 	let w = width / fftEase.length
// 	rect(x, height * .805, w, freq)
// }

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/