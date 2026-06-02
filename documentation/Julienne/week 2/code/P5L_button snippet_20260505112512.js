// {"P5LIVE":{"name":"button snippet","mod":1777980312202}} 

let button
let buttonvariable
function setup() {
	createCanvas(windowWidth, windowHeight)
	
 	button = createButton('Button');
	button.position(width-300,100);
	button.mousePressed(() => {
		buttonvariable = color(random(255), random(255), random(255));
	});
	buttonvariable = color(220); 
}

function draw() {
  background(buttonvariable)
	
  
}

