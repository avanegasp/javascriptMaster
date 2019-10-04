'use strict'

var edad = 18;
var imprime = "";

// evalua una expresión y la compara con una instancia case


//bloque switch
switch (edad) { // expresion
    case 18: // instancia case
    imprime = "Eres mayor de edad"
    break;

    case 25:
    imprime = "Ya eres adulto"
    break;

    case 40:
    imprime = "Crisis de los 40"
    break;

    case 75:
    imprime = "Eres muy sabio"
    break;

  default: // se ejecuta si el valor de la expresión no coincide con cualquiera de las otras instancias
    imprime = "Tu edad es neutra"
    break;
}

console.log(imprime)
