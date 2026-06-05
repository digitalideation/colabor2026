// {"P5LIVE":{"name":"facemesh","mod":1780345932632}} 

let libs = ['https://unpkg.com/ml5@1/dist/ml5.js']
let faceMesh;
let video;
let faces = []
let options = { maxFaces: 1, refineLandmarks: false, flipped: true};

function preload() {
	faceMesh = ml5.faceMesh(options);
}

function setup() {
	createCanvas(windowWidth, windowHeight)
	video = createCapture(VIDEO)
	video.size(windowWidth, windowHeight)
	video.hide()

	//Startdetecting faces from the webcam video
	faceMesh.detectStart(video, gotFaces)

}

function draw() {
	
	// image(video, 0, 0, width, height);
	background (0)
	
	for(let i = 0; i < faces.length; i++) {
		let face = faces[i]
		for(let j = 0; j < face.keypoints.length; j++) {
			let keypoint = face.keypoints[j];
			fill(255, 200, 105);
			noStroke();
			circle(keypoint.x, keypoint.y, 10);
		}
	}
}

//Callback function for when faceMesh outputs data
function gotFaces(results) {
	// Save the output to the faces variable
	faces = results
}