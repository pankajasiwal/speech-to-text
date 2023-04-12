const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition;

const mic = document.querySelector('.mic');
let para = document.createElement('p');
const content = document.querySelector('.content');
content.appendChild(para);

let count = false;
function startmic(){
    if(count == false){
        count = true;
        console.log("mic is on");
        recognition.start(); 
        recognition.continuous = true;
    }
    else{
        count = false;
        console.log("mic is off now");
        recognition.stop();
        content.innerHTML = '';
    }
}

recognition.addEventListener('result', e => {
    console.log(e);
    
    for(let i = 0; i< e.results.length; i++){
        const transcript = e.results[i][0].transcript;
        para.textContent = transcript;
        content.appendChild(para);
    }
});

mic.addEventListener("click", startmic);
