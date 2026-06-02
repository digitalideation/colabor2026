# Working with strudel

* [Online editor](https://strudel.cc)
* [Ressources and Documentation](https://strudel.cc/workshop/first-sounds/)
* [Inspiration (Switchangel)](https://www.youtube.com/watch?v=3h1vM0lIrpM)

```javascript
setcpm(170/4)

_$:s("bd")
  // .struct("1 0 0 <0 1> 1 0 0 0 1 0 0 0 1 0 1? 0")
  // .struct("1 0!3 1 0!3 1 0!3 1 0!3")
  .beat("0, 10, 12?", 16)
  // .beat("0, 4, 8, 12", 16)
  .bank("tr909").gain("0.5 0.25!3")

_$:s("sd")
  .struct("0 0 0 0 1 0 0 0 0 0 0 0 1 0 0 0")
  .bank("compurhythm1000").gain(0.25)

_$:s("hh")
  .fast(8)
  .bank("tr909").gain("0.25 0.125")


_$:n(irand(12).seg(16))
  .rib(14, 1)
  .chord("C Am F C").voicing()
  .decay(0.5)
  // .lpf(sine.slow(8).range(500, 8000))
  .lpf(sine.slow(8).range(500, 2000))
  .delay("0.25")
  .delaytime(0.5)
  .s("supersaw").gain(0.5)._punchcard()

$:s("twobars:0").slice(8, "0 1 <2 2*2> 3 [4 0] 5 6 7".every(3, rev)).slow(2).fit().gain(0.25)




```

```javascript
setcpm(120/4)
// playing a bass drum
_$:sound("bd*4").gain(0.25)
// playing snare drum
_$:sound("sd*2").gain(0.25)
// Playing supersaw
_$:note("c3 c4 d3 f3")
  .s("supersaw").dec(0.5).gain(0.25)

// using chord
_$:note("0 1 2 <3 5 7 12>".add(60)).chord("C A F E").voicing()
  
  
  .s("supersaw").dec(0.5).gain(0.25)


// using chord
$:n("0 1@2 <2 4 6> [3 5 7 12 [12 [2 4] -4] 1 2]".add("0 -6 -12 0"))
  .chord("C A F E")
  .voicing()
  
  .slow(4)
  // .fast(4)
  .s("supersaw sine").dec(1).gain(0.25)
  ._punchcard()
```

```javascript
samples('https://raw.githubusercontent.com/Yyyyaaaannnnoooo/Strudel-samples/refs/heads/main/strudel.json')
setCpm(180/4)

$: s("kicks").n("5")
  // .beat("<0,4,8,<12 [6 12]>>", 16)
  // .beat("0, 3?,4,8,12,14?", 16)
  .beat("0, 10, 14?",16) 
  // .struct("x 0 0 x 0 0 0 x 0 x 0 0 x 0 x 0")
  // .struct("1 0 0 0  1 0 0 0 2  0 0 0 1*<1!4 2> 0 <0!4 1> 0")
  // .slow(4)
  // .fast(4)
  // .distort("3 2")
  // .bank("kick")
  .dec(5)
  // .hpf(800)
  .lpf(800)
  .duckorbit(2).duckattack("0.2").duckdepth(0.65)
  ._scope()
$: s("jungle").n("5").slice(16, "6 1 6 7").fit()
  // .lpf(1800)
  .gain(1)

_$: s("bass:0").slice(4, "0").slow("2").fit()

$: s("sd:0")
  .beat("4, 6?, 12", 16)
  // .struct("1!2")
  // .fast(0.5)
  .bank("tr909").dec(1)

$: s("hh:<3 0 2 5>")
  .fast("16").gain(sine.range(0.1,0.3))
  .bank("tr909").dec(.1)

_$:n(irand(12).add("-6").seg(2)) // test irand
  .rib(32, 2)
// n(irand(8)).struct("x x*2 x x*3").scale("C:minor")
  // .scale("c:pentatonic")
  .chord("E <C F D>").voicing()
  .lpf(2000)
  .decay("1")
  .detune(0.5)
  // .delay(0.5)
  .s("supersaw")._punchcard()
_$: n(sine.slow(4).segment(16).range(0,31)).scale("C:minor")

_$:n("2 4 2 <7 12!4>".add("<0>"))
  // n("0 1 <2 0 3> 3 <4 0> 2 1 0".add("<0 3 7>"))
  .chord("<D Am F E>").voicing()
  // .scale("c:minor")
  .s("<supersaw>")
  // .lpf(slider(200, 200, 8000, 100))
  // .lpenv("2 4 6 8")
  .detune(".5 .7 .8 1")
  .cutoff(sine.slow(12).range(600,1200))
       
  .fast(2)
  // .slow(2)
  // .orbit(2)
  .delay("<.25 .5 0.6 0.8>")
  .room("<.6 .8 1>")
  .attack(0.01)
  .dec(0.3)
  ._punchcard()


$:n("7 8 5 8 ".add("<-12 -16>")).chord("<F Am B# C>").voicing().s("<supersaw>")
  .slow("8")
  .fast(1)
  .detune(".5")
  .lpf(600)
  .attack(2)
  .dec(2)
  .orbit(2)
  .gain(1)
```

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
