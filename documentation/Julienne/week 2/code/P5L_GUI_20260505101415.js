// {"P5LIVE":{"name":"GUI","mod":1777976055921}} 

let slider, checkbox, button, colorPicker, dropdown, input, sliderText, buttonText;
let bgColor;
let colorText;
let positionDOM;

function setup() {
	createCanvas(windowWidth, windowHeight);
	positionDOM = width - 400

	//checkbox (Erstellung Checkbox / Position)
	checkbox = createCheckbox('Show Form', false);
	checkbox.position(width - 400, 20);

	//sliders (Erstellung Slider / Position)
	// 50 = Startpunkt / height-100 = max Grösse
	slider = createSlider(50, height - 100, 400);
	slider.position(width - 400, 60);
	//slider Text
	sliderText = createSlider(0, 300, 400);
	sliderText.position(width - 600, 60);

	// Button
	button = createButton('Random Background');
	button.position(positionDOM, 100);
	button.mousePressed(() => {
		bgColor = color(random(255), random(255), random(255));
	});
	bgColor = color(220);
	
	// ButtonText
	buttonText = createButton('Random Color Text');
	buttonText.position(positionDOM, 250);
	buttonText.mousePressed(() => {
		colorText = color(random(255), random(255), random(255));
	});
	//Start Farbe
	colorText = color(200);

	// Color Picker
	colorPicker = createColorPicker('#ff0000');
	colorPicker.position(positionDOM, 140);

	// Dropdown
	dropdown = createSelect();
	dropdown.position(positionDOM, 180);
	//Dropdown Option hinzugügen
	dropdown.option('Circle');
	dropdown.option('Square');
	dropdown.option('Circle2');
	rectMode(CENTER);

	// Input field
	input = createInput('Type text');
	input.position(positionDOM, 220);
	textAlign(CENTER, CENTER);
}

//
function draw() {
	background(bgColor);
	fill(colorPicker.value());

	if(checkbox.checked()) {
		//wenn dropdown value is circle = draw ellipse
		if(dropdown.value() === 'Circle') {
			ellipse(width / 2, height / 2, slider.value(), slider.value());
			//wenn dropdown value is square = draw rectangle
		} else if(dropdown.value() === 'Square') {
			rect(width / 2, height / 2, slider.value(), slider.value());
		} else if(dropdown.value() === 'Circle2') {
			ellipse(width / 2 + 100, height / 2, slider.value(), slider.value());
			ellipse(width / 2 - 100, height / 2, slider.value(), slider.value());
		}
	}
	//Text values von Slider und Button
	fill(colorText)
	textSize(sliderText.value());
	text(input.value(), width / 2, height / 2);
}