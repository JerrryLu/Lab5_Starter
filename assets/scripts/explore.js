// explore.js

window.addEventListener('DOMContentLoaded', init);

let voices;

function init() {
  speechSynthesis.onvoiceschanged = populateVoices;

  let button = document.querySelector('button');
  let img = document.querySelector('img');
  button.addEventListener('click', () => {
    let utter = new SpeechSynthesisUtterance();
    utter.text = document.getElementById('text-to-speak').value;
    utter.voice = voices[document.getElementById('voice-select').selectedOptions[0].value];
    utter.addEventListener('start', () => {
      img.src = "assets/images/smiling-open.png";
    });
    utter.addEventListener('end', () => {
      img.src = "assets/images/smiling.png";
    });
    speechSynthesis.speak(utter);
  });
  
}

function populateVoices() {
  voices = speechSynthesis.getVoices();
  for(let i = 0; i < voices.length; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.textContent = voices[i].name + '(' + voices[i].lang + ')';
    opt.setAttribute('data-name', voices[i].name);
    opt.setAttribute('data-lang', voices[i].lang);
    document.getElementById('voice-select').appendChild(opt);
  }
}