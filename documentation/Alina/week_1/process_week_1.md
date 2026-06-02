<H1>First week of Creative Coding</b>
  <i>& my progress</i>
</h1>
Hello I'm **Alina** *italic*
![[CCC_1.jpeg]]

![[CCC_1 2.jpeg]]

![[CCC_1 1.jpeg]]

```javascript
// {"P5LIVE":{"name":"new_001","mod":1777372609858}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	background(0)
}

function draw() {
	fill(255)
	square(300,200,100)
	textSize(random(12,200))
	fill("magenta")
	text("hallo",mouseX,mouseY)
	square(500,300,100,10)


}
```
![[P5L_new_001_20260428103649.png]]

```javascript
// {"P5LIVE":{"name":"new_001","mod":1777369573696}} 

function setup() {
	createCanvas(windowWidth, windowHeight)
	

}

function draw() {
stroke("magenta")
strokeWeight(10)
line(30, 20,mouseX,mouseY)

stroke ("yellow")
strokeWeight(20)
line(40,5,mouseX,mouseY)

stroke ("cyan")
strokeWeight(5)
line(35,7,mouseX,mouseY)
  
  

```
![[P5L_new_001_20260428094443.png]]

Das waren meine ersten Versuche mit P5live. 
![[P5L_new_001_20260428094613.png]]


```javascript
// {"P5LIVE":{"name":"new_003","mod":1777374452956}} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
}

let dim = 200;
let reduction = 20;
let posX = 400;
let posY = 200;
let anzahl = 10;
let versatz= 200;

function draw() {
  background(255); 
  noFill();
  strokeWeight(1);
  stroke(0);

  // Der Loop
  for (let i = 0; i < anzahl; i++) {
    // Die Formel: StartgrÃ¶ÃŸe minus (Schrittnummer * Verkleinerung)
    square(posX, posY, dim - (reduction * i));
    square(posX+versatz,posY+versatz,dim - (reduction *i));
    
  }
  
  noLoop(); // Stoppt das dauerhafte Neuzeichnen, da das Bild statisch ist
}
```
![[P5L_new_003_20260428110732.png]]
Das sind die ersten Quadrate, die wir in der Übung von Vera Molnar gemacht haben. 

![[P5L_new_004_20260428111617.png]]

```javascript
```
![[P5L_new_004_20260428130442.png]]
```javascript
```
![[P5L_new_004_20260428112147.png]]
```javascript
```
![[P5L_new_004_20260428113042.png]]
```javascript
```

![[P5L_new_006_20260428134058.png]]

```javascript
```
![[P5L_recoding_20260428135813.png]]
```javascript
```
![[P5L_recoding_20260428145830.png]]
```javascript
```
![[P5L_tag_2_yann_2.0_molnar_20260429130810.png]]
```javascript
```

![[P5L_exercise_2_20260429132450.png]]

![[P5L_dvd_bouncing_20260429145415.png]]

With Yann we were experimenting with VCV rack:
![[VCV_1.png]]
![[VCV_2.png]]
![[VCV_3.png]]
![[VCV_4.png]]
![[VCV_5.png]]
![[VCV_6.png]]
![[VCV_7.png]]
![[VCV_8.png]]
![[VCV_9.png]]
![[VCV_10.png]]
![[VCV_11.png]]


```javascript

sound("hh!8").gain(.2)
fast("2")
//sound("bd").struct("1 0 1 0 1 0").gain(.2)
$:note("em g d a").channels ("4:4")
$:sound("hh!8").gain(.2)
$:sound("bd!4").gain(.4)
$: s("hh!*6")
$: s("sd*2")


```

Mein erster Versuch mit Strudel :). Es ist schwierig zu sagen, wie weit ich kommen werde, weil ich auch mit Musik absolute Anfänger*in bin. Aber ich wäre interessiert an Drum and Bass/ Jungle, Baile Funk oder auch Tekno.

```javascript
//Lucy Cheeseman tutorial


// $: sound("bd bd bd/2 bd/3")
//$: sound("{bd bd bd/2 bd/3,- - hh [- cp] hh*3}")
//$: sound("- - hh [- cp] hh*3")
// { curly brackets are for polyrhythms}
// Man kann so mit den zwei Teilen spielen und mit Komma abtrennen
// Euclidian rhythm ("metal(3,8)")-> 3 events in a pulse of 8 
//$:sound("metal(<3 ?5 8>,15)") // 3 then 5 then 8 times out of 15

//hurry function, hurry it 2 times as fast and 2 times pitched oder 0.5
//blabla sound .hurry("<0.5 1 1 2>") half time speed, than 1 
//$: sound("metal"(3,8)").hurry("2")
// .fast oder .slow to influence the speed

//working with patterns
//$:sound("numbers:1 numbers:2 numbers:3 numbers:4").iter("4")
//iterate -> .iter ("4")

//jux function
// in the left speaker we'll hear the iteration 
// and in the right the normal one .jux(iter("6")) variety left right
//$: sound("{bd bd bd/2 bd/3,- - hh [- cp] hh*3}").jux(iter("6"))
// for every 2 cycles speed up double time
//.jux(iter("2")).every("2",fast("2")) 
//.sometimes(fast"2"), 50%, rarely 25%, often 75%

//.chunk(how many chunks,hurry("<2 0.5>")) divides the pattern 
//? 50% Wahrscheinlichkeit
//.off(0.125, x=>x.speed(2)) (how much offset 1/8, take x and make 
//it twice as fast)
// drum loop or vocal sample 
//samples({rhodes:"https....."})load samples
//$: s("rhodes").loopAt(2)
//.loopAt(2) stretch it to 2 cycles
//sound("breaks165").slice(8,"7 6 [2 4]3"), (slice into how many chunks,"")
```





```jade
//setCpm(170/4)
$drum: stack(
  s("bd").beat("0,7?,10",16).duck("3:4:5"),
  s("sd:2").beat("4,12",16),
  s("hh:4!8")
  )
//normal drum and bass beat :)
$warp: s("am g d f")

//$:s("vocals:4").gain(0.2)
//$:note("am c em d").attack("<0 .1 .5>")
//_$:sound("hh*4")._punchcard()//underscore to stop the line

n(mousex.segment(4).range(0,7)).scale("C:minor")

//_$:s("cp:2*4")

//$:s("ajkpercusyn_bd*4").fast(rand.range(1,2))
//$:s("vocals:10").gain(0.1)
//$:s("breaks:40").loopAt(0)
//$:s("bass:15")
//$:s("breaks:122").gain(0.5)

////_$:note("<[c2 c3]*4 [bb1 bb2]*4 [f2 f3]*4 [eb2 eb3]*4>/2")
//.sound("e").lpf("200 1000")

```

Some fresh drum-and-bass beats:

```javascript
let dnb = stack(
  s("bd").beat("0,7?,10",16).duck("3:4:5"),
  s("sd:2").beat("4,12",16),
  s("hh:4!8"))


$:dnb.every(4, fast(2))

$:s("vocals:4").gain(0.2)//don't you wanna listen
```

```javascript
$: setcpm(170/4)
$:s("bd").beat("0,7?,10",16).duck("3:4:5")
$:s("sd:2").beat("4,12",16)
$:s("hh:4!8")

$:s("vocals:20").gain(0.1)

//$:s("fx:30").distort("<0 2 3>")
$:n("0 [2 4] <3 5> [~ <4 1>]".add("<0 [0,2,4]>"))
.scale("C5:minor").release(.5)
.sound("gm_xylophone").room(.5)

//$:s("vocals:52")
$:note("<c c c# c c c4>*16").s("sawtooth")
```

```javascript
setcpm=170/4

const appregiator =[
  "{d4 bb3 eb3 d3 bb2 eb2}%16",
  "{c4 bb3 f3 c3 bb2 f2}%16",
  "{d4 bb3 g3 d3 bb2 g2}%16",
  "{c4 bb3 f3 c3 bb2 f2}%16",
  "{c3 bb3 c4 d3 bb2 f2}%16",
  "{f2 bb2 d3 c4 bb3 c3}%16",
 // "{"
]

main_arp: note(pick(appregiator, "<2 3 1 2 4 4>".slow(2)))
.lpf(200).sustain(0.5).release(0.01).attack(0)
.room(0.6)

//._pitchwheel()

._punchcard()
bassline: note("[eb1, eb2]!16 [f2,f1]!16 [g2, g2]!16 [f2,f1]!8 [bb2, bb1]!8")
.sound("bd")
.slow()
$:s("bd").beat("0,7?,10",16).duck("3:4:5").gain(0.3)
$:s("sd:2").beat("4,12",16).fscope().gain(0.3)
//$:s("hh*8")
//$:s("hh:10!8").fast(2)

//$:s("fx:24").slow(4).gain(0.1).fm(4).fmdecay("<0.1 0.5 .1 .2>")
//$:s("pads:12").gain(0.1).delay("<0 .25 .5 1>")
$:s("pads:18").gain(0.1).slow(4).delay(.25).delayfeedback("<.25 .5 .75 1>")

$:s("vocals:30").gain(0.1).slow(8)

```

```javascript
setcpm=170/4

const appregiator =[
  "{em am c d g f}%8",
  "{f g am em c d}%16"
//  "{c4 bb3 f3 c3 bb2 f2}%16",
  //"{d4 bb3 g3 d3 bb2 g2}%16",
 // "{c4 bb3 f3 c3 bb2 f2}%16",
  //"{c3 bb3 c4 d3 bb2 f2}%16",
  //"{f2 bb2 d3 c4 bb3 c3}%16",

]

main_arp: note(pick(appregiator, "<1 2 1 1 2>".slow(2)))
.lpf(200).sustain(0.5).release(0.01).attack(0)
.room(0.6)

//._pitchwheel()

._punchcard()
bassline: note("[eb1, eb2]!16 [f2,f1]!16 [g2, g2]!16 [f2,f1]!8 [bb2, bb1]!8")
.sound("bd")
.slow()
$:s("bd").beat("0,7?,10",16).duck("3:4:5").gain(0.3)
$:s("sd:2").beat("4,12",16).fscope().gain(0.3)
//$:s("hh*8")
//$:s("hh:10!8").fast(2)

//$:s("fx:24").slow(4).gain(0.1).fm(4).fmdecay("<0.1 0.5 .1 .2>")
//$:s("pads:12").gain(0.1).delay("<0 .25 .5 1>")
$:s("pads:18").gain(0.1).slow(4).delay(.25).delayfeedback("<.25 .5 .75 1>")

$:s("vocals:50").gain(0.1).slow(8) //there's so many things to day every 8th 
$:sound("bass:4").slow(4)

//$:s("breaks:100").slow(2).gain(0.2)


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

//$:s("vocals:33").slow(4)//.fast(0.5).gain(0.4).slice(8,"7 6 [2 4]3")

//$:note("am c f em ").s("piano:5").rev().delay(1).gain(1)
//$:s("saw").note("c").lpf(500).lfo().slow(2)

$:wchooseCycles(["em em ",5], ["g g",3], ["am am",1]).fast(2).note().s("gm_marimba")

$:s("vocals:26").scrub(rand.seg(8).rib(6,1)).gain(0.3)
$:note("e1*2").s("sawtooth")
.legato(1).lpf("<400, 2000>").slow(4).gain(0.4).distort(0.2).delayfb(0.2)



```





