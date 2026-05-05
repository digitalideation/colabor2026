# DIY Tools in Interaction | Exploration in: Graphical User Interfaces (GUI) + Human Computer Interfaces (HCI) with with Document Object Model (DOM) 

<a href="https://alperyagcioglu.ch/workshop.html" target="_blank">Workshop Experience</a>

## DOM Step by Step

#### Slider
```javascript
        let slider, checkbox, button, colorPicker, dropdown, input, sliderText;
        function setup() {
            createCanvas(windowWidth, windowHeight);

            //checkbox
            checkbox = createCheckbox('Show Form', true);
            checkbox.position(width - 400, 20);

            //sliders
            slider = createSlider(50, height - 100, 200);
            slider.position(width - 400, 60);
        }

        function draw() {
            background(220);
            
            if (checkbox.checked()) {
            ellipse(width/2, height/2, slider.value(), slider.value());
            }
        } 
```

#### Button
```javascript
        let slider, checkbox, button, colorPicker, dropdown, input, sliderText;
        let bgColor;
        let positionDOM;

        function setup() {

            positionDOM = width - 400

            // Button
            button = createButton('Random Background');
            button.position(positionDOM, 100);
            button.mousePressed(() => {
                bgColor = color(random(255), random(255), random(255));
            });
            bgColor = color(220);
        }

        function draw() {
            background(bgColor);
        }
```

#### Colorpicker
```javascript

        function setup() {

            // Color Picker
            colorPicker = createColorPicker('#ff0000');
            colorPicker.position(positionDOM, 140);
        }

        function draw() { 
            fill(colorPicker.value());
        } 
```


#### Dropdown
```javascript
        function setup() {
            // Dropdown
            dropdown = createSelect();
            dropdown.position(positionDOM, 180);
            dropdown.option('Circle');
            dropdown.option('Square');
            rectMode(CENTER);
        }

        function draw() {

            if (checkbox.checked()) {
                if (dropdown.value() === 'Circle') {
                    ellipse(width / 2, height / 2, slider.value(), slider.value());
                } else if (dropdown.value() === 'Square') {
                    rect(width / 2, height / 2, slider.value(), slider.value());
                }
            }
        } 
```

#### Input
```javascript
        function setup() {
            // Input field
            input = createInput('Type text');
            input.position(positionDOM, 220);
            textAlign(CENTER, CENTER);
        }

        function draw() {
                  
            if (checkbox.checked()) {
                if (dropdown.value() === 'Circle') {
                    ellipse(width / 2, height / 2, slider.value(), slider.value());
                } else if (dropdown.value() === 'Square') {
                    rect(width / 2, height / 2, slider.value(), slider.value());
                }
            }

            fill(0)
            textSize(20);
            text(input.value(), width / 2, height / 2);
        } 
```

#### Radiobutton
```javascript
        function setup() {
            //Radio button
            radio = createRadio();
            radio.option('Black');
            radio.option('White');
            radio.selected('Black');
            radio.position(positionDOM, 260);
        }

        function draw() {
                  
            if (checkbox.checked()) {
                if (dropdown.value() === 'Circle') {
                    ellipse(width / 2, height / 2, slider.value(), slider.value());
                } else if (dropdown.value() === 'Square') {
                    rect(width / 2, height / 2, slider.value(), slider.value());
                }
            }

            if (radio.value() === 'Black') fill(0);
            if (radio.value() === 'White') fill(255);

            textSize(20);
            text(input.value(), width / 2, height / 2);
        } 
```


#### Result
```javascript
        let slider, checkbox, button, colorPicker, dropdown, input, sliderText;
        let bgColor;
        let positionDOM;

        function setup() {
            createCanvas(windowWidth, windowHeight);

            positionDOM = width - 400

            //checkbox
            checkbox = createCheckbox('Show Form', true);
            checkbox.position(positionDOM, 20);

            //sliders
            slider = createSlider(50, height - 100, 200);
            slider.position(positionDOM, 60);

            // Button
            button = createButton('Random Background');
            button.position(positionDOM, 100);
            button.mousePressed(() => {
                bgColor = color(random(255), random(255), random(255));
            });
            bgColor = color(220);

            // Color Picker
            colorPicker = createColorPicker('#ff0000');
            colorPicker.position(positionDOM, 140);

            // Dropdown
            dropdown = createSelect();
            dropdown.position(positionDOM, 180);
            dropdown.option('Circle');
            dropdown.option('Square');
            rectMode(CENTER);

            // Input field
            input = createInput('Type text');
            input.position(positionDOM, 220);
            textAlign(CENTER, CENTER);

            //Radio button
            radio = createRadio();
            radio.option('Black');
            radio.option('White');
            radio.selected('Black');
            radio.position(positionDOM, 260);

            sliderText = createSlider(20, 300, 20);
            sliderText.position(positionDOM, 300);
        }

        function draw() {
            background(bgColor);
            fill(colorPicker.value());

            if (checkbox.checked()) {
                if (dropdown.value() === 'Circle') {
                    ellipse(width / 2, height / 2, slider.value(), slider.value());
                } else if (dropdown.value() === 'Square') {
                    rect(width / 2, height / 2, slider.value(), slider.value());
                }
            }

            if (radio.value() === 'Black') fill(0);
            if (radio.value() === 'White') fill(255);

            textSize(sliderText.value());
            text(input.value(), width / 2, height / 2);
        } 
```

#### simple Painteditor
```javascript
function setup() {
  createCanvas(windowWidth, windowHeight);
background(200);
  stroke(0);
}

function draw() {
  
  let pen1 = map(sin(frameCount*0.025),-1,1,2,100)
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(pen1);
    line(prevX, prevY, mouseX, mouseY);
    // ellipse(mouseX,mouseY, pen1, pen1)
  }
  prevX = mouseX;
  prevY = mouseY;
}

function keyPressed(){
	if(key == 'S'){
		save('drawing.png')
	}
}
```

## CodeSnippet Paint-Editor
```javascript
let strokeSize = 1;
let pg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(windowWidth, windowHeight);
  background(200);
}

function draw() {
  background(200);
  image(pg, 0, 0);

  strokeSize = constrain(strokeSize, 1, 300);

  // ZEICHNEN AUF pg
  if (mouseIsPressed) {
    pg.strokeWeight(strokeSize);
    pg.noFill();

    // Wenn eine Form-Taste gedrückt ist
      pg.push();
      pg.translate(mouseX, mouseY);

      if (key === 'a') {
        pg.stroke(255, 0, 0);
        pg.line(-25, -25, 25, 25);
        pg.line(25, -25, -25, 25);

      } else if (key === 's') {
        pg.stroke(0, 0, 255);
        pg.rect(-25, -25, 50, 50);

      } else if (key === 'd') {
        pg.stroke(255, 0, 255);
        pg.triangle(0, -25, -25, 25, 25, 25);

      } else if (key === 'f') {
        pg.stroke(255, 255, 0);
        pg.ellipse(0, 0, 50, 50);
        
      } else if (key === 'g') {
        pg.fill(200);
        pg.noStroke();
        pg.ellipse(0, 0, 50, 50);
      }

      pg.pop();

    }


  // VORSCHAU (nur anzeigen, nicht speichern)
  if (keyIsPressed && !mouseIsPressed) {
    strokeWeight(strokeSize);
    noFill();

    push();
    translate(mouseX, mouseY);

    if (key === 'a') {
      stroke(255, 0, 0, 150);
      line(-25, -25, 25, 25);
      line(25, -25, -25, 25);

    } else if (key === 's') {
      stroke(0, 0, 255, 150);
      rect(-25, -25, 50, 50);

    } else if (key === 'd') {
      stroke(255, 0, 255, 150);
      triangle(0, -25, -25, 25, 25, 25);

    } else if (key === 'f') {
      stroke(255, 255, 0, 150);
      ellipse(0, 0, 50, 50);
    }

    pop();
  }
}

function mouseWheel(event) {
  strokeSize += event.delta / 2;
}

function keyPressed(){
	if(key == 'S'){
		save('drawing.png')
	}
}
```

#### Tastatur Zustände
```javascript
if (keyIsPressed) { ... }
//bedeutet: eine beliebige Taste ist gerade gedrückt

if (key === 'a') { ... }
//bedeutet: welche Taste ist gerade aktiv

if (mouseIsPressed) { ... }

function mousePressed() {
}
```


⏱ Zustand (läuft ständig)
* keyIsPressed
    * https://p5js.org/reference/p5/keyIsPressed/

* mouseIsPressed
    * https://p5js.org/reference/p5/mouseIsPressed/


⚡ Event (einmalig)
* keyPressed()
    * https://p5js.org/reference/p5/keyPressed/

* keyReleased()
    * https://p5js.org/reference/p5/keyReleased/

* mousePressed()
    * https://p5js.org/reference/p5/mousePressed/

* mouseReleased()
    * http://p5js.org/reference/p5/mouseReleased/