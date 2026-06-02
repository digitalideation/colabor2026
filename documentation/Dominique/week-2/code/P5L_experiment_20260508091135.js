// {"P5LIVE":{"name":"experiment","mod":1778231495796}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	// let words = ["rain", "drops", "falling", "on", "my", "computer", "every", "day", "!"]
	// floor = runden
	let sine = floor(5*sin(frameCount/10)+5)
	let words = ["<<>>", "----", "<3 <3", "hi", "$e y@", "%%%%", "****", "....", "huhu", "n|ce"]
	let rand = random(words)
	let bgColor = color(random(255), random(255), random(255))
	
	frameRate(3)
	
	background(bgColor)
	fill(255, 255, 255)
	textSize(100)
	textFont(random(["Parkinsans", "Circular Std", "Advine Pixel Demo"]))
	textStyle(random([NORMAL, ITALIC]))
	textWrap(CHAR)
	textAlign(LEFT)
	textLeading(100*(sine/10))
	text(words[sine].repeat(2000), 20, 20, 
		windowWidth/1.1, windowHeight)


}