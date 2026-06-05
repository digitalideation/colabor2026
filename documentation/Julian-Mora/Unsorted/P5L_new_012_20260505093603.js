// {"P5LIVE":{"name":"new_012","mod":1777973763710}} 

let slider, checkbox, button, colorPicker, dropdown, input, sliderText;
        function setup() {
            createCanvas(windowWidth, windowHeight);

            //checkbox
            checkbox = createCheckbox('Show Form', true);
            checkbox.position(width - 400, 20);

            //sliders
            slider = createSlider(50, height - 100, 200);
            slider.position(width - 400, 60);
            
            slider2 = createSlider(50, height - 100, 200);
            slider2.position(width - 400, 80);
        
        }

        function draw() {
            background(220);
            
            if (checkbox.checked()) {
            ellipse(width/2, height/2, slider.value(), slider2.value());
            }
        } 