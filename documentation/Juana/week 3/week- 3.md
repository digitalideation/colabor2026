# week 3

**13.05.26 Strudle**

https://strudel.cc/

![Strudel 1](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 3/images/Strudel 1.png)

```
setCpm(120/4)
//playing a bass drum
$:sound("bd*4").gain(0.25)
//playing a share drum
$:sound ("sd*2").gain(0.25)
$:s("gm_electric_guitar_clean")

$:n("0 1 2 [3 8 12]")
$:s("gm_string_ensemble_2").gain(1)

$:note("c3 c4 d3 f3").voicing()
  .s("supersaw").dec(0.5).gain (0.25)

//Using chord
$:n("0 1 2 [3 8 12[12[2 4]14]18 24]".add(10))
  .chord("C A F E")
  .voicing()
  // .slow(2)
  .fast(2)
   .s("supersaw").dec(0.5).gain (0.25)

  ._punchcard()


```



![Strudel 2](/Users/juanita/Library/Mobile Documents/com~apple~CloudDocs/Design Managment/Collabor- Creative Coding/Documentation/week 3/images/Strudel 2.png)

```javascript
setCpm(160/4)

$:s("bd")
  // .struct("1 0 0 <0 1> 0 0 0 1 0 0 0 1 0 1? 0")
  //exclamation mark repeat the value
  // . struct ("1 0!3 1 0!3 1 0!3 1 0!3")
  .beat ("0,10, 12?", 16)
  // .beat ("0, 4, 8, 12", 16)
  .bank("tr909").gain("0.5 0.25!3")

$:s ("sd")
   .struct("1 0 0 0 1 0 0 0 1 0 0 0 1 0 0 0")
  .bank("compurhythm1000").gain("0.25")

$:s ("hh")
  .fast (8)
  .bank("tr909").gain("0.25 0.125")

$:n(irand(12).seg(8))
  .rib(8, 1)
  .chord ("C Am F C").voicing()
  .decay (0.05)
  // .lpf(600)
  .lpf(sine.slow(8).range(500, 2000))
  .delay("0.25")
  .delaytime(0.5)
  .s("supersaw").gain(0.5)._punchcard()
```
