// SNIPPET 1 — Fibonacci Spawn
// Drops arrive one by one; each drop's weight = its Fibonacci number
// fib=1 → tiny & slow / fib=144 → large & fast

const SPAWN = 0.32;
const FIB   = [1,1,2,3,5,8,13,21,34,55,89,144];

let W = [], n = 0, lastSpawn = 0;
for(let g = 0; g < FIB.length; g++)
  for(let i = 0; i < FIB[g]; i++) W.push(g);

function addDrop(){
  if(n >= W.length) return;
  let f = FIB[W[n]], x = noise(n * 0.4) * width;
  drops.push({
    x, y: random(-height, 0),
    speed: map(f, 1, 144, 2, 9),
    dw:    map(f, 1, 144, 2, 6),
    dh:    map(f, 1, 144, 6, 18),
    freq:  map(x, 0, width, 300, 900),
    vol:   map(f, 1, 144, 0.04, 0.28), f
  });
  n++;
}

// inside draw():
// let t = millis()/1000;
// if(t - lastSpawn >= SPAWN && n < W.length){ addDrop(); lastSpawn = t; }
