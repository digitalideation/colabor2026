## Monday  1st of June 

## Internal presentation and feedback 

This is my final code I used for the final presentation and that I'll use for tuesday's algorave:

```javascript
//we want to talk about the story of the so called "windrush generation"
//and about the formation of drum and bass in the UK

//"did you hear about the windrush generation before?"
_$:s("my_voice:0").slow(4)
//"what does it have to do with drum and bass?"
_$:s("my_voice:1").slow(4)
//"and how was drum and bass being formed in the UK?"
_$:s("my_voice:2").slow(4)


/*Tobierre, C. (2023). 
Oral History Project: The Windrush Scandal in a Transnational and Commonwealth Context.
Interviewed by Cox, J. 20 March, Chelmsford. 
Available at: https://windrushscandal.org/charlotte-tobierre-interview/ 
[Accessed: 28 May 2026]*/

//so let us listen to the daughter of a victim of the windrush scandal
_$:s("my_voice:3").slow(1)._scope()

//set the bpm
//$:setcpm(173/4)
//first there was a snare drum
_$:s("sd:2").beat("4,12",16).gain(0.3)
//and some highhats
_$:s("hh:3!8").gain(0.25).gain(0.25,0,5)
//and of course a bassline
_$:s("bd").beat("0,7?,10",16).duck("3:4:5").gain(0.4)

// OF COURSE WITH THE CLASSIC OFFBEAT!

//my inspiration I used for the different bass drum patterns:
//https://www.youtube.com/watch?v=t5oDmmwBuS4
//The Dotted Quarter Note -> 3+3+2 Rhythmus
_$: s("drumulator_bd").lpf(500)
  .note("c3 c3 f3")
//struct for patterns of hit(1,@ to hold) and silences(0)
.struct("1@3 1@3 0@2").gain(0.25)// 3/8, 3/8, 2/8

//i want to create some different kind of basslines as in different kind 
//of genres that influenced dnb
_$: s("bd").lpf(200)
.note("F1 F#1")
.struct("0 1@5 1@2").gain(0.3)
._punchcard()// punchcard shows what's happening visually
//deep bass wobbly blast
_$: s("riffs:70")//.lpf(200)
.note("C")
.struct("0 0 1@11 0@4")

// 1/4  Takt
_$:s("bd").lpf(200)
.note("F1 F#2 F2")
.struct("1@4 1@3 1")
._punchcard()

//1/8th notes (bass melody kinda dubstep vibes) 
_$:s("gm_fx_atmosphere").lpf(500)
.note("B1 A#1 G#1 F#1 D#1@3 F#1")
.struct("1*8")
.delay(0.25)
._punchcard()

// three dotted 1/4 taking 1/4 increase the length by half
// 3/8 3/8 2/8 bzw 1/4
_$:s("bd:8")//.lpf(200)
.note("F2 F#1 F")
.struct("1@3 1@3 1@2")

//"foghorn"
_$:s("riffs:67").slow(8)

// reggaeton kind of bassline
_$:s("bd:8").lpf(200)
.note("F2")
.struct("1@4 1@4 1@3 1@3 1@2").gain(0.5)

// different reggaeton
_$:s("bd").lpf(200)
.note("F2")
.struct("1@4 1@4 1@3 1@3 1@2").gain(0.5)

//neuro drum and bass (pattern8)
_$:s("bd:7").lpf(300)
.note("F1").sustain(2)
.beat("0, 4, 7, 10,13",16)

// mirrored 2-step
_$: s("bd").lpf(300)
.note("G").sustain(10)
.struct("1@4 1@3 1@3 1@2 1@4")

_$: note("F1 C2 F1*5").s("sine")
.struct("1@6 1@2 1@2 1@2 1@2 1@2")

// 1 or 2 for the beginning,59,6 & 12 really atmospheric
// back to the pads
$:s("pads:59").slow(2).legato(1)
  .lpf("<300 150 200 600 300>") 
  //lpf("<200 150 200>")
  //.gain("0.2")
  .resonance(12).gain("0.25, 0.1")

//some sampled vocals and calling them every second cycle
_$:s("vocals:36").slow(16).gain(0.25)

// biuuuum fx 48, 31 very nice, vrrrr 43
$:s("fx:48").slow(4).gain(0.1)// funky little sound

//breaks like used in jungle
_$: s("breaks:16").slow(4).gain(0.25)


// let's get some random notes in there
// and use the power of code to create something new

_$:note("c2 g2!2 d2 f1").s(wchoose(["sine",10], ["triangle",1], ["bd:6",1]))

_$:n(irand(12).seg(2))
.chord("em am").voicing()
 
//dividing notes from chords C,D,F into 32 random notes and make 8 segments

_$:n(irand(32).seg(8)) 
.rib(32,8)
.chord("C D F").voicing()
.add("0 100 -140 0")
.decay("0.05")// very short
// sine returns always -1 and 1 as a value
.lpf(sine.slow(12).range(500, 2000))//lpf between 20 & 20'000(filter)
.delay("0.6")
.delaytime(1)
.s("supersaw").gain(0.5)._punchcard()
```
