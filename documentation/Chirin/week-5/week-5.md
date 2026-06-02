## Day 1
*Pfingstmontag*

## Day 2
*Sick*

## Day 3
*Selbststudium + Support (online)*

![[Bildschirmfoto 2026-06-01 um 21.58.27.png|613]]

![[Bildschirmfoto 2026-06-01 um 23.24.49.png]]
![[Bildschirmfoto 2026-06-01 um 23.25.13.png]]
## Day 4
*Selbststudium + Support (online)*

![[Bildschirmfoto 2026-06-01 um 21.59.11.png]]
![[Bildschirmfoto 2026-06-01 um 21.35.47.png]]


## Day 5
*Selbststudium*

Figuring out how to use the microphone to pitch the voice with VCV Rack

![[WhatsApp Image 2026-06-01 at 20.09.24.jpeg]]

Before I only used blue color for the water. 
The idea is to change the color to brown to show the impact of the water consumption that turns into dirty water.

![[Bildschirmfoto 2026-06-01 um 21.28.16.png]]
![[Bildschirmfoto 2026-06-01 um 21.35.04.png]]


```javascript

let texts = [];
let input;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont('monospace');
  textSize(60);
  textAlign(CENTER, CENTER);

  background(5, 10, 25);

  input = createInput();
  input.position(20, 20);
  input.size(300);

  button = createButton('ADD');
  button.position(330, 20);

  button.mousePressed(addNewText);

  input.changed(addNewText);
}

function draw() {
  background(5, 10, 25, 20);

  for (let t of texts) {
    t.alpha *= 0.992;

    // brown color
    fill(139, 69, 19, t.alpha);

    t.x += noise(frameCount * 0.01 + t.x) * 2 - 1;
    t.y += noise(frameCount * 0.01 + t.y) * 2 - 1;

    if (random() < 0.02) {
      t.x += random(-50, 50);
      t.y += random(-20, 20);
    }

    text(t.word, t.x, t.y);
  }

  loadPixels();

  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {

      let xOffset = sin(frameCount * 0.05 + y * 0.02) * 4;
      let yOffset = cos(frameCount * 0.05 + x * 0.02) * 4;

      let srcX = constrain(floor(x + xOffset), 0, width - 1);
      let srcY = constrain(floor(y + yOffset), 0, height - 1);

      let pixelColor = get(srcX, srcY);

      if (brightness(pixelColor) > 20) {

        // brown color for the water
        fill(
          red(pixelColor) + 30,    
          green(pixelColor) + 10,  
          blue(pixelColor) * 0.1,  
          35
        );

        noStroke();
        rect(x, y, 5, 5);
      }
    }
  }

  texts = texts.filter(t => t.alpha > 3);
}

function addNewText() {
  let newWord = input.value();

  if (newWord.trim() !== '') {
    texts.push({
      word: newWord,
      x: random(100, width - 100),
      y: random(100, height - 100),
      alpha: 255
    });

    input.value('');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
