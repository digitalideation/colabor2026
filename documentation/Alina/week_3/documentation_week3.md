## Montag 11.Mai 2026

## "Input on sound and visual music" mit Stefanie Bräuer
![[CCC_1 13.jpeg|613]]
![[CCC_1 14.jpeg]]
Hub am Nachmittag:
![[CCC_1 15.jpeg]]
## Dienstag 12.Mai 2026 



Dominique und ich haben uns noch einmal zusammengesetzt und geschaut, was wir von der verangegangenen Woche besonders interessant fanden und weiterverfolgen möchten. 

Wir haben uns darauf geeinigt, dass ich den Audioteil und Dominique den visuellen Teil übernimmt. Da ich mich für Drum and Bass (DnB), bzw. Jungle interessiere, habe ich noch etwas mehr über die Herkunft von DnB recherchiert und finde es wichtig die Geschichte und Herkunft zu erzählen. Die Geschichte von DnB ist auch eine Geschichte über die Kolonialisierung von Jamaika, der Karibik, durch England, die Gastarbeiter*innen - und so genannte Windrush-Generation- die nach England nach dem 2. Weltkrieg eingeladen wurden, um die Arbeit, die die Weissen nicht machen wollten, zu übernehmen. Es ist eine Geschichte über Rassismus, Diskriminierung und eine Antwort auf den Ausschluss von Clubs und die damit verbundene Diskriminierung. Autonome Soundsysteme wurden aufgebaut und Feste wurden auf den Strassen gefeiert.  

DnB verbindet musikalische Einflüsse aus Reggae, Dub, Hip Hop, Electro Funk, Soul, Dance Hall, Grime und Punk, also Einflüsse von den Menschen, die diese Musik aus der Karribik mitbrachten. Schlagzeug-Solos von beispielsweise James Brown wurden beschleunigt und gesamplet.  

https://www.bbc.com/news/articles/c3w4q1ee1p4o
![[CCC_1 12.jpeg]]
Hub am Nachmittag:
![[CCC_1 16.jpeg]]## Mittwoch 13.Mai 2026 Strudel-Einführung mit Yann

```javascript
setCpm(180/4)
$:s("bd:2*8").delay(0)
  .bank("tr909")// techno tr808 hiphop
.struct("1 0!3 1 0!3 1 0!3 1 0!3").gain(0.5)
$:s("sd").struct("0 0 1@2").gain(0.25)
$:s("hh:3*4").gain(0.5).lpf(sine.slow(8).range(100, 3000))
$:s("bd:3").struct("1 0!3")
$:n(irand(12).seg(32)) //.seg(16)
.rib(8,1)
.chord("C Am Em C").voicing()
.add("0 12 -12 0")
.decay("0.05")// very short
.lpf(sine.slow(16).range(500, 2000))//between 20 20'000(filter)
.delay("0.5")
.delaytime(1)
.s("supersaw").gain(0.5)._punchcard()
// changing the decay (how long you hear the note in seconds)
```

```javascript
setcpm(170/4)
//Äquivalent zu bpm -> cycles per minute 
$:s("bd:3").beat("0,7?,10",16).duck("3:4:5")
$:s("sd:2").beat("4,12",16)//.random(2,5)
$:s("hh:4!8")
$:s("fx").vibmod("<.25 .5 1 2 12>:8").lpf(500).lfo().gain(0.4)
  //Nimm die erste bassdrum und spiel sie immer auf die 1,
  //manchmal (zu 50% ->?) auf den 7. und jedes 10. von 16-teln (Offbeat)
  //sd auf jeden 4. und 12. von 16-teln
  //highhats(4. aus der sammlung) 8 mal :)

$:s("vocals:33").slow(4)//.fast(0.5).gain(0.4).slice(8,"7 6 [2 4]3")

//$:note("am c f em ").s("piano:5").rev().delay(1).gain(1)
//$:s("saw").note("c").lpf(500).lfo().slow(2)

$:wchooseCycles(["em em ",5], ["g g",3], ["am am",1]).fast(2).note().s("gm_marimba")

$:s("vocals:26").scrub(rand.seg(8).rib(6,1)).gain(0.3)
$:note("e1*2").s("sawtooth")
.legato(1).lpf("<400, 2000>").slow(4).gain(0.4).distort(0.2).delayfb(0.2)
```
![[CCC_1 17.jpeg]]

Here the three code snippets I prepared for the presentation:

#1

```javascript
setcpm=(170/4)
// melody 
const appregiator =[
  "{em am c d g f}%8",
  "{f g am em c d}%16"

]

main_arp: note(pick(appregiator, "<1 2 1 1 2>".slow(2)))
.lpf(200).sustain(0.5).release(0.01).attack(0)
.room(0.6)

//._pitchwheel()

._punchcard() //to visualize the beats
bassline: note("[eb1, eb2]!16 [f2,f1]!16 [g2, g2]!16 [f2,f1]!8 [bb2, bb1]!8")
.sound("bd")
.slow()
$:s("bd").beat("0,7?,10",16).duck("3:4:5").gain(0.3)
$:s("sd:2").beat("4,12",16).fscope().gain(0.3)
_$:s("hh*8")
_$:s("hh:10!8").fast(2)

_$:s("fx:24").slow(4).gain(0.1).fm(4).fmdecay("<0.1 0.5 .1 .2>")
_$:s("pads:12").gain(0.1).delay("<0 .25 .5 1>")
$:s("pads:18").gain(0.1).slow(4).delay(.25).delayfeedback("<.25 .5 .75 1>")

$:s("vocals:50").gain(0.1).slow(8) //there's so many things to day every 8th 
$:sound("bass:4").slow(4)

_$:s("breaks:100").slow(2).gain(0.2)
```

Ich wollte als Kontrast noch einige andere Genres erforschen.

#2

```javascript
//Typische Baile-Funk bpm-Zahl
setcpm(132/4)
//Bassline auf die 1., etwas verzögert auf die 2. und auf die 4.
$:s("bd").struct("1 [~ 1] ~ 1 ~ ~ ~ ~").gain(0.4)
// Rimshot auf den 4. und 6. Beat von 8, velocity (0,1) wie fest angeschlagen wird
$:s("rim").struct("~ ~ ~ 1 ~ 1 ~ ~").velocity(0.8).gain(0.4)
// 16 Mal Highhats etwas leiser im Hintergrund für mehr Dynamik
$:s("hh*16").gain(0.2)
//
$:note("c1 [~ c1] ~ f0").s("z_sine").decay(0.2)
//Vocals aus einem Free-Sample-Set, das ich heruntergeladen habe
$:s("vocals:4").gain(0.2).slow(4)// nur auf jeden 4.
//Nimm die 1.Bassdrum und spiele sie 4 mal in einem Takt
$:s("bd:1*4").bank("rolandtr808")
```

Zurzeit loope ich leider alles nur, was das Ganze schnell etwas langweilig macht. 

Deswegen nehme ich mir vor verschiedene Teile aneinandersetzen zu können.

#3

```javascript
setcpm(173/4) // Typische D'n'b Bpm-Zahl
//setcpm Äquivalent zu bpm -> cycles per minute

_$:s("bd:3").beat("0,7?,10",16).duckatt("3:4:5")
_$:s("sd:2").beat("4,12",16)//.random(2,5)
_$:s("hh:4!8").gain(0.5,1)
_$:note("a e").s("zzfx").vib(".25 .1").vibmod("<.25 .5 1 2 12>:8").lpf(500).lfo().gain(0.2)
  //Nimm die erste bassdrum und spiel sie immer auf die 1,
  //manchmal (zu 50% ->?) auf den 7. und jedes 10. von 16-teln (Offbeat)
  //sd auf jeden 4. und 12. von 16-teln
  //highhats(4. aus der sammlung) 8 mal :) (entweder * oder !)

//Aus einem Array von 60 Vocals das 33
_$:s("vocals:33").slow(4)//.fast(0.5).gain(0.4).slice(8,"7 6 [2 4]3")
_$:s("saw").note("am").lpf(500).lfo().fast(2)

$:wchooseCycles(["em em ",5], ["g g",3], ["am am",1]).fast(2).s("gm_bandoneon").gain(0.8)

// "Gangster" Vocal
$:s("vocals:22").scrub(rand.seg(16).rib(6,1)).gain(0.1)

.legato(1).lpf("<400, 2000>").slow(4).gain(0.4).distort(0.2).delayfb(0.2)
```

```javascript
//newest strudel with a lot of different bass patterns

setcpm(173/4)
$:s("sd:2").beat("4,12",16).gain(0.5)//.random(2,5)
$:s("hh:3!8").gain(0.25).gain(0.25,0,5)
$:s("bd").beat("0,7?,10",16).duck("3:4:5").gain(0.5)

//https://www.youtube.com/watch?v=t5oDmmwBuS4 Tutorial for inspiration

//The Dotted Quarter Note -> 3+3+2 Rhythmus
$: s("drumulator_bd").lpf(500)
  .note("c3 c3 f3")
.struct("1@3 1@3 0@2").gain(0.25)// 3/8, 3/8, 2/8

// Ich möchte mehr Varianz reinbringen, indem ich 
// verschiedene Basslines kreiere
_$: s("bd").lpf(200)
.note("F1 F#1")
.struct("0 1@5 1@2")
._punchcard()

//"foghorn" -> riffs:67
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
//.note("B1*2 A#1*2 G#1*2 F#1*2 D#1*6 F#1*2")
.note("B1 A#1 G#1 F#1 D#1@3 F#1")
//.note("B1 B1 A#1 A#1 G#1 G#1 F#1 F#1 D#1@6 F#1 F#1")
.struct("1*8")
.delay(0.25)
._punchcard()
// three dotted 1/4 taking 1/4 increase the length by half
// 3/8 3/8 2/8 bzw 1/4
_$:s("bd:8")//.lpf(200)
.note("F2 F#1 F")
.struct("1@3 1@3 1@2")

//foghorn
_$:s("riffs:67").slow(8)

// reggaeton kind of bassline
_$:s("bd:8").lpf(200)
.note("F2")
.struct("1@4 1@4 1@3 1@3 1@2")

// different reggaeton 
_$:s("bd").lpf(200)
.note("F2")
.struct("1@4 1@4 1@3 1@3 1@2")

//neuro drum and bass (pattern8)
_$:s("bd:7").lpf(300)
.note("F1").sustain(2)
.beat("0, 4, 7, 10,13",16)

// mirrored 2-step
_$: s("bd").lpf(300)
.note("G").sustain(10)
//.beat("0,5,8,11,13",16)
.struct("1@4 1@3 1@3 1@2 1@4")

_$: note("F1 C2 F1*5").s("sine")
.struct("1@6 1@2 1@2 1@2 1@2 1@2")

// 2 ist sehr cool,6, 12 sehr atmosphärisch,1,59 
_$:s("pads:52").slow(2).legato(1)
  .lpf("<300 150 200 600 300>") 
  .resonance(12).gain("0.25, 0.1")

$:s("vocals:36").slow(16).gain(0.25)

// biuuuum fx 48, 31 very nice, vrrrr 43
_$:s("fx:43").slow(4).gain(0.1)// funky little sound

//amen break
_$: s("breaks:5").slow(6).gain(0.25)

_$:s("music_:16")
  .slow(8) 
  .legato(1)
  .gain(0.25)

_$:s("music_:13").slow(64).legato(1).delay(0.8)
```

Hier habe ich sehr viel herumexperimentiert...

![[Bildschirmaufnahme 2026-05-18 um 16.18.52.mov]]