// SNIPPET 2 — Web Audio Drop
// Short sine tone with attack/decay envelope on each impact
// Based on: "LFO to control pitch and amplitude" — week-1 README line 530

let ac, master;

function playDrop(freq, vol){
  let o = ac.createOscillator(), g = ac.createGain(), t = ac.currentTime;
  o.type = 'sine';           // change → 'triangle' (warm) or 'square' (electronic)
  o.frequency.value = freq;
  g.gain.linearRampToValueAtTime(vol, t + 0.01);       // attack
  g.gain.exponentialRampToValueAtTime(0.001, t + 0.4); // decay
  o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.5);
}

function mousePressed(){
  if(!ac){
    ac = new AudioContext();
    master = ac.createGain();
    master.gain.value = 0.7;   // master volume
    master.connect(ac.destination);
  } else ac.resume();
}
