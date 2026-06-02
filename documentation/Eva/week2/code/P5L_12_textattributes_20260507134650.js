// {"P5LIVE":{"name":"12_textattributes","mod":1778161610117}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	let live = frameCount % 10
	let sine = floor(5*sin(frameCount/10)+5)
	let words = ["xyx", "lol", "ihi", "ololo", "jaj", "ueu", "lsl", "asa", "ere", "lil"]
	let rand = random(words);
	
	frameRate(5)
	background(255, 255, 0)
	fill(10)
	textFont('american typewriter')
	textSize(100)
	textLeading(60)
	textWrap(CHAR);
	text (words[sine].replace(/[aieou]/g, "w").repeat(200), 100, 20, windowWidth / 1.1, windowHeight);
	textAlign(CENTER)

}