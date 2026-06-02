// {"P5LIVE":{"name":"text_to_point_lines","mod":1779985700299}} 

let points = []
let font
let lineLength = 60

function preload() {
	font = loadFont('/data/spacemono.ttf')
}


function setup() {
	createCanvas(windowWidth, windowHeight)
	points = font.textToPoints("9", width/3, 9/10 *height, 1200)
}

function draw() {
	stroke(255)
	noFill()
	strokeWeight(2)
	background(0)
	
	let speed = 0.05


	    for (let i = 0; i < points.length; i++) {
        
        // i in angle introduces offset in spinning
        let angle = frameCount * speed + i * 0.5
        
        // x2 = x-coordinate of endpoint
        // cos(angle) gives x-distance in einheitskreis
        // multiplied with lineLength to make it bigger than 1
        let x2 = points[i].x + cos(angle) * lineLength
        
        // y2 = y-coordinate of endpoint - same calculation
        let y2 = points[i].y + sin(angle) * lineLength
        
        line(points[i].x, points[i].y, x2, y2)
        //triangle(points[i].x, points[i].y, x2, y2, width/2, height/2)
	    }
}