# Day 1

## 18.05.2026

On Monday we presented our midterms. 

# Day 2

## 19.05.2026

On Tuesday we had an excursion to Basel. We had three stops in total. 

1. We visited the exhibition in the HEK
2. Museum Tinguely
3. Musikakademie, Vera Oeri-Bibliothek

# Day 3 & 4

## 20. & 21.05.2026

On Wednesday and Thursday I was sick

# Day 5

## 22.05.2026

On Friday we had created different Objects in P5live and had them move to music. 

```javascript
/*	
	_audio_analysis // cc teddavis.org 2019-24
	
	revamp of P5LIVE's Audio snippet, now built-in the background!
	add snippet to other sketches: CTRL + SHIFT + A 
*/

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)

	// audio stuff now behind the scenes, 'true' makes class vars global
	setupAudio(true) // if empty, use 'a5.' before audio vars below
    a5.ease = .075 // customize ease speed
}

function draw() {
	/* audio vars: amp, ampL, ampR, ampEase, fft, fftEase, waveform, waveformEase */
	updateAudio()
	background(0)
	sphere(200) + fftEase[0]
	noFill()
	stroke(255, 0, 0)
	




	/* fftEase */
	// stroke(255)
//	for(let i = 0; i < fftEase.length; i++) {
	//	let freq = fftEase[i]; // (0, 255)
	//	let x = map(i, 0, fftEase.length, 0, width)
	//	let w = width / fftEase.length
	//	rect(x, height * .805, w, freq)
//	}
}
```

![](C:\Users\basti\OneDrive\Desktop\Invers\Scans\Bilder\Screenshots 1\Screenshot 2026-06-01 203840.png)
