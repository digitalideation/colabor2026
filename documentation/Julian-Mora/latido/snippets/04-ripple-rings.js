// SNIPPET 4 — Ripple Rings
// Concentric ellipses expand and fade on each impact
// Nested for loop = Vera Molnár concentric shapes (week-1)

let ripples = [];

// call this when a drop hits the ground:
// ripples.push({ x: d.x, y: groundY, r: 2, life: 255 });

function drawRipples(){
  for(let i = ripples.length - 1; i >= 0; i--){
    let r = ripples[i];
    r.r    += 1.8;   // expansion speed
    r.life -= 4;     // fade speed

    for(let j = 0; j < 3; j++){          // 3 = number of rings
      let ring = r.r - j * 10;
      if(ring > 0){
        noFill();
        stroke(180, 215, 255, map(j, 0, 3, r.life * 0.5, 0));
        ellipse(r.x, r.y, ring * 2, ring * 0.3);  // 0.3 = flatness
      }
    }
    if(r.life <= 0) ripples.splice(i, 1);
  }
}
