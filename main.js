var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event){
    console.log(event);
     
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    var speak_data = document.getElementById("textbox").value;
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 360,
    height: 200,
    image_format: 'png',
    png_quality : 90
});
var camera = document.getElementById("camera");