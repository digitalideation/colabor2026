// {"P5LIVE":{"name":"frameCount_draw","mod":1777913629915}} 

// strudel
$: s("[bd <hh oh>]*2").bank("tr909").dec(.4)
// strudel


function setup() {
	createCanvas(windowWidth, windowHeight)

}

function draw() {
	background(0, 15, 255, 15) //r , g, b, a
	fill (frameCount % 255)
	circle(mouseX, mouseY, frameCount*5 % 200)
	
	print (frameCount % 200)
}