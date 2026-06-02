let ac, oscs=[], gains=[];
let sBase, sHarm, sVol;
let dots=[], waveIdx=[];
const PHI   = 1.6180339887;
const GA    = 137.5077641;
const N     = 7;
const WAVES = ['sine','triangle','sawtooth','square'];
const WCOLS = [[100,140,255],[80,220,200],[255,140,60],[255,220,80]];

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('position','fixed'); cnv.style('top','0'); cnv.style('left','0');
  document.body.style.margin='0'; document.body.style.overflow='hidden';

  sBase = createSlider(55,440,110,1); sBase.position(20,20); sBase.style('width','180px');
  sHarm = createSlider(1,N,3,1);      sHarm.position(20,60); sHarm.style('width','180px');
  sVol  = createSlider(0,100,60,1);   sVol.position(20,100); sVol.style('width','180px');

  for(let i=0; i<N; i++) waveIdx.push(0);

  for(let i=0; i<300; i++){
    let a = radians(i*GA), r = sqrt(i)*14;
    dots.push({ x:cos(a)*r, y:sin(a)*r, fi:floor(i*N/300) });
  }
}

function waveColor(fi){ return WCOLS[waveIdx[fi]] }

function draw(){
  background(13,27,42,20);
  let base=sBase.value(), n=sHarm.value(), vol=sVol.value()/100*0.35;

  if(ac){
    for(let i=0; i<N; i++){
      oscs[i].frequency.setTargetAtTime(base*pow(PHI,i), ac.currentTime, 0.1);
      gains[i].gain.setTargetAtTime(i<n ? vol/n : 0, ac.currentTime, 0.08);
    }
  }

  translate(width/2, height/2);
  for(let d of dots){
    let on=d.fi<n, t=frameCount*0.008*(1+d.fi*0.4);
    let px=d.x+cos(t+d.fi)*(on?10:1);
    let py=d.y+sin(t+d.fi)*(on?10:1);
    let c=waveColor(d.fi);
    noStroke();
    fill(c[0],c[1],c[2], on?200:35);
    circle(px,py, on?map(d.fi,0,N,14,6):3);
  }

  // Waveform selector UI — 7 clickable circles
  resetMatrix();
  let ux=20, uy=150;
  noStroke(); fill(255,100); textSize(10); textAlign(LEFT);
  text('waveform por armónico:', ux, uy-6);
  for(let i=0; i<N; i++){
    let cx=ux+i*38+18, cy=uy+22;
    let c=WCOLS[waveIdx[i]];
    let on=i<n;
    fill(c[0],c[1],c[2], on?220:80);
    circle(cx, cy, on?32:22);
    fill(0,on?200:100); textAlign(CENTER,CENTER); textSize(8);
    text(WAVES[waveIdx[i]].slice(0,3), cx, cy+1);
    fill(255,on?180:80); textSize(9); textAlign(CENTER,CENTER);
    text(i+1, cx, cy-20);
  }

  noStroke(); fill(255,130); textSize(11); textAlign(LEFT);
  text('base: '+sBase.value()+' Hz',  210,33);
  text('armónicos φ: '+sHarm.value(), 210,73);
  text('volumen: '+sVol.value()+'%',  210,113);
  if(!ac){ fill(255,180); textAlign(CENTER,CENTER); textSize(18); text('click to start',width/2,height/2); }
}

function mousePressed(){
  if(!ac){
    ac = new AudioContext();
    for(let i=0; i<N; i++){
      let g=ac.createGain(); g.gain.value=0; g.connect(ac.destination); gains.push(g);
      let o=ac.createOscillator(); o.type=WAVES[waveIdx[i]]; o.connect(gains[i]); o.start(); oscs.push(o);
    }
    return;
  }
  ac.resume();
  // Check click on waveform circles
  let ux=20, uy=172;
  for(let i=0; i<N; i++){
    let cx=ux+i*38+18, cy=uy;
    if(dist(mouseX,mouseY,cx,cy)<20){
      waveIdx[i]=(waveIdx[i]+1)%WAVES.length;
      if(oscs[i]) oscs[i].type=WAVES[waveIdx[i]];
    }
  }
}

function windowResized(){ resizeCanvas(windowWidth,windowHeight); }
