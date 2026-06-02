## Week 3

#### Day 1

sick...

#### Day 2

![Bildschirmfoto 2026-05-18 um 15.04.13](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/Bildschirmfoto 2026-05-18 um 15.04.13.png)

#### Day 3

![Bildschirmfoto 2026-05-18 um 15.04.36](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/Bildschirmfoto 2026-05-18 um 15.04.36.png)

![Bildschirmfoto 2026-05-13 um 10.00.50](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/Bildschirmfoto 2026-05-13 um 09.18.28.png)

![Bildschirmfoto 2026-05-13 um 09.29.20](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/Bildschirmfoto 2026-05-13 um 09.29.20.png)

![Bildschirmfoto 2026-05-13 um 10.00.50](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/Bildschirmfoto 2026-05-13 um 10.00.50.png)

## Mid-term Presentation – 18/05/26



![Bildschirmfoto 2026-05-13 um 09.11.12](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/Bildschirmfoto 2026-05-13 um 09.11.12.png)

###### Trying out different visuals for the presentation on Monday :

```javascript
const words = "AI Hidden Water Footprint";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0); // Hintergrund nur EINMAL zeichnen, damit er nicht alles überschreibt
  
  // Text-Styling (einmalig im Setup reicht)
  textFont('monospace');
  textSize(40);
  textWrap(WORD);
  textLeading(35);
}

function draw() {
  // Bleibt leer, da wir nur auf Klicks reagieren wollen!
}

// Diese Funktion wird von p5.js automatisch bei jedem Mausklick aufgerufen
function mousePressed() {
  // Zufällige Blautöne für den Wasser-Effekt
  fill(0, random(50, 150), random(180, 255));
  
  // Zeichnet den Text exakt an die Position, an der sich die Maus gerade befindet
  // Die Box ist 300px breit, damit der Text umbricht (textWrap)
  text(words, mouseX, mouseY, 300, windowHeight);
}

// Falls du die Taste "c" drückst, wird die Leinwand wieder geleert
function keyPressed() {
  if (key === 'c' || key === 'C') {
    background(0);
  }
}
```

![P5L_new_001_20260516142728](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/P5L_new_001_20260516142728.png)

```javascript
const words = "AI Hidden Water Footprint";

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  textSize(60);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(5, 10, 25, 40); // Das Alpha sorgt für ein "Nachziehen" der Wellen
  
  // 1. Text an Mauspositionen zeichnen (wenn gedrückt)
  if (mouseIsPressed) {
    fill(100, 200, 255);
    text(words, mouseX, mouseY);
  }

  // 2. WASSER-SHIMMER-EFFEKT (Pixel-Verzerrung)
  // Wir laden die aktuellen Pixel des Canvas
  loadPixels();
  
  // Um es performant zu halten, springen wir in 4-Pixel-Schritten
  for (let y = 0; y < height; y += 4) {
    for (let x = 0; x < width; x += 4) {
      // Berechne eine wellenartige Verschiebung basierend auf Zeit (frameCount) und Position
      let xOffset = sin(frameCount * 0.05 + y * 0.02) * 4;
      let yOffset = cos(frameCount * 0.05 + x * 0.02) * 4;
      
      // Hol dir die Farbe vom leicht versetzten Pixel
      let srcX = constrain(floor(x + xOffset), 0, width - 1);
      let srcY = constrain(floor(y + yOffset), 0, height - 1);
      let pixelColor = get(srcX, srcY);
      
      // Zeichne ein kleines, sanftes "Lichtteilchen" (Kaustik-Effekt)
      if (brightness(pixelColor) > 20) {
        fill(red(pixelColor), green(pixelColor) + 20, blue(pixelColor) + 50, 50);
        noStroke();
        rect(x, y, 4, 4);
      }
    }
  }
}
```

![P5L_new_001_20260516143836](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/P5L_new_001_20260516143836.png)

```javascript
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
```

![P5L_Hidden_Footprint_04_20260518151427](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/P5L_Hidden_Footprint_04_20260518151427.png)

```javascript
let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 80; i++) { 
    drops.push({
      x: random(width),
      y: random(-height, 0),
      speed: random(4, 10),
      length: random(20, 80), 
      opacity: random(40, 180)
    });
  }
}

function draw() {
  background(10, 20, 40, 30);
  
  let wind = map(mouseX, 0, width, -5, 5);
  let mult = map(mouseY, 0, height, 0.5, 2.5);

  for (let d of drops) {
    stroke(0, 150, 255, d.opacity);
    strokeWeight(d.length * 0.9); 
    
    line(d.x, d.y, d.x + wind * 2, d.y + d.length);
    
    d.y += d.speed * mult;
    d.x += wind;

    if (d.y > height + 50 || d.x < -100 || d.x > width + 100) {
      d.y = random(-100, -20);
      d.x = random(width);
    }
  }
}
```

![P5L_new_003_20260517211035](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/P5L_new_003_20260517211035.png)

###### Research for the topic : 

![Bildschirmfoto 2026-05-18 um 15.24.59](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/Bildschirmfoto 2026-05-18 um 15.24.59.png)

https://www.swissinfo.ch/ger/schweizer-ki/ki-rechenzentren-setzen-schweizer-wasserressourcen-unter-druck/91322903?nab=1

![Bildschirmfoto 2026-05-18 um 15.23.57](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/Bildschirmfoto 2026-05-18 um 15.23.57.png)

https://www.srf.ch/news/wirtschaft/digitale-infrastruktur-stille-stromfresser-immer-mehr-rechenzentren-in-der-schweiz

![Bildschirmfoto 2026-05-18 um 15.24.31](/Users/chirin/Documents/DDA25/26FS/04_Colabor/documentation/week-3/images/Bildschirmfoto 2026-05-18 um 15.24.31.png)

https://algorithmwatch.ch/de/ressourcenverbrauch-rechenzentren/

> !!! 
>
> Obwohl Wasser für den Betrieb von Rechenzentren unerlässlich ist, gibt es kaum offizielle Daten über deren Wassernutzung. Auf globaler Ebene [schätzt die Internationale Energieagentur](https://iea.blob.core.windows.net/assets/de9dea13-b07d-42c5-a398-d1b3ae17d866/EnergyandAI.pdf) (IEA), dass der aktuelle Bedarf bei rund 560 Milliarden Litern pro Jahr liegt und bis 2030 auf 1200 Milliarden Liter ansteigen könnte – ein Volumen, das dem jährlichen Wasserbedarf von rund zehn Millionen Haushalten entspricht.

