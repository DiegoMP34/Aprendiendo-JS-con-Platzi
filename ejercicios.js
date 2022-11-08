/*1) Programa una función que cuente el número de caracteres de una caden
    texto, pe. miFunción("Hola Mundo") devolverá 10 
      try {
        function countCad(cadena) {
          for (let i = 0; i < cadena.length; i++) {
            console.log(cadena[i]);
          }
          console.log(`El numero de caracteres es: ${cadena.length}`);
        }
        let cad = prompt("Ingresa la cadena");
        countCad(cad);
        document.getElementById("mostrar").innerHTML = 
        `Cadena: ${cad}<br>El numero de caracteres es: ${cad.length}`;
      } catch (error) {
        console.log("Ingresa nuevamente la cadena")
      }*/

/*2) Programa una función que te devuelva el texto recortado según el número de
    caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Holai'
    function cortar(cadena,posicion){
      if (!(cadena === "")) {
        let cadCortada = cadena.slice(0,posicion) 
        console.log(`La cadena original es: ${cadena} y se corta en la posicion ${posicion}. La nueva cadena es ${cadCortada}`)
        document.getElementById("mostrar").innerHTML = 
        `La cadena original es: ${cadena} y se corta en la posicion ${posicion}.<br>La nueva cadena es <b>${cadCortada}</b>`;
      }else{
        console.error("No se ha especificado la cadena");
      }
    }
    cortar("h",0) 
    const cortar = (cadena,posicion) => { 
        if (!(cadena === "")) {
            let cadCortada = cadena.slice(0,posicion) 
            console.log(`La cadena original es: ${cadena} y se corta en la posicion ${posicion}. La nueva cadena es ${cadCortada}`)
            document.getElementById("mostrar").innerHTML = 
            `La cadena original es: ${cadena} y se corta en la posicion ${posicion}.<br>La nueva cadena es <b>${cadCortada}</b>`;
        }else{
            console.error("No se ha especificado la cadena");
        } 
    }
    cortar("hola mundo",4)*/

/*3) Programa una función que dada una String te devuelva un Array de textos
    separados por cierto caracter, pe. miFuncion('hola que tal', devolverá ['hola•, 'que', 'tal' 
    let frase = "hola que tal"
    function separar(cadena) {
      let cadSeparada = cadena.split(" ")
      return cadSeparada
    }
    console.log(separar(frase))

    let arrayfrase = separar(frase)
    document.getElementById("mostrar").innerHTML = 
        `La cadena: ${frase} es separada por cada palabra <br>`
    for (const i of arrayfrase) {
      document.getElementById("mostrar2").innerHTML += `${i} - `
    }*/

/*4) Programa una función que repita un texto X veces, pe. miFuncion('HolaMundo', 3) 
    devolverá Hola Mundo Hola Mundo Hola Mundo 
  function repetir(cadena, veces) {
  if (Math.sign(veces) === -1)
    return console.error("El numero de veces no debe ser negativo");
  if (cadena === "" || cadena === undefined)
    return console.warn("Se debe colocar la cadena");
  console.log(cadena.repeat(veces));
}
repetir("h ", 3); */

/*5) Programa una función que invierta las palabras de una cadena de texto, pe. 
    miFuncion("Hola Mundo") devolverá "odnuM aloH".
    const voltear = (cadena) => {
        if (cadena === "" || cadena === undefined) return console.warn("Ingresa una cadena"); 
        return nuevaCad = cadena.split("").reverse().join("");
    }
    console.log(voltear())*/

/*6) Programa una función para contar el número de veces que se repite una palabra 
    en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
    const contarPal = (texto,palabra) => texto.match(new RegExp(palabra,"g")).length

    console.log(`Se repite ${contarPal("diego marcos portugal diego eduardo","diego")} veces`)*/

/*7) Programa una función que valide si una palabra o frase dada,
    es un palíndromo (que se lee igual en un sentido que en otro), 
    pe. mifuncion("Salas") devolverá true.

    const palindromo = (palabra) =>{
        const array = palabra.split("").filter(word => (word !== " "));
        if (array.join("") === array.reverse().join("")){
            return true
        }
        return false
    }
    console.log(palindromo("somos"))*/

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
    pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5" 
  
  const eliminar = (texto, patron) => 
    (!texto)
    ? console.warn("No hay texto")
    : (!patron)
      ? console.warn("No hay un patron")
      : console.info(texto.replace(new RegExp(patron,"g"),""))
    
  eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")*/

/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
    const aleatorio = () => Math.ceil((Math.random() * 99) + 501)
    console.info(aleatorio())*/

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/
    /* const capicua = (num = 0) =>
      (typeof num !== 'number') 
      ? console.warn("No es un numero")
      : (num%1!== 0) 
        ? console.warn("No es un numero entero")
        : (num === 0) 
          ? console.warn("No se acepta cero")
          : (num.toString().split("").reverse().join("") === num.toString()) 
            ? console.log(true) : console.log(false);
    
    capicua(1203) */
    /* const capicua = (num = 0) => {
      if (typeof num !== 'number') return console.warn("No es un numero");

      if (num%1!== 0) return console.warn("No es un numero entero")

      if (num === 0) return console.warn("No se acepta cero")
      
      numero = num.toString()
      let numRevez = numero.split("").reverse().join("");
      return (numRevez === numero) 
        ? console.info(`si es capicua ${numero} a ${numRevez}`) : console.info("no es capicua");
    }

    capicua(2.2) */

/* 11) Programa una función que calcule el factorial de un número 
  (El factorial de un entero positivo n, se define como el producto de 
  todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 

  const factorial = (numero = undefined) => {
    if (numero === undefined) return console.warn("No ingresaste un numero");
    if (typeof numero !== 'number') return console.warn("No es un numero");
    if (numero%1!== 0) return console.warn("No es un numero entero")
    if (numero === 0) return console.warn("No se acepta cero")
    
    let fac = numero 
    for (let i = 1; i < numero - 1; i++) {
      fac *= (numero - i)
    } 
    
    // otra forma 
    let fac = 1
    for (let i = numero; i >1; i--) {
      fac *= i;
    }
    return console.log(`El factorial es ${fac}`);
  }
  factorial(6)*/
/* 12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = (num) => {
  if (num === undefined) return console.warn("No ingresaste un numero");
  if (typeof num !== 'number') return console.warn("No es un numero");
  if (num%1!== 0) return console.warn("No es un numero entero")
  if (num === 0) return console.warn("No se acepta cero")
  if (num === 1) return console.warn("No se acepta 1")
  if (Math.sign(num)===-1) return console.warn("No se acepta numeros negativos")
  
  let divisible = false;

  for (let i = 2; i < num; ++i) {
    if (num % i === 0) {
      divisible = true
      break;
    }
  }

  return (divisible) 
  ? console.log("No es primo")
  : console.log("Si es primo");
}

esPrimo(0)
esPrimo(1)
esPrimo(-1)
esPrimo(2)*/

/* 13) Programa una función que determine si un número es par o impar, pe.
miFuncion(29) devolverá Impar.

const ParImpar = {
  Par:"par" ,
  Impar:"impar"
}

const ParOImpar = (num) => (typeof num !== 'number') 
? console.warn("No es un numero")
: (num%1!== 0)
  ? console.warn("No es un numero entero")
  : (num === 0)
    ? console.warn("No se acepta cero")
    : (num%2 === 0) 
      ? ParImpar.Par
      : ParImpar.Impar

console.info(ParOImpar(2))*/

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F. 
const convertirGrados = (grados = undefined, tipo = undefined) => {
  if (grados === undefined) return console.warn("No has colocado ningun numero");
  if (tipo === undefined) return console.warn("No has colocado ninguna unidad");
  if (typeof grados !== 'number') return console.warn("El grado no es un numero")
  if (typeof tipo !== 'string') return console.warn("El tipo no es un string")

  let fa , cel 
    switch (tipo.toUpperCase()) {
      case "F":
        fa = 32 + (grados * 1.8)
        console.log(`${fa}°F`)
        break;
      case "C":
        cel = (grados - 32) * (5/9)
        console.log(`${cel}°C`)
        break;
      default: 
        console.warn("No existe esa unidad");
    }
}
convertirGrados(20,"f")*/
/*15) Programa una función para convertir números de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.
const binaryDecimal = (numero = undefined, base= undefined) => {
  if (numero === undefined) return console.warn("No has colocado ningun parametro");
  if (base === undefined) return console.warn("No has colocado ninguna base");
  if (typeof numero !== 'number') return console.warn("El numero no es un numero");
  if (typeof base !== 'number') return console.warn("La base no es un numero");

  switch (base) {
    case 2:
      return console.log(`${numero} en base ${base} = ${parseInt(numero,base)} base 10`);
    case 10:
      return console.log(`${numero} en base ${base} = ${numero.toString(2)} base 2`);
    default:
      return console.warn(`La base no puede ser ${base}`);
  }
}
binaryDecimal(100,2);*/

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una 
cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
const discount = (cantidad = undefined, discount = undefined) => {
  if (cantidad === undefined) return console.warn("No has colocado ningun parametro");
  if (discount === undefined) return console.warn("No has colocado ningun descuento");
  if (typeof cantidad !== 'number') return console.warn("La cantidad no es un numero");
  if (typeof discount !== 'number') return console.warn("El descuento no es un numero");
  if (Math.sign(cantidad) === -1) return console.warn("La cantidad no puede ser negativa");
  if (Math.sign(discount) === -1) return console.warn("La cantidad no puede ser negativa");
  if (cantidad === 0 || discount === 0) return console.warn("No puede ser cero");

  let res = cantidad - (cantidad * (discount/100));
  return console.log(`Se le aplico el ${discount}% descuento a ${cantidad} : ${res}`);
}
discount(110,10);*/

/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta 
el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const cantidadAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No has colocado ningun parametro");
  if (!(fecha instanceof Date)) return console.warn("No es una fecha");
  // if (Math.sign(fecha) === -1) return console.warn("La cantidad no puede ser negativa"); 
  // if (fecha === 0) return console.warn("No puede ser cero");

  //la diferencia entre milisegundos resuelve los años pasados
  let restaMS = new Date().getTime() - fecha.getTime();
  let anioEnMS = 1000 * 60 * 60 * 24 * 365;
  let anios = Math.floor(restaMS / anioEnMS);

  return (Math.sign(anios) === -1) ? console.log(`Faltan ${Math.abs(anios)} años para ${fecha.getFullYear()}`) :
  (Math.sign(anios) === 1) ? console.log(`Faltan ${Math.abs(anios)} años`)
  : console.log("Estamos en el año actual");
}
cantidadAnios(new Date(1984,10,4));
cantidadAnios(new Date(2070,10,25))*/

/*18) Programa una función que dada una cadena de texto cuente el número de vocales y 
      consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

      const contarVocCons = (cadena = undefined) =>{
        if (typeof cadena !== "string" ) return console.log("No es una cadena, no se puede analizar");
        if (cadena === "") return console.log("Ingresa un texto");

        let vocalesIn = cadena.match(/[aeiou]/gi);
        let consonantesIn = cadena.match(/[bcdfghjklmnñpqrstvwxyz]/gi)
        
        console.log(`En el texto hay ${vocalesIn.length} vocales y ${consonantesIn.length} consonantes`);
      }
      contarVocCons("holam unfoñ");*/

/*19) Programa una función que valide que un texto sea un nombre válido, 
      pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, 
  pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
      const validarNombreEmail = (nombre = "", email = "") => {
        if (typeof nombre !== "string" || typeof email !== "string") return console.error("No es un texto, no se puede analizar");
        if (!nombre || !email) return console.warn("Ingresa un texto");

        let nomValido = /^[A-Za-z\sÁ-Úá-úÑñÜü]+$/g.test(nombre);
        let emailValido = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/i.test(email);

        (nomValido) ? console.log("Nombre si es valido") : console.log("Nombre no es valido");
        (emailValido) ? console.log("Email si es valido") : console.log("Email no es valido");
      }

      validarNombreEmail("diego marcos portugal","20185605@unica.edu.pe");*/

/* Fusion 19 y 20

      const validarPatron = (nombre = "", patron = undefined) => {
        if (!nombre) return console.warn("Ingresa un texto");
        if (patron === undefined) return console.warn("Ingresa un patron");
        if (typeof nombre !== "string") return console.error("No es un texto, no se puede analizar");
        if (!(patron instanceof RegExp)) return console.error("No es una expresion regular, no se puede analizar");

        (patron.test(nombre)) ? console.log("Si es valido") : console.log("No es valido");;
      }
      validarPatron("1hola123",/^[a-zA-Z]+$/g);*/

/*21) Programa una función que dado un array numérico devuelve otro array con los números 
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

      const elevarCuadrado = (elems = undefined) => {
        if (elems === undefined) return console.warn("No has ingresado un arreglo de datos");
        if (elems.length === 0) return console.warn("No hay elementos");
        if (!(elems instanceof Array)) return console.error("No es un array");

        // let elemsCuadrado = [];

        // 1era forma
        for (let i = 0; i < elems.length; i++) {
          elemsCuadrado = Math.pow(elems[i],2);
        } 

        // 2da forma
        for (const elem of elems) {
          elemsCuadrado.push(Math.pow(elem,2));
        }

        // 3er forma
        for (const elem of elems) {
          if (!(typeof elem === "number")) return console.error("Todos los elementos deben ser numeros");
        }
        const elemsCuadrado = elems.map(e => e * e);

        console.log(`[${elemsCuadrado.toString()}]`);
      }
      elevarCuadrado([2,4,3]);*/

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo 
de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

      const masAltoBajo = (elems = undefined) => {
        if (elems === undefined) return console.warn("No has ingresado un arreglo de datos");
        if (elems.length === 0) return console.warn("No hay elementos");
        if (!(elems instanceof Array)) return console.error("No es un array");

        //una forma mas compleja.
        let elemsMaxMin = [];

        elems.sort((a,b) => b - a);
        elemsMaxMin.push(elems.shift());
        elemsMaxMin.push(elems.pop());
        
        //otra forma mas facil
        for (const elem of elems) {
          if (!(typeof elem === "number")) return console.error("Todos los elementos deben ser numeros");
        }
        return console.log(`Array anterior [${elems}] -> Mayor valor: ${Math.max(...elems)} 
          Valor menor: ${Math.min(...elems)}`);
      }
      masAltoBajo([2,3,1,-10,1000,-20.4]);*/

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en 
el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const arrayParImpar = (elems = undefined) => {
  if (elems === undefined) return console.warn("No has ingresado un arreglo de datos");
  if (elems.length === 0) return console.warn("No hay elementos");
  if (!(elems instanceof Array)) return console.error("No es un array");

  for (const elem of elems) {
    if (!(typeof elem === "number")) return console.error("Todos los elementos deben ser numeros");
  }

  const objParImpar = { "Pares": elems.filter(e => e%2 === 0),
  "Impares": elems.filter(e => e%2 !== 0)}

  return console.log(`Tu array [${elems}]: Elementos pares -> [${objParImpar["Pares"]}] 
    Elementos impares -> [${objParImpar["Impares"]}]`);
};

arrayParImpar([2,4,5,6,7,9]);*/

/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
 el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
 pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

 const arrayAscDesc = (elems = undefined) => {
  if (elems === undefined) return console.warn("No has ingresado un arreglo de datos");
  if (elems.length === 0) return console.warn("No hay elementos");
  if (!(elems instanceof Array)) return console.error("No es un array");

  for (const elem of elems) {
    if (!(typeof elem === "number")) return console.error("Todos los elementos deben ser numeros");
  }

  const elemsAsc = elems.sort((a,b) => a-b);

  return console.log(`Array [${elems}] -> asc: [${elemsAsc}] des: [${elemsAsc.reverse()}]`);
};
arrayAscDesc([7,5,7,8,6,10])

let arr = [2,3,6,1,4,2,1,4,6,3,1,-1,10]
  console.log(arr.sort((a,b)=>a-b).reverse());*/
/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const deleteDupl = (elems = undefined)=>{
  if (elems === undefined) return console.warn("No has ingresado un arreglo de datos");
  if (elems.length === 0) return console.warn("No hay elementos");
  if (!(elems instanceof Array)) return console.error("No es un array");
  if (elems.length === 1) return console.warn("El numero de elementos para evaluar debe ser al menos 2");

  //otra forma
  // return console.log({
  //   elems,
  //   arrSinDupl : elems.filter((value,index,self) => self.indexOf(value) === index)
  // });

  //usamos un nuevo tipo de objeto es set, que su naturaleza es no permitir que sus elementos sean duplicados
  return console.log({
    elems,
    arrSinDupl: [...new Set(elems)]
  });
}

deleteDupl(["x", 10, "x", 2, "10", 10, true, true])*/
/* 26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const promedio = (elems = undefined) => {
  if (elems === undefined) return console.warn("No has ingresado un arreglo de datos");
  if (elems.length === 0) return console.warn("No hay elementos");
  if (!(elems instanceof Array)) return console.error("No es un array");

  for (const elem of elems) {
    if (!(typeof elem === "number")) return console.error("Todos los elementos deben ser numeros");
  }
  /* let sumElems = 0;

  for (const elem of elems) {
    if (!(typeof elem === "number")) return console.error("Todos los elementos deben ser numeros");
    sumElems += elem;
  }
  return console.log(sumElems/elems.length); */

  //otra forma con reduce
  return console.info(elems.reduce((acc,valorAct,index,arr) => {
    acc += valorAct
    if (index === arr.length-1) return acc/arr.length
    else return acc;
  }));

};

promedio([9,8,7,6,5,4,3,2,1,0]);