//Para que trabaje especialmente con el titulo (h1)

//Para que trabaje especialmente con el parrafo xd
/*let parrafo = document.querySelector("p");
parrafo.innerHTML = "Escoge un numero del 1 al 10";
*/
//numero intentos
let numero_intentos = 0;
let numero_secreto = 0;
let lista_numero_sorteados = [];
let numero_max = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); //es para seleccionar el boton
    elementoHTML.innerHTML = texto;
    return;
}

function verificarintento(){
    //Esto es lo mismo que querySelector pero es recomendado usar eso para Id o sea para tener mas de un input xd
    let numerousuario =parseInt(document.getElementById('valorUsuario').value);
    //el .value es para que retorne el valor lo cual digitamos en la pagina web xd
    console.log(numero_secreto);
    console.log(numero_intentos);
    if(numerousuario == numero_secreto){
        asignarTextoElemento('p',`Acertaste el numero en ${numero_intentos} ${(numero_intentos === 1?'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
    else{
        //usuario no acertó
        if(numerousuario > numero_secreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        numero_intentos++;
        limpiar_caja();
    }
    // === es para verificar si se esta asignando la igualdad correctamente o sea 5 y 5 son iguales, y  si ambos son enteros
    return;
}

//generar numero secreto
function numerosecreto(){
    let numero_generado = Math.floor(Math.random()*numero_max)+1;
    console.log(numero_generado);
    console.log(lista_numero_sorteados);
    //Si el numero generado esta incluido en la lista
    //.includes recorre todo el arreglo y verifica si existe el elemento buscado
    if(lista_numero_sorteados.length ==numero_max){
        asignarTextoElemento('p', 'Ya se sortearon los numeros posibles');
    }
    else{
        if(lista_numero_sorteados.includes(numero_generado)){
            //aqui usamos recursividad para que genere un nuevo numero random (evitamos crear otra funcion innecesaria )
            return numerosecreto();
            //aqui hay un problema, si se llama recursivamente, funcionara las 10 veces con numero random, pero si pasa de 10, la maquina no podra escoger un nuevo numero y se loquea xd
            //solucion
    
        }
        else{
            lista_numero_sorteados.push(numero_generado);
            return numero_generado;
        }
    }

    
}

//limpiar caja
function limpiar_caja(){
    //el # para acceder ID por quaryselector xd
    document.querySelector('#valorUsuario').value = '';
    
}

//condiciones basicas
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('h1',`Escoge un numero del 1 al ${numero_max}`);
    numero_secreto = numerosecreto();
    numero_intentos = 1;
    //esta funcion hace lo basico, generar nuevo numero, resetear el num intentos y los mensajes de bienvenida cada vez que se quiera iniciar nuevo juego

}

function reiniciarJuego(){
    //limpiar la caja
    limpiar_caja();

    //indicar intervalos de numero
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();

    //desabilitar el boton nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true'); //para qie desabilite el boton de nuevo juego cuando estamos en partida 
}

// usar array aqui para que no se repita el numero, o sea si sale 5 todo bien, pero hay posibilidad que salga en mismo numero a adivinar nuevamente
// en este lenguaje el array puede ser combinado con otros tipo de datos o de un solo dato xd
// algo.push(numero); sirve para añadir un elemento al final del array.
//console.log(nombre_array.length); //para pedir tamaño del array
//para acceder al indice es nombrearray[i] i es un elemento cualquier del array
//console.log(nombrearray[nuemro.length-1]) es para que accedas al ultimo elemento xd


//Arreglo: Recursividad





//isNaN() es para verificar si es numero en realidad ejemplo:  if (isNaN(a) || isNaN(b) || isNaN(c))
//Se redujo codigo usando funcion xd
condicionesIniciales();