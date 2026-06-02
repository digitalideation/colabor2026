// {"P5LIVE":{"name":"new_004","mod":1777381482545}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noLoop(); // Wir zeichnen das Raster nur einmal
}

let dim = 100;        // Startgröße der Quadrate
let reduction = 15;   // Um wie viel es nach innen kleiner wird
let spacing = 120;    // Abstand zwischen den Zentren der Muster


function draw() {
  background(255,204,255);
  noFill();
  stroke(255);

  //Y-Achsen Verschiebung
  for (let y = 60; y < height; y += spacing) {
    
    // X-Achsen Verschiebung 
    for (let x = 60; x < width; x += spacing) {
      
      // Innerer Loop für die konzentrischen Quadrate (dein ursprünglicher Loop)
      for (let i = dim; i > 0; i -= reduction) {
      	if(dim < 50)
      	
      	fill(random(255,0))
        square(x, y, i);
        
        noLoop();
        
      }
      
    }
  }
}
