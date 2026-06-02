// {"P5LIVE":{"name":"text_to_point_shape_001","mod":1779985707202}} 

let points = []
let font
let r = 20
let angle = 0

function preload() {
	font = loadFont('/data/spacemono.ttf')
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	textAlign(CENTER, CENTER)
	points = font.textToPoints("B", width/3, height/2, 900,
	{ // sampleFactor = how close the points are
		sampleFactor: 0.5,
		simplifyThreshold: 0
	})
}

function draw() {
	background(0)
	noStroke()
	fill(255)

	angleMode(DEGREES)
	
	

	beginShape()
	for(let i = 0; i < points.length; i++) {
		//vertex(points[i].x + r*sin(angle + i*10), points[i].y + r*sin(angle + i*5))
		vertex(points[i].x + sin(frameCount * 2)*i/2, points[i].y + sin(frameCount)*i/3)
	}
	endShape(CLOSE)
}
