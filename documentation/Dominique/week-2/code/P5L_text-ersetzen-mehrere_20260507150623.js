// {"P5LIVE":{"name":"text-ersetzen-mehrere","mod":1778166383622}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10
	let sine = floor(5*sin(frameCount/10)+5)
	// müssen 10 Inhalte sein
	let words = ["xux", "ouo", "iii", "ala", "mhm", "lala", "hii", "<3", "383", "555" ]
	let rand = random(words)
	
	frameRate(5)
	
	background(0, 8, 250)
	fill(255, 255, 255)
	textSize(100)
	textFont("Parkinsans")
	textStyle(NORMAL)
	textWrap(CHAR)
	textAlign(LEFT)
	textLeading(100)
	text(words[live].replace(/[aieou]/g, "*–*–*").repeat(100), 50, 50, 
		windowWidth/1.1, windowHeight)

}