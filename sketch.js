var answer=0
function perimeter(){
    answer = Number(document.getElementById("height").value)+ Number(document.getElementById("length").value)+ Number(document.getElementById("height").value)+ Number(document.getElementById("length").value);
    document.getElementById("ans").innerHTML = answer;
    var msg= new SpeechSynthesisUtterance();
    msg.text = "The perimeter is..."+ answer;
    window.speechSynthesis.speak(msg);
}

function area(){
    answer = Number(document.getElementById("height").value) * Number(document.getElementById("length").value);
    document.getElementById("ans").innerHTML = answer;
    var msg= new SpeechSynthesisUtterance();
    msg.text = "The area is..."+  answer;
    window.speechSynthesis.speak(msg);
}




















//var msg = new SpeechSynthesisUtterance();
//msg.text = "Hello World";
//window.speechSynthesis.speak(msg);