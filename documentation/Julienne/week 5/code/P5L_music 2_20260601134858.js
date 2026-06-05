// {"P5LIVE":{"name":"music 2","mod":1780321738887}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 255, 10);
  stroke(255);
  strokeWeight(3);
  
  let spacing = height / 6;
  let t = frameCount / 60;

  for (let k = 0; k < 3; k++) {
    let phase = (k / 3) * TWO_PI; // die 3 Trichter versetzt in der Zeit

    for (let i = 1; i <= 5; i++) {
      // links: eng zusammen, rechts: weit auseinander — oder umgekehrt
      let leftSpacing  = map(sin(t + phase), -1, 1, 20, spacing);
      let rightSpacing = map(sin(t + phase), -1, 1, spacing, 20);

      let leftY  = height / 2 + (i - 3) * leftSpacing;
      let rightY = height / 2 + (i - 3) * rightSpacing;

      line(0, leftY, width, rightY);
    }
  }
}