const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}
const contadores=document.queryselectorAll("contador");
const tempoObjetivo1=new date("2024-28-09t00:00:00");
const tempoObjetivo2=new date("2024-27-09t00:00:00");
const tempoObjetivo3=new date("2024-26-09t00:00:00");
const tempoObjetivo4=new date("2024-25-09t00:00:00");

const tempos=[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
contadores[0].textContent = calculaTempo(tempos[0]);

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}