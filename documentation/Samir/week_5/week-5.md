Working with Strudel

Creating the pink panther theme (seemed a bit off)
```javascript
$: note("Eb3 ~ E3 ~ ~ ~ Gb3 ~ G3 ~ ~ ~ Eb3 ~ E3 ~ ~ ~ Gb3 ~ G3 ~ ~ ~ C4 ~ B3 ~ ~ ~ E3 ~ G3 ~ ~ B3 ~ Bb3 ~ ~ ~ ~ ~ ~ A3 G3 E3 D3 E3 ~ E3 ~ ~ ~ ~ ~ ~ ~")
  .sound("piano").slow(4)
// $: note("00 E2 B2 G2 B2").delay(.5).sound("piano")
  
  ._punchcard()
```

creating a sound out of the song 7 years
```javascript
$: note("[Bb5 A5 F5 G5] , D5 ~ ~ F5 ~ ~ D5 ~ ~ F5 ~ ~ D5 ~ ~ F5 ~ ~")
  .sound("piano").slow(1).trans(-20)
  $: sound("bd*2 mt [bd mt] <[mt hh*2] mt*2>").bank("AkaiLinn").delay(slider(0.42)).gain(slider(0.557))
    $: s("lt*16, lt*4").delay(slider(0.224)).gain(slider(0.233))
      $: s("bd*4").delay(slider(.5)). gain(slider(.5))
  
  
  .scope()
```

Trying stuff out with different instruments
```javascript
$: note("[Bb5 ~ A5 ~ F5 ~ G5], ~ D5 F5 D5 F5 D5 F5 ").gain(slider(0)).trans(-30)
  .o(3).sound("piano").slow(1)
._pianoroll()



$: s("bd:2!4").gain(slider(0.484)).s("organ_full")
  $: n("<9 1 4 7>*4").gain (slider(0.465)).s("sawtooth")
  ._scope()
```

Trying something with the melody of a coding youtuber (Switch Angel)
```javascript
$: n("<0 4 0 9 7>*16").scale("g:minor").trans(-12).o(3).s("sawtooth")
  .detune(rand).add(note("<6 4>*2"))
._pianoroll()

$: s("bd:2!4")
```

Switching up the order again
```javascript
$: note("Bb5 ~ A5, ~ G5 ~ F5 ~ D5 ~ ~ ~ F5, ~ ~ ~ D5 ~ ~ ~ F5, ~ ~ ~ D5 ~ ~ ~ F5 ~ ~ ~ ~")
  .sound("piano").slow(1).trans(-20).add(0, 4)

$: ("bd*16, bd*4").s("sawtooth").gain(slider(0))
  
  
  .scope()
```
