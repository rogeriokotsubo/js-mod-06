document.querySelector('#btn-bomb-on').addEventListener('click', Armar);
document.querySelector('#img-bomb').addEventListener('click', Desarmar);

const btn = document.querySelector('#btn-bomb-on');
const img = document.querySelector("#img-bomb");

let hndTimeOut = -1;

function Armar() { 
  btn.disabled = true;
  btn.textContent = 'Bomba Armada';
  btn.style.cursor = 'default';
  img.style.cursor = 'pointer';
  img.setAttribute('src', './assets/img/ativado.png');
  hndTimeOut = setTimeout(Explodir, 10000);
}

function Desarmar() { 
  if (hndTimeOut>=0){
    clearTimeout(hndTimeOut);
    img.setAttribute('src', './assets/img/desarmado.png');
    img.style.cursor = 'default';    
    btn.disabled = false;
    btn.style.cursor = 'pointer';
    btn.textContent = 'Armar Bomba';
  }  
}

function Explodir() { 
    const audio = document.querySelector("#audio");
    audio.play();
    img.setAttribute('src', './assets/img/explosao.png');
    img.style.cursor = 'default';    
    btn.style.cursor = 'pointer';
    btn.disabled = false;
    btn.textContent = 'Armar Bomba';
  }
  