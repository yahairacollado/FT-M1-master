'use strict'

//Usando Iteración
function BinarioADecimal(num) {
  // tu codigo aca

  let decimal = 0; // resultado decimal
  let numReverse = num.split('').reverse().join(''); // binario al reves

  //valor binario: 1011
  //posicion:      3210
  //indice:        0123
  //valor decimal = 1 * (2^0) + 1 * (2^1) + 0 * (2^2) + 1 * (2^3) = 11

  for (let i = 0; i < numReverse.length; i++) {
     decimal += numReverse[i] * 2 ** i;
  }
  return decimal;
  
}

function DecimalABinario(num) {
  // tu codigo aca

  // let number = num;
  // let binary = (number % 2).toString();
  // for (; number > 1; ) {
  //     number = parseInt(number / 2);
  //     binary =  (number % 2) + (binary);
  // }

  let binary = num.toString(2);

  return binary
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}