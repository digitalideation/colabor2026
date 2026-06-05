// {"P5LIVE":{"name":"random colorful circle","mod":1777993426974}} 

let t = 0;



function setup() {
	createCanvas(windowWidth, windowHeight)
	
 setupAudio(true) // global vars
// a5.ease = .075 // set easing 
}
function draw() {
    updateAudio();
    
    // Noise für Bewegung über den ganzen Screen
    let x = noise(t) * width;
    let y = noise(t + 100) * height;
    t += 0.005;
    
    fill(random(255), random(255), random(255));
    ellipse(x, y, ampEase * 20);
}

/* 
P5LIVE - Audio
If using outside P5LIVE, include p5live-audio.js 
https://cdn.jsdelivr.net/gh/ffd8/P5LIVE/includes/utils/p5live-audio.js
*/