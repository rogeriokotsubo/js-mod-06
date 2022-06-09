document.getElementById('btn-check').addEventListener('click', Iniciar);

const selectMinutes = document.querySelector("#id-minutes");
const selectSeconds = document.querySelector("#id-seconds");
const btn = document.querySelector("#btn-check");
const counterDown = document.querySelector('#h2-counter');
const mensagem = document.querySelector('#h2-alarme');
const audio = document.querySelector("#audio");
const audiotick = document.querySelector("#audio-tick");

addMinutes(selectMinutes,0,60);
addMinutes(selectSeconds,0,59);

let counter = -1;
let warning = -1;
let hndInterval = -1;
let hndInterval1 = -1;
let counterBlink = 0;

function Iniciar() { 
  if (counter<0){  
    counter = parseInt(selectMinutes.value,10)*60+parseInt(selectSeconds.value,10);
    warning = Math.ceil(counter*0.05);
    btn.textContent = 'Desarmar Alarme';
    mensagem.textContent="Alarme tocará em:";
    mensagem.style.display = 'block';
    if (counter<=warning){
      counterDown.style.color = '#f00';   
    } else {
      counterDown.style.color = '#000';   
    }
    hndInterval = setInterval(Contagem, 1000);
  } else {
    Desarmar();
  }
}

function Desarmar() { 
  if (hndInterval>=0){
    if (counter===0){
      audio.pause();
      audio.currentTime = 0;
      counterDown.style.color = '#000';   
      counterDown.textContent="";
      }
    clearInterval(hndInterval);
    if (hndInterval1>=0){
      clearInterval(hndInterval1);
    }  
    mensagem.textContent="Alarme desarmado";
    btn.textContent = 'Iniciar Alarme';
    hndInterval = -1;
    hndInterval1 = -1;
    counter = -1;
    counterDown.style.display = 'block';
  } 
}

function TocarAlarme() { 
    clearInterval(hndInterval);
    audio.play();
    hndInterval1 = setInterval(Piscar, 500);
    mensagem.textContent="Alarme tocando";
  }

function Contagem(){
  counter -= 1;
  const minutos = Math.floor(counter/60);
  counterDown.textContent=minutos + ' min  '+ (counter - (minutos*60)) +' seg';
  if (counter<=warning){
    counterDown.style.color = '#f00';   
    audiotick.play();
    audiotick.currentTime = 0;
  } else {
    counterDown.style.color = '#000';   
  }
  if (counter===0){
    TocarAlarme();
  }
}

function Piscar(){
  if (counterBlink===0){
    counterDown.style.display = 'block';
    counterBlink=1;
  } else {
    counterDown.style.display = 'none';
    counterBlink=0;
  }
}


// popula select
function addMinutes(select, min, max) {
  select.innerHTML = "";
  for (let i = min; i <= max; i++ ){
      select.innerHTML += `
            <option value="`+i+`">`+i+`</option> 
        `
  }
}

