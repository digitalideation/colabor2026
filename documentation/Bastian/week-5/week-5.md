# Day 1

## 25.05.2026

Today was Pfingstmontag and i enjoyed the day in the sun

# Day 2

## 26.05.2026

On Tuesday Jakob and I had our first talk with Yann about our final Project. Later on we split our parts. 

The first thing I made was the background. The Idea was that we wanted to have a moving background which displays different kind of text.

```javascript
let texts = ["BÄÄH BÄHH BÄÄH", "MÄÄH MÄHH MÄÄÄ", "BLÖÖÖK", "I AM A SHEEEEEP"]
let bgString = texts [0];
let dynamicLines = 40;
let textColor;
let textScale = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(8);
  textColor = color(255);
}

function draw() {
  background(5);

  textSize(windowWidth / textScale);
  textFont("monospace");
  textAlign(LEFT, TOP);

  let completeLineText = bgString.repeat(
    floor(25 * sin(frameCount * 0.05) + 45)
  );

  for (let i = 0; i < dynamicLines; i++) {
    let b = map(i, 0, dynamicLines, 1, 0.2);

    fill(
      red(textColor) * b,
      green(textColor) * b,
      blue(textColor) * b
    );

    text(
      completeLineText,
      -100 + (i % 2 === 0 ? 1 : -1) * ((frameCount * 4) % 150),
      i * (windowHeight / dynamicLines)
    );
  }
}

function mousePressed() {
  textColor = color(random(255), random(255), random(255));
  textScale = random(200);
  bgString = random(texts);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
```

![](C:\Users\basti\OneDrive\Desktop\Invers\Scans\Bilder\Screenshots 1\Screenshot 2026-06-01 205521.png)
![[Screenshot 2026-06-01 205521.png]]
![Screenshot 2026-06-01 205506](C:\Users\basti\OneDrive\Desktop\Invers\Scans\Bilder\Screenshots 1\Screenshot 2026-06-01 205506.png)
![[Screenshot 2026-06-01 205506.png]]
![Screenshot 2026-06-01 205455](C:\Users\basti\OneDrive\Desktop\Invers\Scans\Bilder\Screenshots 1\Screenshot 2026-06-01 205455.png)
![[Screenshot 2026-06-01 205455.png]]
![Screenshot 2026-06-01 205302](C:\Users\basti\OneDrive\Desktop\Invers\Scans\Bilder\Screenshots 1\Screenshot 2026-06-01 205302.png)
![[Screenshot 2026-06-01 205302.png]]
With the help of Jakob and some help online I managed to create an Interactive Background which changes color and text and size with a mouseclick.

# Day 3

## 27.05.2026

On Wednesday I started to create the Audio for our performance on Strudel. After I watched some Tutorials online I  got my inspiration and began to cook.



### Strudel experiments

#### 1.

```javascript
setCps(140/60/4)

$: s("sbd!4")._scope()
.duck("2:3:4:10:20:30").duckattack(0.2).duckdepth(0.9)
$bass: n(irand(20).sub(7).seg(16)).scale("c:minor")
.s("sawtooth").lpf(200).lpenv(slider(0,0,8)).lpq(12).orbit(2)


$: s("supersaw").detune(1).rel(5).beat(2, 32).slow(2).orbit(2)
.fm("4").fmh(2.04)

_$: ("pulse").orbit(4).seg(16).dec(.1).fm(time).fmh(time)

$: s("hh*8")
.struct("1 0 1 1 0 1 0 1")
.speed(irand(4).add(1))
.room(.5)
.size(.5)
.gain(2)

$: note("c2 eb2 g2 bb2")
.s("supersaw")
.slow(8)
.attack(4)
.release(6)
.lpf(sine.range(200,1200))
.room(.8)
.size(.9)
.gain(1)
```

In this part I found some Tutorials and began Implementing different parts.

#### 2.

```javascript
setCps(140/60/4)

_$: s("sbd!4")._scope()
.duck("2:3:4:10:20:30").duckattack(0.2).duckdepth(0.9)
_$bass: n(irand(20).sub(7).seg(16)).scale("c:minor")
.s("sawtooth").lpf(200).lpenv(slider(4.752,0,8)).lpq(12).orbit(2)


_$: s("supersaw").detune(1).rel(5).beat(2, 32).slow(2).orbit(2)
.fm("4").fmh(2.04)

_$: ("pulse").orbit(4).seg(16).dec(.1).fm(time).fmh(time)

_$: s("hh*8")
.struct("1 0 1 1 0 1 0 1")
.speed(irand(3).add(1))
.room(.5)
.size(.5)
.gain(2)

_$: s("oh*4")
.struct("0 1 0 1")
.hpf(4000)
.dec(.12)
.room(.4)
.gain(1)

_$: n("0 ~ 2 ~")
.scale("g:minor")
.s("sawtooth")
.fm(sine.range(1,6).slow(2))
.fmh(2)
.lpf(sine.range(300,1800).slow(4))
.attack(.08)
.release(.9)
.dec(.8)
.shape(.15)
.gain(.8)
.room(.4)
```

Kept adding new stuff...

#### 3.

```
setCps(140/60/4)


// Snare
_$: s("sd")
.struct("0 0 1 0 0 0 1 0")
.gain(0.9)

// Melodie
_$: note("c4 eb4 g4 bb4")
.s("supersaw")
.slow(4)
.rel(2)
.lpf(1500)
.room(0.5)
.size(0.8)
.gain(0.25)

// Hi-Hats 1
_$: s("hh*8")
.struct("1 0 1 1 0 1 0 1")
.speed(irand(3).add(1))
.room(.5)
.size(.5)
.gain(2)

// Hi-Hats 2
_$: s("hh*16")
.gain("0.5 0.3 0.4 0.3")
.dec(0.04)

_$: s("oh*4")
.struct("0 1 0 1")
.hpf(4000)
.dec(.12)
.room(.4)
.gain(1)


_$: s("pulse").orbit(4).seg(16).dec(.1).fm(time).fmh(time).gain(1)


//BELLS
$: n("0").s("sheep_bell").gain(0.3)


//BLÖÖÖÖKEN
$: n("0").s("strudel_sounds")




_$: s("sbd!4")._scope().gain(1.5)
  
.duckorbit("2:3:4:10:20:30").duckattack(0.2).duckdepth(0.9)
_$bass: n(irand(1,4,6,8,10,20).sub(7).seg(16)).scale("c:minor")
.s("sawtooth").lpf(200).lpenv(slider(4.976,0,8)).lpq(12).orbit(2)


_$: s("supersaw").detune(1).rel(5).beat(2, 32).slow(2).orbit(2)
.fm("4").fmh(2.04).gain(0.7)

_$: n("0 ~ 2 ~")
.scale("g:minor")
.s("sawtooth")
.fm(sine.range(1,6).slow(2))
.fmh(2)
.lpf(sine.range(300,1800).slow(4))
.attack(.08)
.release(.9)
.dec(.8)
.shape(.15)
.gain(.8)
.room(.4)
```

Until I finally arranged the different parts and even integrated the sound-samples of sheep. 

# Day 4

## 28.05.2026

On Thursday I worked on the gras snippet. Again with the help of Jakob I managed to create a cool gras animation for the sheep.

```javascript
let bladeCount = 75; 
let grassHeight = 120; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background('black'); 
  
  noStroke();
  fill('green'); 


  let bladeWidth = width / bladeCount;

  for (let i = 0; i < bladeCount; i++) {

    let leftBaseX = i * bladeWidth;
    let rightBaseX = (i + 1) * bladeWidth;
    

    let tipX = leftBaseX + (bladeWidth * 0.5) + sin(frameCount * 0.02 + i) * 15;
    
    
   // let growth = (frameCount * 0.5) % grassHeight;
  let growth = map(
  sin(frameCount * 0.02),
  -1,
  1,
  0,
  grassHeight
);

    let currentHeight = growth + cos(i * 0.5) * 40;
    
    let tipY = height - currentHeight;

    triangle(leftBaseX, height, rightBaseX, height, tipX, tipY);
  }
}
```

![](C:\Users\basti\OneDrive\Desktop\Invers\Scans\Bilder\Screenshots 1\Screenshot 2026-06-01 211718.png)

# Day 5

## 29.05.2026

On friday and sunday i finished all my snippets for the presentation on Monday 01.06.2026
