// {"P5LIVE":{"name":"3d_audio_for_loop","mod":1779460525573}} 

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
	strokeWeight(1)

	//gives objects a 3d look by adding lights and shadows
	lights()
	directionalLight(0, 0, 255, -10, 10, 0)

	let number = 6
	let index = 0

	// modular function % always returns you what remains if the current number
	// is devided  by the number after the % character. thus, if we have frameCount%4,
	// it will give you 0,1,2,3,0,1,2,3 because every fourth number is dividable by 4
	// and thus there's no rest
	// 10%5 = 0; 10%4 = 2 (because 2*4 = 8 + 2 = 10)

	//fft.Ease is the array which stores 128 different classes of frequencies;
	// fft.Ease [0] gives you the first element in this array => what is stored
	// in the lowest frequency class

	for(let x = 0; x < number; x++) {
		let posX = map(x, 0, number - 1, -width / 4, width / 4)
		for(let y = 0; y < number; y++) {
			let posY = map(y, 0, number - 1, -width / 4, width / 4)
			for(let z = 0; z < number; z++) {
				let posZ = map(z, 0, number - 1, -width / 4, width / 4)
				if(index % 9 === 0) {
					stroke(0, 0, 255)
					fill(255, 0, 255)
					cube(posX, posY, posZ, 40 + fftEase[index % fftEase.length] * 0.25, 1)
				}
				else if (index % 7 === 0) {
					fill(255, 0, 255)
					cube(posX, posY, posZ, 40 + fftEase[index % fftEase.length] * 0.25, 1)
				}
				
				else {
					push()
					noStroke()
					fill(255)
					trs(posX, posY, posZ, 40 + fftEase[index % fftEase.length] * 0.25, 1)
					pop()
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
	torus(size, 20, 10, 6)
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