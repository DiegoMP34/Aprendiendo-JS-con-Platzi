const string = 'string padding'
//agrega el - despues de la posicion 14 que son la cantidad de caracteres.
console.log(string.padStart(15,'-')); // -string padding
console.log(string.padStart(20,'-')); // ------string padding
//agrega el - pero al final
console.log(string.padEnd(20,'-')); // string padding------