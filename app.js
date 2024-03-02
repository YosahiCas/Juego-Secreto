//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número secreto';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número del 1 al 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) { 
    let elementoHTLML = document.querySelector(elemento);
    elementoHTLML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
  
  if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1)? 'vez': 'veces'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    //El usuario no acertó
    if(numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p', 'El numero secreto es menor');
    } else {
      asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++;
    limpiarcaja();
  }
  return;
}

function limpiarcaja() { 
  let valorCaja = document.querySelector('#valorUsuario')
  valorCaja.value = '';
}

function generarNumeroSecreto() { 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos lo numeros');
    } else {
    // Si el numero Generado esta incluido en la lista

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
    
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1' , 'Juego del numero secreto');
  asignarTextoElemento('p' , `Indica un numero de 1 a ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;

}

function reiniciarJuego() {
  // Limpiar la caja.
  limpiarcaja();
  // Indicar mensaje de intervalo de numero
  
  // Generar numero aleatorio 
  // Inicializar el numero de intentos
  condicionesIniciales();
  // Deshabilitar el boton de nuevo juego. 
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
