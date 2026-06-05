// {"P5LIVE":{"name":"new_012","mod":1779730123736}} 

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