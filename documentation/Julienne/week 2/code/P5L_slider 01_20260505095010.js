// {"P5LIVE":{"name":"slider 01","mod":1777974610291}} 

let slider, checkbox, button, colorPicker, dropdown, input, sliderText;
let bgColor;
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
}

//
function draw() {
	background(bgColor);
	fill(colorPicker.value());

	if(checkbox.checked()) {
		ellipse(width / 2, height / 2, slider.value(), slider.value());
	}
}