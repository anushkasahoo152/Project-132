Status = "";
stationary_img = ';'
function preload() {
    stationary_img = loadImage('stationary.jpg');
}
function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = 'Status: Detecting Objects';
}
function modelLoaded() {
    console.log('Model Loaded!')
    Status = true;
    objectDetector.detect(stationary_img , gotResult);
    }
function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
}    
function back() {
    window.location = "index.html"; 
}