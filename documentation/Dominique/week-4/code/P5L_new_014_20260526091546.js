// {"P5LIVE":{"name":"new_014","mod":1779786946262}} 

/*	
	_audio_analysis // cc teddavis.org 2019-24
	
	revamp of P5LIVE's Audio snippet, now built-in the background!
	add snippet to other sketches: CTRL + SHIFT + A 
*/
function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
	setupAudio(true)
	a5.ease = .275
}

function draw() {
	updateAudio()
	orbitControl()
	background(0)
	lights()
	directionalLight(0, 0, 255, -10, 10, 0)

	let number = 6
	let index = 0

	for(let x = 0; x < number; x++) {
		let posX = map(x, 0, number - 1, -width / 4, width / 4)
		for(let y = 0; y < number; y++) {
			let posY = map(y, 0, number - 1, -height / 4, height / 4)
			for(let z = 0; z < number; z++) {
				let posZ = map(z, 0, number - 1, -width / 4, width / 4)
				if(index % 2 === 0) {
					stroke(201, 1, 255)
					fill(209, 255, 1)
					cube(posX, posY, posZ, 20 + fftEase[index % fftEase.length] * 0.25, 1)
				} else {
					trs(posX, posY, posZ, 30 + fftEase[index % fftEase.length] * 0.25, 2)
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
	stroke(0, 255, 200)    // ← eigene Farbe für trs
	fill(255, 50, 0)        // ← eigene Farbe für trs
	translate(x, y, z)
	rotateY(frameCount * 0.01 * rSpeed)
	torus(size, 20,10,6)
	pop()
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/