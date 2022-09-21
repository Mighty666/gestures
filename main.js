prediction1 = "";
prediction2 = "";
Webcam.set({
    height:300,
    width:400
})
Webcam.attach("#webcam1")
function captureimg(){
    Webcam.snap(function(data_uri){
        document.getElementById("webcam2").innerHTML="<img id='snap' src="+data_uri+">"
    })
}
function speak(){
    var synth = window.speechSynthesis
    speakdata1="The emotion is "+prediction1;
    speakdata2="The emotion is "+prediction2;
    utterthis= new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}
classife = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3Yem9JVrb/model.json',modelLoaded)
function modelLoaded(){
}
function check(){
    img = document.getElementById("snap");
    classife.classify(img,gotResults)
}
function gotResults(error,results){
    if(error){
        console.log("error");
    }
    else{
        console.log(results);
        document.getElementById("pre1").innerHTML=results[0].label;
        document.getElementById("pre2").innerHTML=results[1].label;
        prediction1=results[0].label;
        prediction2=results[1].label;
        speak();
        if(prediction1=="Thumbs Up"){
            document.getElementById("emo1").innerHTML="&#128077";
        }
        if(prediction1=="Peace"){
            document.getElementById("emo1").innerHTML="&#9996";
        }
        if(prediction1=="High Five"){
            document.getElementById("emo1").innerHTML="&#9995";
        }
        if(prediction2=="Thumbs Up"){
            document.getElementById("emo2").innerHTML="&#128077";
        }
        if(prediction2=="Peace"){
            document.getElementById("emo2").innerHTML="&#9996";
        }
        if(prediction2=="High Five"){
            document.getElementById("emo2").innerHTML="&#9996";
        }
    }
}