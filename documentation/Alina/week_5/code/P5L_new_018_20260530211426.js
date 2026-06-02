// {"P5LIVE":{"name":"new_018","mod":1780175666569}} 

//noprotect

let meAskyou = ["Did you hear about the windrush generation before?",
"What does it have to do with drum and bass?","And how was drum and bass being formed in the UK?"]
let questions = meAskyou.join(' ')
let interview = ["Has it affected the way you feel connected to the country?Oh, yeah, 100%, it has. And it’s very strange as a child, when I was at school, and it was a very white school, I remember going to school and people used to say to me, your Dad needs to go back to where he come from. And I remember I never ever told my Mum and Dad, but I used to be really frightened as a kid like, oh my gosh, what if they come and take my Dad and then as I got older, I was like, gosh, how irrational that I was even thinking that and then to be like, fast forwarding, like, it really nearly was a possibility. Yeah, I don’t feel uhm.  No, I don’t feel very British, if I’m honest. I don’t feel uhm because I think I’ve seen that it can be taken away really easily. And I don’t feel, especially the government, as it is now, I don’t think it is inclusive. I think it is hostile. So yeah, it’s a funny way to be it’s, it’s hard because my partner, he was born in Germany, and he’s white, and I, we laugh because he’s, I say, like you, you stand a better chance from someone that’s come in to this [country], but it feels like he’s better belonging here than what I am. And I was born here. It’s like, I feel like almost our feelings are switched. You know, like, I feel like, I’m not really settled here. Not that I don’t belong here. But I don’t feel settled here. Like, it doesn’t feel. Like feeling safe, or secure?Yeah maybe, but I just, I don’t know. Maybe it’s a bit of resentment. Maybe I don’t really like it. Like how this is all played out. Maybe that’s a bit of a point as well."]
let alphaValue = 100

// Start-Verschiebung für das Scrollen
let yStart = 0;

function setup() {
	createCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0,0,255,alphaValue)
	
	let live = (frameCount % 10)
	frameRate(2); // Leicht erhöht auf 2, damit das Scrollen flüssiger aussieht

	textSize(80);
	
	// BOLD,ITALIC,BOLDITALIC
	textStyle(random([ITALIC,NORMAL]));
	// CHAR Zeilenumbruch no matter what
	textWrap(CHAR);
	// Wichtig: LINKSBÜNDIG, damit der Text links bei x=50 sauber startet
	textAlign(LEFT);
	
	// Dein Glitch für den Zeilenabstand (mindestens 40px, damit es sich nicht völlig überlagert)
	textLeading(40 + (24 * live));

	// Die Schleife zeichnet den Text zeilenweise untereinander auf dem Bildschirm
	// Da textSize=80 ist, erhöhen wir den Y-Schritt auf += 120, sonst überlappen die Zeilen extrem starr
	for (let y = yStart; y < height * 2; y += 120) { 
		// Ein cooler Farbverlauf (Gradient) von Weiß ins Rötliche/Gelbliche basierend auf der Y-Position
		fill(255, y / 4 + 100, 150); 
		
		// KORREKTUR: interview[0] statt 'content', Start bei x=50 und Breite angepasst
		text(interview[0], 50, y, windowWidth - 100); 
	}
	
	// Jedes Frame wandert der Text um 4 Pixel nach oben (Automatisches Scrollen)
	yStart -= 4; 
	
	// Wenn der Text komplett oben rausgescrollt ist, setzen wir ihn zurück
	if (yStart < -windowHeight * 3) {
		yStart = 0;
	}
}