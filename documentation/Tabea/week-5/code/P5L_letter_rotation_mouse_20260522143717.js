// {"P5LIVE":{"name":"letter_rotation_mouse","mod":1779460637808}} 

let word = "ea"
let letters = []

function setup() {
	createCanvas(windowWidth, windowHeight)
	letters = word.split('')
}

function draw() {
  background(0)
  fill(255)
  textSize(30)
  let radius = 80
  
  let posX = mouseX
  let posY = mouseY

  for (let i = 0; i < letters.length; i++) {
  	// angle is calculated that letters are spaced evenly on invisible circle
  	// frameCount creates motion
    let angle = i * (360 / letters.length) + frameCount
    push()
    translate(posX, posY)   // move origin to center
    rotate(radians((-1)*angle))  // rotate around center
    text(letters[i], radius, 0) // draw at distance from center
    pop()
  }

}

