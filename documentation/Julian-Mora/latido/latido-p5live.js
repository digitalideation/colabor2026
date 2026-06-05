// LATIDO — gotas individuales en secuencia Fibonacci, de llovizna a aguacero en 2 min

let drops = [], ripples = [], ac, master, started = false, lastSpawn = 0, n = 0;
const SPAWN = 0.32;
const FIB   = [1,1,2,3,5,8,13,21,34,55,89,144];
let W = [];
for(let g = 0; g < FIB.length; g++) for(let i = 0; i < FIB[g]; i++) W.push(g);

function setup(){
  let c = createCanvas(windowWidth, windowHeight);
  c.style('position','fixed'); c.style('top','0'); c.style('left','0');
  document.body.style.margin = '0';
}

function addDrop(){
  if(n >= W.length) return;
  let f = FIB[W[n]], x = noise(n * 0.4) * width;
  drops.push({ x, y: random(-height,0),
    speed: map(f,1,144,2,9), dw: map(f,1,144,2,6), dh: map(f,1,144,6,18),
    freq: map(x,0,width,300,900), vol: map(f,1,144,0.04,0.28), f });
  n++;
}

function playDrop(freq, vol){
  let o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
  o.type = 'sine'; o.frequency.value = freq;
  g.gain.linearRampToValueAtTime(vol, t+0.01);
  g.gain.exponentialRampToValueAtTime(0.001, t+0.4);
  o.connect(g); g.connect(master); o.start(t); o.stop(t+0.5);
}

function draw(){
  background(6, 8, 20, 28);
  if(!started){ fill(180,210,255,120); textAlign(CENTER,CENTER); textSize(16); text('click to start',width/2,height/2); return; }

  let t = millis()/1000, gy = height*0.82;
  if(t - lastSpawn >= SPAWN && n < W.length){ addDrop(); lastSpawn = t; }

  for(let x = 0; x < width; x += 4){
    stroke(80,140,255, map(x,0,width,15,50));
    point(x, gy + sin(frameCount*0.03 + x*0.02)*2);
  }

  for(let d of drops){
    d.y += d.speed;
    let sw = sin(frameCount*0.02 + d.x*0.01)*1.5;
    noStroke(); fill(180,215,255, map(d.f,1,144,130,210));
    ellipse(d.x+sw, d.y, d.dw, d.dh);
    if(d.y >= gy){
      ripples.push({x:d.x, y:gy, r:2, life:255});
      playDrop(d.freq, d.vol);
      d.y = random(-height*0.5,-10);
      d.x = noise(d.x*0.003+t)*width;
    }
  }

  for(let i = ripples.length-1; i >= 0; i--){
    let r = ripples[i]; r.r += 1.8; r.life -= 4;
    for(let j = 0; j < 3; j++){
      let ring = r.r - j*10;
      if(ring > 0){ noFill(); stroke(180,215,255, map(j,0,3,r.life*0.5,0)); ellipse(r.x,r.y,ring*2,ring*0.3); }
    }
    if(r.life <= 0) ripples.splice(i,1);
  }

  noStroke(); fill(180,210,255,60); textSize(11);
  textAlign(LEFT);  text('fib: '+FIB[W[max(n-1,0)]]+'  drops: '+drops.length+'/376', 20, height-16);
  textAlign(RIGHT); text(nf(floor(t/60),1)+':'+nf(floor(t%60),2)+' / 2:00', width-20, height-16);
}

function mousePressed(){
  if(!ac){
    ac = new AudioContext(); master = ac.createGain(); master.gain.value = 0.7;
    master.connect(ac.destination); started = true; lastSpawn = -SPAWN;
  } else ac.resume();
}

function windowResized(){ resizeCanvas(windowWidth,windowHeight); }
