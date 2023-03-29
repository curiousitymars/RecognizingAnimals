//https://teachablemachine.withgoogle.com/models/fbag0-d_r/
dog = 0;
cat = 0;
cow = 0;
lion = 0;
background = 0
function start() {
    navigator.mediaDevices.getUserMedia({audio:true, video:false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fbag0-d_r/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults (error, results) {
    if (error) {
        console.error(error);
    }   
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = 'Voice Result  - '+ results[0].label;
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById('he1');
    }
    if (results[0].label == "Barking") {
        img.src = 'Dog.png';
        dog = dog + 1;
    }
    else if (results[0].label == "Meowing") {
        img.src = 'Cat.png';
        cat = cat + 1;
    }
    else if (results[0].label == "Mooing") {
        img.src = 'Cow.png';
        cow = cow + 1;
    }
    else {    
    img.src = 'Hear.gif';
    
    }

}