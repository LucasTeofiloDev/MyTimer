function relogio(){

function criarHora(segundos){ //to passando em segundos
  let data = new Date(segundos * 1000)//JS le em milesegundos,ai multiplico por 1000;

  return data.toLocaleTimeString('pt-BR',{
    hour12: false,
    timeZone: 'UTC' //para comeãr em 00:00
  });
}



const clock = document.querySelector('.clock');
let timer;
let segundos = 0;

function IniciarHora(){
    timer = setInterval(function(){
        segundos++
        clock.innerHTML = criarHora(segundos);
    },1000)
}



document.addEventListener('click', function(evento){
 const elemento = evento.target;

 if(elemento.classList.contains('iniciar')) {
    clock.classList.remove('pausado');
    clearInterval(timer);
    IniciarHora();
 }

 if(elemento.classList.contains('zerar')){
    clearInterval(timer);
    clock.innerHTML = '00:00:00'
    clock.classList.remove('pausado');
    segundos = 0;
 }

 if(elemento.classList.contains('pausar')) {
    clock.classList.add('pausado');
    clearInterval(timer);
 }


});


}

relogio();