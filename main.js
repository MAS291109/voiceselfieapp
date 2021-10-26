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

    if(content =="take my selfie")
    {
        console.log("taking selfie -")
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "Taking Your Selfie In 5 Seconds";
    var utterthis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function(){
        take_Snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 200,
    image_format: 'png',
    png_quality : 90
});
var camera = document.getElementById("camera");

function take_Snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML ='<img id="selfie_img" src="'+data_uri+'"/>';
    });
}

function save()
{
    var link = document.getElementById("link");
    var img = document.getElementById("selfie_img").src ;
    link.href = img;
    link.click();
}
