// {"P5LIVE":{"name":"Week 2, 5","mod":"1778584813603"}} 

function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(3);
noSmooth();
}

function draw() {
background(10);
fill(mouseX % 255, 80, 80);
let count = frameCount % 20;
let comma = "0";
let space = [""];
let commaline;
let size = 50;
textSize(windowWidth / 50);
textFont("monospace");
textWrap(CHAR);
for (let i = 0; i < 20; i++) {
space.push("11");
comma = comma + space[i];
commaline = comma.repeat(count + 1 + 33);
text(commaline, 10, commaline.length, windowWidth, windowHeight);
}
}