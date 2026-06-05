// {"P5LIVE":{"name":"new_003","mod":1777374452956}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
}

let dim = 200;
let reduction = 20;
let posX = 400;
let posY = 200;
let anzahl = 10;
let versatz= 200;

function draw() {
  background(255); 
  noFill();
  strokeWeight(1);
  stroke(0);

  // Der Loop
  for (let i = 0; i < anzahl; i++) {
    // Die Formel: Startgröße minus (Schrittnummer * Verkleinerung)
    square(posX, posY, dim - (reduction * i));
    square(posX+versatz,posY+versatz,dim - (reduction *i));
    
  }
  
  noLoop(); // Stoppt das dauerhafte Neuzeichnen, da das Bild statisch ist
}