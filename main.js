function StartClassification() {
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YopWH8Bfa/model.json" , ModelReady)
}
function ModelReady() {
    classifier.classify(GotResults)
}
function GotResults(error,results) {
    if(error) {
       console.error(error)
    }
    else {
        
    }
}