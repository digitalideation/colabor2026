// {"P5LIVE":{"name":"new_012","mod":1777973939249}} 

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
            
            // Button
            button = createButton('Random Background');
            button.position(positionDOM, 100);
            button.mousePressed(() => {
                bgColor = color(random(255), random(255), random(255));
            });
            bgColor = color(220);
        
        
        
        
        
        
        
        }

        function draw() {
            background(220);
            
            if (checkbox.checked()) {
            ellipse(width/2, height/2, slider.value(), slider.value());
            }
        } 