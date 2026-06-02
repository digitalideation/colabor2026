// {"P5LIVE":{"name":"letter_rotation_mouse_clicked","mod":1779809658585}} 

let word = "&&"
let letters = []
let clicks = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  letters = word.split('')
}

function mousePressed() {
	// when mouse is clicked, the current values for mouseX, mouseY and
  clicks.push({ x: mouseX, y: mouseY, startFrame: frameCount })
}

function draw() {
  background(0)
  fill(255)
  textSize(30)
  let radius = 80

  for (let c = 0; c < clicks.length; c++) {
    let posX = clicks[c].x
    let posY = clicks[c].y
    let elapsed = frameCount - clicks[c].startFrame

    for (let i = 0; i < letters.length; i++) {
      let angle = i * (360 / letters.length) + elapsed
      push()
      translate(posX, posY)
      rotate(radians(-1 * angle))
      text(letters[i], radius, 0)
      pop()
    }
  }
}