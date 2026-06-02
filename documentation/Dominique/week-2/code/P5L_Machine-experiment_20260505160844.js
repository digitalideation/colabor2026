// {"P5LIVE":{"name":"Machine-experiment","mod":1777997324463}} 

let slider, checkbox, button, colorPicker, dropdown, input, sliderText, buttonText, radioButton;
let bgColor;
let colorText;
let positionDOM;


function setup() {
    createCanvas(windowWidth, windowHeight);
    positionDOM = width - 400
 
 // -------- Form --------
	//checkbox (Erstellung Checkbox / Position)
	checkbox = createCheckbox('Show Form', true);
	checkbox.position(width - 400, 20);
	
	// Form Breite verändern
	slider = createSlider(50, height - 100, 200);
	slider.position(positionDOM, 60);
	
	// Form Höhe verändern
	slider2 = createSlider(50, height - 100, 200);
	slider2.position(positionDOM, 80);
	
	// Color Picker Kreis
    colorPicker = createColorPicker('#ff0000');
    colorPicker.position(positionDOM, 120);
    
    	// Dropdown Form
    dropdown = createSelect();
    dropdown.position(positionDOM, 160);
    dropdown.option('Circle');
    dropdown.option('Square');
    dropdown.option('Circle2');
    rectMode(CENTER);
    

 // -------- Hintergrund --------
 	// Button Zufälliger HG
    button = createButton('Random Background');
    button.position(positionDOM, 210);
    button.mousePressed(() => {
    bgColor = color(random(255), random(255), random(255));
    });
    bgColor = color(220);

// -------- Text --------
    // Input field
    input = createInput('Type text');
    input.position(positionDOM, 260);
    textAlign(CENTER, CENTER);
    
    	// Textgrösse
	sliderText = createSlider(50, height - 100, 200);
	sliderText.position(positionDOM, 290);
    
    // Dropdown Font
    dropdownFont = createSelect();
    dropdownFont.position(positionDOM, 320);
    dropdownFont.option('Helvetica');
    dropdownFont.option('Courier');
    dropdownFont.option('Verdana');
    dropdownFont.option('Times New Roman');
    rectMode(CENTER);
	
	// Button zufällige Textfarbe
    buttonText = createButton('Random Color Text');
    buttonText.position(positionDOM, 350);
    buttonText.mousePressed(() => {
    colorText = color(random(255), random(255), random(255));
    });
    colorText = color(220);

// -------- Kontur --------
	// Konturdicke verändern
	sliderStroke = createSlider(2, 50, 5);
	sliderStroke.position(positionDOM, 450);
	
    //Radio button
    radio = createRadio();
    radio.option('Black');
    radio.option('White');
    radio.option('None');
	radio.selected('None');
    radio.position(positionDOM, 420);
}


// Zeichnet Kreis / Rechteck
function draw() {
	background(bgColor);
	fill(colorPicker.value());
	strokeWeight(sliderStroke.value());

	if (radio.value() === 'Black') stroke(0);
    if (radio.value() === 'White') stroke(255);
    if (radio.value() === 'None') noStroke();
        

	//if-loop - Dropdown - Form auswählen
	if (checkbox.checked()) {
    	if (dropdown.value() === 'Circle') {
        	ellipse(width / 2, height / 2, slider.value(), slider2.value());
        } 
        else if (dropdown.value() === 'Square') {
        	rect(width / 2, height / 2, slider.value(), slider2.value());
        }
        else if (dropdown.value() === 'Circle2') {
        	ellipse(width / 2 + 100, height / 2, slider.value(), slider2.value());
        	ellipse(width / 2 - 100, height / 2, slider.value(), slider2.value());
        }
    }
    
    // if-loop - Font auswählen
    if(dropdownFont.value() === 'Helvetica') {
        textFont('Helvetica')
    } 
    else if(dropdownFont.value() === 'Courier') {
        textFont('Courier')
    } else if(dropdownFont.value() === 'Verdana') {
        textFont('Verdana')
    }
	else if(dropdownFont.value() === 'Times New Roman') {
        textFont('Times New Roman')
    }
    
    // Gibt Text von Input aus
    // zufällige Text-Farbe
    push()
    noStroke()
    fill(colorText)
    textSize(sliderText.value());
    text(input.value(), width / 2, height / 2);
    pop()
} 