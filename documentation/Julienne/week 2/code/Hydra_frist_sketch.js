osc(20, 0.1, 1.5).shift(0.4,0,0)
  .modulate(src(o0).scale(0.1), 0.15)
  .modulate(noise(3, 0.5), 0.1)   // noise zu Output o0 hinzufügen
  .out(o0)
//Output 0 wird genommen und rotiert
src(o0).rotate(0.8).out(o1)
//Kaleid wird auf srco1 angewendet und Scroll-Effekt wird hinzugefügt
//neuer Output heisst o2
src(o1).kaleid(10).scrollY(1, 0.2).out(o2)
;


render(o2)