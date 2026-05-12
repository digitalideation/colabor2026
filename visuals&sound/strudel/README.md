# Working with strudel

* [Online editor](https://strudel.cc)
* [Ressources and Documentation](https://strudel.cc/workshop/first-sounds/)
* [Inspiration (Switchangel)](https://www.youtube.com/watch?v=3h1vM0lIrpM)


```javascript
setCpm(180/4)
samples('https://raw.githubusercontent.com/Yyyyaaaannnnoooo/Strudel-samples/refs/heads/main/strudel.json')

$: s("kicks:4") // .n("0 1 3 7") // to change the sample!
  .beat("<0,4,8,<12 [6 12]>>", 16)
  // .beat("0,4,8,12,14?", 16)
  // .beat("0, 10, 14?",16)
  // .struct("1 0 0 0  1 0 0 0 2  0 0 0 1*<1!4 2> 0 <0!4 1> 0")
  // .slow(4)
  // .fast(4)
  // .distort("3 2")
  // .bank("kick")
  .dec(5)
  // .hpf(800)
  .duckorbit(2).duckattack("0.2").duckdepth(0.95)
  ._scope()
_$: s("jungle:0").slice(16, "0 1 < 13!3 12 0 1 6> 14").fit().gain(2)

$: s("bass:0").slice(4, "0").slow("2").fit()

$: s("sd")
  .beat("4, 6?, 12", 16)
  // .struct("1!2")
  // .fast(0.5)
  .bank("tr909").dec(1)

_$: s("hh:<3 0 2 5>")
  .fast("16").gain(sine.range(0.1,0.3))
  .bank("tr909").dec(1)

_$:n("2 4 2 <7 12!4>".add("<0>"))
  // n("0 1 <2 0 3> 3 <4 0> 2 1 0".add("<0 3 7>"))
  .chord("<D Am F E>").voicing()
  // .scale("c:minor")
  .s("<supersaw>")
  .lpf(slider(4720, 20, 8000, 100))
  .detune(".5 .7 .8")
       
  // .fast(0.25)
  // .slow(2)
  // .orbit(2)
  .delay("<.25 .5 >")
  .room("<.6 .8 1>")
  .attack(0.01)
  .dec(0.3)

_$:n("7 8 5 8 ".add("<-12 -16>")).chord("<F Am B# C>").voicing().s("<supersaw>")
  .slow("8")
  .fast(1)
  .detune(".5")
  .lpf(1600)
  .attack(2)
  .dec(2)
  .orbit(2)
  .gain(2.5)
  ._punchcard()
```
