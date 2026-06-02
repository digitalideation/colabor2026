// {"P5LIVE":{"name":"sinus-cosinus-random","mod":1777999647187}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(228, 255, 138)
  noFill()
}

function draw() {
	// Linie 1
	stroke(124, 138, 78)
	let x1 = noise(frameCount * 0.004) * width
	let y1 = noise(frameCount * 0.006) * height
	ellipse(x1, y1, 15)

	// Linie 2
	stroke(186, 207, 118)
	let x2 = noise(frameCount * 0.004 + 1000) * width
	let y2 = noise(frameCount * 0.008 + 2000) * height
	ellipse(x2, y2, 15)
}