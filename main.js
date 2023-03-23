var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="Take My Selfie"){
        console.log("Take My Selfei-----");
        speak();
    }
}
function speak(){
var synth =window.speechSynthesis;

speak_data="Taking Your Selfei In 3 Second";

var utterThis=new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);

Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
},3000)
}
Webcam.set({
    width:360,
    height:250,
    img_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="selfei_image" scr="'+data_url+'"/>';
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfei_image").src;
    link.href=image;
    link.click()  ;
}















