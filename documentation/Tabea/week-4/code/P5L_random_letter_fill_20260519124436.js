// {"P5LIVE":{"name":"random_letter_fill","mod":1779194676872}} 

let characters = ["-", "0"]
let posX = 0
let posY = 0
let myFont

function preload() {
  myFont = loadFont('/data/spacemono.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(0)
  frameRate(5)
}

function draw() {
	textFont(myFont)
  textAlign(LEFT, TOP)
  textSize(32)
  fill(255)

  let j = frameCount % characters.length
  let randomRep = 5*floor(random(1, 8))
  let charRep = characters[j].repeat(randomRep)

  text(charRep, posX, posY)
  posX += textWidth(charRep)

  if (posX >= width) {
    posX = 0
    posY += textSize()
  }

  if (posY > height) {
    background(0)
    posX = 0
    posY = 0
  }
}