// {"P5LIVE":{"name":"new_001","mod":1780352425728}} 

let texts = [];
let input;
let button;

let extAudioCtx;
let extAudioElement;
let extAnalyser;
let extSource;
let extDataArray;
let extAudioStarted = false;
let extGainNode; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont('monospace');
  textAlign(CENTER, CENTER);

  background(5, 10, 25);

  input = createInput();
  input.position(20, 20);
  input.size(300);

  button = createButton('ADD');
  button.position(330, 20);

  button.mousePressed(function(event) {
    addNewText();
    event.stopPropagation();
  });
  
  input.changed(addNewText);
  
  updateLiveAudio();
}

function draw() {
  background(5, 10, 25, 20);

  for (let t of texts) {
    t.alpha *= 0.992;
    fill(100,200,255, t.alpha);

    t.x += noise(frameCount * 0.01 + t.x) * 2 - 1;
    t.y += noise(frameCount * 0.01 + t.y) * 2 - 1;

    if (random() < 0.02) {
      t.x += random(-10, 50);
      t.y += random(-20, 20);
    }

    let halfWidth = t.calculatedWidth / 2;
    t.x = constrain(t.x, halfWidth + 20, width - (halfWidth + 20));
    t.y = constrain(t.y, 100, height - 100);

    textSize(t.size);
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
        fill(
          red(pixelColor),
          green(pixelColor) +15,
          blue(pixelColor) +40,
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
    let currentSize = 60;
    textSize(currentSize);
    let measuredWidth = textWidth(newWord);
    let maxWidth = width - 100;

    if (measuredWidth > maxWidth) {
      currentSize = currentSize * (maxWidth / measuredWidth);
      textSize(currentSize);
      measuredWidth = textWidth(newWord);
    }

    let halfWidth = measuredWidth / 2;
    let minX = halfWidth + 50;
    let maxX = width - (halfWidth + 50);

    texts.push({
      word: newWord,
      x: random(minX, maxX),
      y: random(150, height - 150),
      alpha: 255,
      size: currentSize,
      calculatedWidth: measuredWidth
    });

    input.value('');
    
    if (!extAudioStarted) {
      startAudioSystem();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (mouseX < 380 && mouseY < 60) {
    return;
  }
  if (!extAudioStarted) {
    startAudioSystem();
  }
}

function startAudioSystem() {
  extAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  extAudioElement = document.createElement('audio');
  extAudioElement.src = 'data/water2.mp3'; 
  extAudioElement.loop = true;
  extAudioElement.crossOrigin = "anonymous";
  
  extSource = extAudioCtx.createMediaElementSource(extAudioElement);
  extAnalyser = extAudioCtx.createAnalyser();
  extAnalyser.fftSize = 256;
  let bufferLength = extAnalyser.frequencyBinCount;
  extDataArray = new Uint8Array(bufferLength);
  
  extGainNode = extAudioCtx.createGain();
 
  extSource.connect(extGainNode);
  extGainNode.connect(extAnalyser);
  extAnalyser.connect(extAudioCtx.destination);
  
  extAudioStarted = true;
  console.log("Audio-System mit Lautstärkeregler ready!");
}

function updateLiveAudio() {
  requestAnimationFrame(updateLiveAudio);

  if (extAudioStarted && typeof texts !== 'undefined') {
    
    if (texts.length > 0) {

      let maxAlpha = 0;
      for (let t of texts) {
        if (t.alpha > maxAlpha) {
          maxAlpha = t.alpha;
        }
      }
    
      let currentVolume = map(maxAlpha, 3, 255, 0.0, 1.0);
      currentVolume = constrain(currentVolume, 0, 1);
  
      extGainNode.gain.value = currentVolume;

      if (extAudioElement.paused) {
        extAudioCtx.resume();
        extAudioElement.play().catch(e => console.log("Start blockiert", e));
      }

      extAnalyser.getByteFrequencyData(extDataArray);
      let total = 0;
      for (let i = 0; i < extDataArray.length; i++) {
        total += extDataArray[i];
      }
      let average = total / extDataArray.length; 
      
      if (average > 5) {
        let boost = map(average, 0, 255, 1, 35);
        frameCount += floor(boost); 
      }
      
    } else {
        
      if (!extAudioElement.paused) {
        extGainNode.gain.value = 0;
        extAudioElement.pause();
      }
    }
  }
}