// {"P5LIVE":{"name":"word_walker_simple","mod":1779194648514}} 

let word = "SOUND"
let x1 = 0,   y1 = 0
let x2 = 300, y2 = 500
let x3 = 150, y3 = 200
let x4 = 500, y4 = 350

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(15)
}

function draw() {
  background(0, 20)
  textAlign(LEFT, TOP)
  textSize(50)
  fill(255)

  let speed1 = abs(sin((frameCount + 0)  * 0.04) * 10)
  let speed2 = abs(sin((frameCount + 20) * 0.04) * 10)
  let speed3 = abs(sin((frameCount + 40) * 0.04) * 10)
  let speed4 = abs(sin((frameCount + 60) * 0.04) * 10)

  text(word, x1, y1)
  x1 += speed1
  if (x1 >= width) {
    x1 = 0
    y1 = floor(random(0, height / textSize() - 1)) * textSize()
  }

  text(word, x2, y2)
  x2 += speed2
  if (x2 >= width) {
    x2 = 0
    y2 = floor(random(0, height / textSize() - 1)) * textSize()
  }

  text(word, x3, y3)
  x3 += speed3
  if (x3 >= width) {
    x3 = 0
    y3 = floor(random(0, height / textSize() - 1)) * textSize()
  }

  text(word, x4, y4)
  x4 += speed4
  if (x4 >= width) {
    x4 = 0
    y4 = floor(random(0, height / textSize() - 1)) * textSize()
  }
}

// function textWalker(word, posX, posY) {
// 	text(word, posX, posY)
// 	posX += 10

// 	if(posX>=width){
// 		posX=0
// 		let randY = floor(random(0, (height / textSize() - 1)))
// 		posY=randY*textSize()
// 	}
// }