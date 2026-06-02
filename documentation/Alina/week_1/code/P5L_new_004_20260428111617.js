// {"P5LIVE":{"name":"new_004","mod":1777374977531}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  rectMode(CENTER);
  noLoop(); // Wir zeichnen das Raster nur einmal
}

let dim = 100;        // Startgröße der Quadrate
let reduction = 15;   // Um wie viel es nach innen kleiner wird
let spacing = 120;    // Abstand zwischen den Zentren der Muster

function draw() {
  background(0,0,255);
  noFill();
  stroke(255);

  //Y-Achsen Verschiebung
  for (let y = 60; y < height; y += spacing) {
    
    // X-Achsen Verschiebung 
    for (let x = 60; x < width; x += spacing) {
      
      // Innerer Loop für die konzentrischen Quadrate (dein ursprünglicher Loop)
      for (let s = dim; s > 0; s -= reduction) {
        square(x, y, s);
      }
      
    }
  }
}