let numeroSecreto = 0;
let intentos = 0;
let listaNumSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
        } else {
        asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumSorteados);
    // Si ya sorteamos todos los números
    if (listaNumSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el número generado está incluido en la lista
        if (listaNumSorteados.includes(numeroGenerado)){
            return generarNumSecreto();
        } else {
            listaNumSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesInicio(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intérvalo de números
    // Generar número aleatorio
    // Inicializar el número de intentos
    condicionesInicio();
    // Deshabilitar botón de "Nuevo Juego"
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesInicio();
