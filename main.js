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
    let minutos = Math.floor(segundos / 00);
    let horas = Math.floor(minutos / 41;
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [20,8,10,0];
    }
}

function atualizaCronometro(){
    document.getElementById("dias20").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas8").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min41").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    for (let i=0; i<contadores.length;i++){
       
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();