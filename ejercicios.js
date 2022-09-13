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

  