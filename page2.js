document.querySelector('#btn-bomb-on').addEventListener('click', Armar);
document.querySelector('#img-bomb').addEventListener('click', Desarmar);
const img = document.querySelector("#img-bomb");
const audio = document.querySelector("#audio");
const audiotick = document.querySelector("#audio-tick");
const btn = document.querySelector('#btn-bomb-on');
const counterDown = document.querySelector('#counter');

let hndTimeOut = -1;
let hndInterval = -1;
let counter = 60;

function Armar() { 
  btn.disabled = true;
  btn.textContent = 'Bomba Armada';
  btn.style.cursor = 'default';
  img.setAttribute('src', './assets/img/ativado.png');
  counter = 60;
  counterDown.style.color = '#000';
  counterDown.textContent=counter;
  hndInterval = setInterval(Contagem, 1000);
  hndTimeOut = setTimeout(Explodir, 60000);
  img.style.cursor = 'pointer';
}

function Desarmar() { 
  if (hndTimeOut>=0){
    clearTimeout(hndTimeOut);
    clearInterval(hndInterval);
    img.setAttribute('src', './assets/img/desarmado.png');
    btn.disabled = false;
    btn.textContent = 'Armar Bomba';
    btn.style.cursor = 'pointer';
    counterDown.textContent =" ";
    counterDown.style.color = '#000';
  }  
}

function Explodir() { 
    clearInterval(hndInterval);
    audiotick.currentTime = 0;
    counter = 0;
    counterDown.textContent=counter;
    audio.play();
    img.setAttribute('src', './assets/img/explosao.png');
    btn.disabled = false;
    btn.textContent = 'Armar Bomba';
    btn.style.cursor = 'pointer';
    img.style.cursor = 'default';
  }

function Contagem(){
  counter -= 1;
  audiotick.currentTime = 0;
  audiotick.play();
  counterDown.textContent=counter;
  if (counter<=10){
    counterDown.style.color = '#f00';
  }
}