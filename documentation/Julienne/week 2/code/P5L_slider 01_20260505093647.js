// {"P5LIVE":{"name":"slider 01","mod":1777973807214}} 

        let slider, checkbox, button, colorPicker, dropdown, input, sliderText;

        function setup() {
        	createCanvas(windowWidth, windowHeight);

        	//checkbox
        	checkbox = createCheckbox('Show Form', true);
        	checkbox.position(width - 400, 20);

        	//slider1
        	//first value = start Grösse des Kreises
        	// second value = max Grösse des Kreises
        	slider = createSlider(50, width - 100, 200);
        	slider.position(width - 400, 60);
        	//slider2
        	slider2 = createSlider(50, height - 100, 200);
        	slider2.position(width - 400, 80);
        }

        function draw() {
        	background(220);

        	if(checkbox.checked()) {
        		//slider1 value bestimmt breite, slider 2 value höhe 
        		ellipse(width / 2, height / 2, slider.value(), slider2.value());
        	}
        }