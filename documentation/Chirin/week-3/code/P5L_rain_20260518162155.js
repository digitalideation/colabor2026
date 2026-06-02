// {"P5LIVE":{"name":"rain","mod":1779121315395}} 

let drops = []

function setup() {
  createCanvas(windowWidth, windowHeight)
  for (let i = 0; i < 80; i++) { 
    drops.push({
      x: random(width),
      y: random(-height, 0),
      speed: random(4, 10),
      length: random(20, 80),
      opacity: random(40, 180)
    })
  }
}

function draw() {
  background(10, 20, 40, 30)
  
  let wind = map(mouseX, 0, width, -5, 5)
  let mult = map(mouseY, 0, height, 0.5, 2.5)

  for (let d of drops) {
    stroke(0, 150, 255, d.opacity)
    strokeWeight(d.length * 0.9)
    line(d.x, d.y, d.x + wind * 2, d.y + d.length)
    d.y += d.speed * mult
    d.x += wind
    
    if (d.y > height + 50 || d.x < -100 || d.x > width + 100) {
      d.y = random(-100, -20)
      d.x = random(width)
    }
  }
}