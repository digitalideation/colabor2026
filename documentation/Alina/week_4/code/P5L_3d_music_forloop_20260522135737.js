// {"P5LIVE":{"name":"3d_music_forloop","mod":1779458257984}} 

// how to include audio with yann

function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
	a5.ease = .075 // customize ease speed, lower values make it smoother
}

function draw() {
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	
	//orbitControl()
	ambientLight(255,0,200)
	updateAudio()
	background(0)
	
	//for loop für die Wiederholung
	let number = 5
	for(let x=0;x<number; x++){
		let posX= map(x,0,5,-width/4,width/4)
		cube(posX,0,0,60)
	}
	
	stroke(255)
	strokeWeight(0.08)
	fill(fft)
	sph(0,0,0,100+fftEase[20],20)// low frequency
	
	noFill()
	// like sunlight
	directionalLight(255,0,0,0,1,0) //v1,v2,v3,x,y,z
	stroke(10+fftEase,fftEase,100+fftEase)
	sph(200,200,200,100+fftEase[100])//high frequency
	
	ambientLight(255,0,20)
	noStroke()
	fill(0,0,255,50)
	specularMaterial(255)
	cube(-200,-300,-400,120)
	
	/* fftEase 
	for(let i = 0; i < fftEase.length; i++) {
		let freq = fftEase[i]; // (0, 255)
		let x = map(i, 0, fftEase.length, 0, width)
		let w = width / fftEase.length
		rect(x, height * .805, w, freq)
	}
	console.log(fftEase)
	*/
}

//define functions outside the for-Loop

function sph(x,y,z,size,rSpeed){
	
	push()
	translate(x,y,z)
	sphere(size)
	pop()
} 

function cube(x,y,z,size){
	push()
	translate(x,y,z)
	rotateY(frameCount * 0.01)
	box(size)
	pop()
}

//function trs(x,y,z,size,rSpeed)

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/