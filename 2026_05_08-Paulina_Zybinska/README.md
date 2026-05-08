# Machine Learning in the Browser

![Body tracking](/2026_05_08-Paulina_Zybinska/images/ml5js.png)

<br>
While running traditional Machine Learning models often requires significant GPU compute, it can be optimized to run efficiently in resource-limited environments like the browser. A great entry into body tracking and image classification is the <strong>ml5.js</strong> high-level library and <strong>Teachable Machine</strong> tool. It is great for creative coding and live interaction, often used in combination with <strong>p5.js</strong>.



# [ml5.js](https://ml5js.org/) 

![Bubble World by Sihan Zhang](/2026_05_08-Paulina_Zybinska/images/BubbleWorld.gif)
<br>

Using the ml5.js library, you can easily access a variety of pre-trained models for the browser:

- **Body & Face Estimation**
    - BodyPose
    - BodySegmentation
    - HandPose
    - FaceMesh <br>

- **Classification**
    - ImageClassifier
    - SoundClassifier<br>

- **Natural Language Processing**
    - Sentiment <br>

- **Spatial Awareness**
    - ObjectDetection 
    - DepthEstimation <br>

**CAREFUL!** Many tutorials and LLMs refer to an older version of ml5.js library found [here](https://archive-docs.ml5js.org/#/)! If you see some untypical errors in the console, this might be often the issue.

_________________________

# [Teachable Machine](https://teachablemachine.withgoogle.com/train)

![Teachable Machine Image Model](/2026_05_08-Paulina_Zybinska/images/TeachableMachine.gif)
<br>

Teachable Machine is a web-based tool designed for fast and easy machine learning model training. It allows you to "teach" a computer to recognize things—like your face, specific gestures, or certain sounds—directly in your web browser without needing to write complex code. It can be used together with **ml5.js** and **p5.js** to create your own classifiers.

_________________________

## Ressources
- [The Coding Train ml5.js Begginer's Guide](https://thecodingtrain.com/tracks/ml5js-beginners-guide)
- [Patt Vira Coding Tutorials](https://www.pattvira.com/coding-tutorials/ml5js)
- [ml5js Glossary](https://docs.ml5js.org/#/learn/ml5-glossary)

## Projects
- [Objectifier by Bjorn Karmann](https://bjoernkarmann.dk/project/objectifier)
- [An algorithm watching a movie by trailer Andreas Refsgaard](https://www.andreasrefsgaard.dk/projects/an-algorithm-watching/)
- [Recharge by Dries Depoorter]()

## Advanced web-based tools for ML
 - [MediaPipe](https://ai.google.dev/edge/mediapipe/solutions/guide) : ml5.js on steroids 💪
 - [ONNX Runtime](https://onnxruntime.ai/docs/tutorials/web/) : enables you to run and deploy complex machine learning models in your web application using JavaScript APIs and libraries 🤯

## Code Download
- [Download Github Repository](https://download-directory.github.io/)