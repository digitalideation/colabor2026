// {"P5LIVE":{"name":"new_012","mod":1777975530879}} 

let slider, checkbox, button, colorPicker, dropdown, input, sliderText;
let bgColor;
let positionDOM;
        
        
        function setup() {
            createCanvas(windowWidth, windowHeight);
			 positionDOM = width - 400



            //checkbox
            checkbox = createCheckbox('Show Form', true);
            checkbox.position(width - 400, 20);

            //sliders
            slider = createSlider(0, height - 100, 200);
            slider.position(width - 400, 60);
            
            
             sliderText = createSlider(0, height - 100, 200);
            sliderText.position(positionDOM,260);
            
            
            // Button
            button = createButton('Random Background');
            button.position(positionDOM, 100);
            button.mousePressed(() => {
                bgColor = color(random(255), random(255), random(255));
            });
            bgColor = color(120);
        
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
        
        
        
        
        }

        function draw() {
            background(bgColor);
            
            fill(colorPicker.value())
            noStroke()
            
             if (checkbox.checked()) {
                if (dropdown.value() === 'Circle') {
                    ellipse(width / 2, height / 2, slider.value(), slider.value());
                } else if (dropdown.value() === 'Square') {
                    rect(width / 2, height / 2, slider.value(), slider.value());
                }
            }
        	
        	 fill(0)
            textSize(sliderText.value());
            text(input.value(), width / 2, height / 2);
        	
        }