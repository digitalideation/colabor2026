// {"P5LIVE":{"name":"Snippet 3","mod":1779127995378}} 

//Array:define the words to display
let texts = ["i have", "doubts", "dilemma", "capital", "our", "time", "unnaming", "future"];
let rain = [];
let textSizeValue = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(textSizeValue);
  textFont('arial');
  
  // Generate "raindrop" objects, each with a random position, word, and falling speed
  for (let i = 0; i < 100; i++) {
    rain[i] = {
      x: random(width),
      y: random(-height, 0),
      text: random(texts),
      speed: random(1, 5)};
  }
}
function draw() {
  background(255, 10); 
  fill(0, 0, 255);  

// Loop: move the "drops" down, and reset them at the bottom
  rain.forEach(rain => {
    text(rain.text, rain.x, rain.y);
    rain.y += rain.speed;
    if (rain.y > height) 
    {rain.y = random(-200, 0);}
  })
}
