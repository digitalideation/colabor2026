// {"P5LIVE":{"name":"Tools in Interaction","mod":1778580172930}} 

        let slider, checkbox, button, colorPicker, dropdown, input, sliderText, buttonText;
        let radomStroke
        let bgColor;
        let colorText;
        let positionDOM;

        function setup() {
            createCanvas(windowWidth, windowHeight);

			positionDOM = width - 400
			
            //checkbox
            checkbox = createCheckbox('Show Form', true);
            checkbox.position(width - 400, 20);

            //sliders
            slider = createSlider(0, height - 100, 200);
            slider.position(positionDOM, 60);
            
            sliderText = createSlider(20, 300, 200);
            sliderText.position(positionDOM, 260);

            // Button
            button = createButton('Random Background');
            button.position(positionDOM, 100);
            button.mousePressed(() => {
            bgColor = color(random(255), random(255), random(255));
            });
            bgColor = color(220);
            
            // ButtonText
            button = createButton('Random Color Text');
            button.position(positionDOM, 300);
            button.mousePressed(() => {
                colorText = color(random(255), random(255), random(255));
            });
           colorText = color(120);
        
            // Color Picker
            colorPicker = createColorPicker('#ff0000');
            colorPicker.position(positionDOM, 140);
            
            // Dropdown
            dropdown = createSelect();
            dropdown.position(positionDOM, 180);
            dropdown.option('Circle');
            dropdown.option('Square');
            dropdown.option('Circle2');
            rectMode(CENTER);
            
            // Input field
            input = createInput('Type text');
            input.position(positionDOM, 220);
            textAlign(CENTER, CENTER);
            
            //Radio button
            radio = createRadio();
            radio.option('Black');
            radio.option('White');
            radio.selected('white');
            radio.position(positionDOM, 340);
        }
        
        function draw() {
            background(bgColor);
            
            fill(colorPicker.value());
            
            push()
            if (radio.value() === 'Black') stroke(0);
            if (radio.value() === 'White') stroke(255);
            
            if (checkbox.checked()) {
                if (dropdown.value() === 'Circle') {
                    ellipse(width / 2, height / 2, slider.value(), slider.value());
                }else if (dropdown.value() === 'Square') {
                    rect(width / 2, height / 2, slider.value(), slider.value());
                }
                else if (dropdown.value() === 'Circle2') {
                    ellipse(width / 2 + 100, height / 2, slider.value(), slider.value());
                    ellipse(width / 2 - 100, height / 2, slider.value(), slider.value());
                }
            }
             pop()
             
            fill(colorText)
            textSize(sliderText.value());
            text(input.value(), width / 2, height / 2);
        }  