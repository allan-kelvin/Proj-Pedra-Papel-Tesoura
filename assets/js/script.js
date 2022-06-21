const elements = document.querySelectorAll('.player-options div >img');
var playerOpt="";
var inimigoOpt="";

function validarVitoria(){
   let vencedor = document.querySelector('.vencedor');
    /*Validando vitoria por papel */
    if(playerOpt =="papel"){
        if(inimigoOpt =="papel"){
            //empate
            vencedor.innerHTML = "Empate";
        }else if(inimigoOpt =="tesoura"){
            //Inimigo Ganhou
            vencedor.innerHTML = "Você Perdeu";
        }else if(inimigoOpt =="pedra"){
            //Player Ganhou
            vencedor.innerHTML = "Você Ganhou";
        }
    }

    /*Validando vitoria por Pedra */

    if(playerOpt =="pedra"){
        if(inimigoOpt =="papel"){
            //Perde
            vencedor.innerHTML = "Você Perdeu";
        }else if(inimigoOpt =="tesoura"){
            //Ganhou
            vencedor.innerHTML = "Você Ganhou";
        }else if(inimigoOpt =="pedra"){
            //Empate
            vencedor.innerHTML = "Empate";
        }
    }

    /*Validando vitoria por tesoura */

    if(playerOpt =="tesoura"){
        if(inimigoOpt =="papel"){
            //Ganhou
            vencedor.innerHTML = "Você Ganhou";
        }else if(inimigoOpt =="tesoura"){
            //Empate
            vencedor.innerHTML = "Empate";
        }else if(inimigoOpt =="pedra"){
            //Perdeu
            vencedor.innerHTML = "Você Perdeu";
        }
    }

}

function resetOpacityPlayer(){
    for (var i =0; i< elements.length;i++){
            elements[i].style.opacity=0.3;       
    }
}

function resetInimigo(){
    const enemyOptions = document.querySelectorAll('.enemy-options div');
        for(var i = 0; i< enemyOptions.length; i++){
    enemyOptions[i].childNodes[0].style.opacity=0.3;
    }
}


function inimigoJogar(){
        let rand = Math.floor(Math.random()*3);
        const enemyOptions = document.querySelectorAll('.enemy-options div');
        resetInimigo();

        for(var i = 0; i< enemyOptions.length; i++){
            if(i==rand){
                enemyOptions[i].childNodes[0].style.opacity=1;
                inimigoOpt=enemyOptions[i].childNodes[0].getAttribute('opt');
            }
        }
        validarVitoria();
}



for (var i =0; i< elements.length;i++){
    elements[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity=1;   
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
    })
}

document.querySelector('.button').addEventListener('click',()=>{
   // document.querySelector('.player-options').innerHTML="";
   // document.querySelector('.enemy-options').innerHTML="";
    resetOpacityPlayer();
    resetInimigo();
    document.querySelector('.vencedor').innerHTML="Vencedor:";
   
})


