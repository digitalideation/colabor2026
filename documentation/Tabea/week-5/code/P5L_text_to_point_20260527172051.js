// {"P5LIVE":{"name":"text_to_point","mod":1779902451111}} 

let points = []
let font

function preload() {
	font = loadFont('/data/spacemono.ttf')
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	points = font.textToPoints("91", 0, 300, 300)
}

function draw() {
	
	background(220)
	for(let i = 0; i < points.length; i++) {
		
		//alpha stores the angle of the line at each point
		if (points[i].alpha==90) { 
			fill(255,0,0)
		}
		else {
			fill(255)
		}
		
		ellipse(points[i].x, points[i].y, 10)
	}
}