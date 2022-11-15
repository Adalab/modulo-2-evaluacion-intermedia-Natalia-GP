'use strict';

//variables
const select = document.querySelector('.js-good');
const btn = document.querySelector('.js-battle');
const textResult= document.querySelector('.js-text');

let random = 0;
// funciones

//elegir número
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);    
   }
// funcion valores random entre 1-6 malos(condicional )
function makeBadLight (){
    let random = getRandomNumber(6); //hasta el 6
    if (random <= 2){
        random =2
    }else if (random >2 && random<5){
        random=3;
    }else if (random >=5){
        random =5;
    }
    return random;
}
//Función héroes
function goodLight () {      
    const selectValue = parseInt(select.value);     
    return selectValue;
}
//comparar
function compare (good, evil){
    if (good > evil){
        console.log (good,evil)
        htmlResult('Ha ganado el Ejército del Bien! Enhorabuena.')
    } else if (good >= evil){
        console.log ("good, evil")
        htmlResult("Empate");
    }else {
        console.log (good,evil);
        htmlResult('Ha ganado el Ejército del Mal! Vuelve a intentarlo.')
    }
}
    //Lo escribe en el HTML
function htmlResult (result){
        textResult.innerHTML= result;
}
//funcion manejadora "madre"
function handleClick (event) {
    event.preventDefault(); //no refresca
    const goodHeroes= goodLight();
    const badHeroes= makeBadLight();
    compare (goodHeroes, badHeroes); 
}

//evento
btn.addEventListener('click', handleClick)  //no entiendo por qué no me escucha el evento