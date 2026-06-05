// SNIPPET 3 — Animated Water Surface
// sin() creates a moving wave across the ground line
// week-1 README line 191: "sin(frameCount * speed) animates over time"

let groundY;

function setup(){
  createCanvas(windowWidth, windowHeight);
  groundY = height * 0.82;   // change 0.82 → move ground up/down
}

function draw(){
  background(6, 8, 20, 28);  // low alpha = long trails

  for(let x = 0; x < width; x += 4){
    stroke(80, 140, 255, map(x, 0, width, 15, 50));
    point(x, groundY + sin(frameCount * 0.03 + x * 0.02) * 2);
    //                           ↑ wave speed        ↑ wave width
  }
}
