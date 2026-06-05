// {"P5LIVE":{"name":"kinetic_typography_textToPoint","mod":1779902510144}} 

let points = []
let font
let r = 5
let angle = 0

function preload() {
	font = loadFont('/data/spacemono.ttf')
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	textAlign(CENTER, CENTER)
	points = font.textToPoints("+%*", width/2, height/2, 300, {
		// sampleFactor = how close the points are
		sampleFactor:0.1,
		
		//simplifyThreshold removes collinear points (points on the same straight line)
		simplifyThreshold: 0
		
	})
	
	angleMode(DEGREES)
}

function draw() {
	background(220)

// //textBounds returns bounding box surrounding the 
// //text you write in the command
// 	push()
// 	fill(0,0,255)
// 	noStroke()
// 	let box = font.textBounds("91", 0, 300, 300)
// 	rect(box.x, box.y, box.w, box.h)
// 	pop()
	
// 	fill(255)
// 	noStroke()

	for(let i = 0; i < points.length; i++) {

		//alpha stores the angle of the line at each point
		//if (points[i].alpha==90) { 
		//	fill(255,0,0)
		//}
		//else {
		//	fill(255)
		//}

		ellipse(points[i].x + r*sin(angle + i*20), points[i].y, 5)
	}
	angle += 10

	


}