// {"P5LIVE":{"name":"Week 2, 3","mod":1779129420662}} 

// {"P5LIVE":{"name":"new_002","mod":1778160653734}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	
}

function draw() {
	let live = frameCount%10;
	let words = ["creative", "hslu", "coding","antonio", "antonio", "antonio", "antonio", "antonio"]
	let rand = random(words)

frameRate(5)
background(230, 50, 300)
	fill(10)
	textSize(100)
	textWrap(WORD)
	textFont('american typewriter')
	textAlign(CENTER)
textStyle(NORMAL)
textLeading(100)
text(words[live] ,800,400)
windowWidth/1.1, windowHeight;

 
	
}