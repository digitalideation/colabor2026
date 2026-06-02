## Day 1
*Mid-term Presentations*

![[Writing_Assignment_Chirin_Probst.pdf]]

## Day 2
*Excursion to Basel*
##### HEK (Haus der Elektronischen Künste)

![[Bildschirmfoto 2026-06-01 um 10.31.39.png|Bildschirmfoto 2026-06-01 um 10.29.20.png|613]]
![[Bildschirmfoto 2026-06-01 um 10.28.50.png]]

Die Ausstellung **_Neue Rituale [für das Ende der Welt]_** wirft einen Blick auf die sich neu formenden gesellschaftlichen Strategien im Umgang mit der schwierigen Weltlage. Interessant ist, dass gegenwärtig gerade in der Verbindung von Technologie und Spiritualität neue rituelle Praktiken entstehen. Die internationale Gruppenausstellung bringt Positionen zusammen, die neue Rituale als Coping-Mechanismen entwerfen, um der gegenwärtigen Weltuntergangsstimmung zu trotzen. Die Künstler:innen in New Rituals erforschen welche symbolischen Handlungen uns zusammenhalten können, wenn der Himmel einstürzt. Welche neuen Mythologien könnten uns helfen, das Ende der Welt, wie wir sie kennen, zu überleben — und zu verwandeln?  

**Künstler:innen:** Zach Blas, S()fia Braga, Stefanie Egedy, Sian Fan, Teresa Fernández-Pello, Anan Fries, Dorota Gawęda und Eglė Kulbokaitė, Auriea Harvey, Maya Hottarek, Etsuko Ichihara, Christiane Peschek, Skawennati, Robin Meier Wiratunga

**Kurator:innen:** Anan Fries und Marlene Wenger

##### Tinguely Museum 

![[Bildschirmfoto 2026-06-01 um 10.38.33.png]]
![[Bildschirmfoto 2026-06-01 um 10.39.04.png]]

In an era shaped by digital media, _Reverb_ draws attention to alternative forms of human communication. The exhibition brings together five video works by the Australian, Paris based artist Angelica Mesiti who combines different disciplines in poetic ways. The works illustrate the enchantment of the everyday and show how cultural traditions, rituals, music and sounds shape identity and foster community.

## Day 3
*Input Stefanie Bräuer*

![[Bildschirmfoto 2026-06-01 um 13.21.37.png]]
## Day 4
*Selbststudium*

Research for our topic as well as playing around with the code and searching for a sound that would fit the whole project.
For the sound: Pixabay was my way to go. I was looking for something that still has the sound of water flowing in the background but has some techno beats as well. I found the perfect mixture! "Flying over water" 

![[IMG_1217.PNG|613]]

Flying over water - no voices
![[water2.mp3]]

Only water sound
![[water.mp3]]

https://www.youtube.com/watch?v=b0C56yqIkbk

![[Bildschirmfoto 2026-06-02 um 07.56.27.png]]


![[P5L_Hidden_Footprint_04_20260602075333.png]]

## Day 5
*Sick*

```javascript
// {"P5LIVE":{"name":"Hidden_Footprint_04","mod":1780386813404}} 

const words = "AI's Hidden Water Footprint";

let textX, textY;
let spawnInterval = 0.1; 
let lastSpawnFrame = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  textSize(80); 
  textAlign(CENTER, CENTER);
  

  pickNewPosition();
}

function draw() {
  background(5, 10, 25, 30);
 
  if (frameCount - lastSpawnFrame >= spawnInterval) {
    pickNewPosition();
    lastSpawnFrame = frameCount;
    if (spawnInterval > 1) {
      spawnInterval -= 0.2; 
    }
  }
  
  fill(100, 200, 255);
  text(words, textX, textY);

  loadPixels();
  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      
      let xOffset = sin(frameCount * 0.05 + y * 0.02) * 4;
      let yOffset = cos(frameCount * 0.05 + x * 0.02) * 4;
      
      let srcX = constrain(floor(x + xOffset), 0, width - 1);
      let srcY = constrain(floor(y + yOffset), 0, height - 1);
      let pixelColor = get(srcX, srcY);
      
      if (brightness(pixelColor) > 20) {
        fill(red(pixelColor), green(pixelColor) + 15, blue(pixelColor) + 40, 40);
        noStroke();
        rect(x, y, 5, 5);
      }
    }
  }
}


function pickNewPosition() {
  textX = random(100, width - 100);
  textY = random(100, height - 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
