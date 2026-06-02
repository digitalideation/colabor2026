// {"P5LIVE":{"name":"text_to_point_shape_morph_002","mod":1779902555480}} 

let points = []
let font
let r = 20
let angle = 0

function preload() {
	font = loadFont('/data/spacemono.ttf')
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	points = font.textToPoints("6", 600, 900, 1200,
	{ // sampleFactor = how close the points are
		sampleFactor: 1,
		simplifyThreshold: 0
	})
	frameRate(5)
}

function draw() {
	background(0)
	noStroke()
	fill(255)
	
	
	// for(let i = 0; i < points.length; i++) {
	// 	line(points[i].x, points[i].y, points[i+1].x, points[i+1].y)
	// 	line(points[0].x, points[i].y, points[points.length-1].x, points[points.length-1].y)
	let k = frameCount%2
	
	if (k==0) {
		fill(0)
		background(255)
	}
	
	let offsetX = random(-5, 3)
	let offsetY = random(-5, 3)
	

	beginShape()
	for(let i = 0; i < points.length; i++) {
		//vertex(points[i].x + r*sin(angle + i*10), points[i].y + r*sin(angle + i*5))
		vertex(points[i].x + (i+1) * 0.03 * offsetX, points[i].y + (i+1) *0.003 * offsetY)
		angle += 5
	}
	endShape(CLOSE)
}
