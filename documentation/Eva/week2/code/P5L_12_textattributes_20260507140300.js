// {"P5LIVE":{"name":"12_textattributes","mod":1778162580325}} 

let libs = ['https://unpkg.com/hydra-synth', 'includes/libs/hydra-synth.js', 'https://cdn.jsdelivr.net/gh/ffd8/hy5@main/hy5.js', 'includes/libs/hy5.js']
osc(200)
.mult(osc(1,0.2,1))
.modulateRepeat(osc(.1))
.colorama(2,3,3)
.luma(.3)
.out()

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	let live = frameCount % 10
	let sine = floor(5*sin(frameCount/10)+5)
	let words = ["xyx", "lol", "ihi", "ololo", "jaj", "ueu", "lsl", "asa", "ere", "lil"]
	let rand = random(words);
	
	frameRate(2)
	background(255, 255, 0)
	fill(10)
	textFont('american typewriter')
	textSize(100)
	textLeading(60)
	textWrap(CHAR);
	text (words[sine].replace(/[aieou]/g, " ").repeat(300), 100, 20, windowWidth / 1.1, windowHeight);
	textAlign(CENTER)

}