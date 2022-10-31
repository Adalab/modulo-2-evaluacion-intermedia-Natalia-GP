'use strict';

//variables
const select = document.querySelector('js-good');
const btn = document.querySelector('js-battle');
const textResult= document.querySelector('js-text');

let random = 0;
// funciones

//elegir número
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);    
   }
// funcion valores random entre 1-5 malos(condicional )
//Función héroes
function goodLight () {      
    const selectValue = parseInt(select.value);     
    return selectValue;

//función malvados
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }
}
//comparar
   function compare (good, evil){
    if (good > evil){
        console.log ("ganan los buenos")
        htmlResult('Ha ganado el Ejército del Bien! Enhorabuena.')
       } else if (good >= evil){
        console.log ("ganan los malos")
        htmlResult("Empate");
       }else {
        console.log (good,evil);
        htmlResult('Ha ganado el Ejército del Mal! Vuelve a intentarlo.')
       }
    }
    function htmlResult (result){
        textResult.innerHTML= result;
    }
//funcion manejadora "madre"
function handleClick (event) {
    event.preventDefault(); //no refresca
    const goodHeroes= goodLight();
    //const malos = 
    const result = compare (goodHeroes,random);
   
    //goodHeroes ();
    //compare (x,y);
   
}

/*function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }
}*/

//evento
button.addEventListener("click", handleClick);