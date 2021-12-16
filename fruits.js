Status = "";
fruit_img = ';'
function preload() {
    fruits_img = loadImage('fruit.jpg');
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
    objectDetector.detect(fruit_img , gotResult);
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