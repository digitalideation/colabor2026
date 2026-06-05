// {"P5LIVE":{"name":"checkbox & slider","mod":1779729082682}} 

        let slider, checkbox, button, colorPicker, dropdown, input, sliderText;
        function setup() {
            createCanvas(windowWidth, windowHeight);

            //checkbox
            textFont('helvetica')
            checkbox = createCheckbox('Show Form', true);
            checkbox.position(width - 400, 20);
            checkbox.style('font-family', 'helvetica');

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