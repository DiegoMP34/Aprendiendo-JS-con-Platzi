/*1) Programa una función que cuente el número de caracteres de una cadena de
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
    const aleatorio = () => Math.ceil(Math.random() * (600 - 501) + 501)
    console.info(aleatorio())*/

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
    const capicua = (num) =>
      (typeof num !== 'number') 
      ? console.warn("No es un numero")
      : (num%1!== 0) 
        ? console.warn("No es un numero entero")
        : (num === 0) 
          ? console.warn("No se acepta cero")
          : (num.toString().split("").reverse().join("") === num.toString())
    
    console.info(capicua(2002))*/

/* 11) Programa una función que calcule el factorial de un número 
  (El factorial de un entero positivo n, se define como el producto de 
  todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 

  const factorial = (numero) => {
    let fac = numero 
    for (let i = 1; i < numero; i++) {
      fac *= (numero - i)
    }
    return fac
  }
  console.info(factorial(6))*/

/* 12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const esPrimo = (num) => (typeof num !== 'number') 
? console.warn("No es un numero")
: (num%1!== 0) 
  ? console.warn("No es un numero entero")
  : (num === 0) 
    ? console.warn("No se acepta cero")
    : (num%2!==0)

console.info(esPrimo(0))*/

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

const toFahrenheit = (grados = 0, tipo = "") => {
  if (typeof grados !== 'number') {
    return console.warn("El grado no es un numero")
  } 
  if (typeof tipo !== 'string') {
    return console.warn("El tipo no es un string")
  } 
  let fa , cel 
    switch (tipo) {
      case "F":
        fa = 32 + (grados * 1.8)
        console.log(`${fa}°F`)
        break;
      case "C":
        cel = (grados - 32) * (5/9)
        console.log(`${cel}°C`)
        break;
    }
}

toFahrenheit(32,"C")*/