//funcion generator
function* iterate (arr){
    //algoritmo
    for (const value of arr) {
        yield value
    }
}

const it = iterate(['diego', 'juan', 'ana', 'diomedes', 'itachi']) //instacia del generator
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);