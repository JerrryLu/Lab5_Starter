// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSel = document.getElementById('horn-select');
  const aud = document.querySelector('audio');
  hornSel.addEventListener('change', () => {
    const img = document.querySelector('img');
    img.src = "assets/images/" + hornSel.value + ".svg";
    aud.src = "assets/audio/" + hornSel.value + ".mp3";
  });

  const vol = document.getElementById('volume');
  vol.addEventListener('input', () => {
    const volImg = document.querySelectorAll('img')[1];
    if(vol.value == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
    }
    else if(vol.value < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
    }
    else if(vol.value < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volImg.src = "assets/icons/volume-level-3.svg";
    }
    aud.volume = (vol.value/100);
  });

  const button = document.querySelector('button');
  const jsConfetti = new JSConfetti();
  button.addEventListener('click', () => {
    aud.play();
    if(hornSel.value == "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}