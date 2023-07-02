const regex = /\b(Apple)+\b/ //filtra la palabra apple.

const string = 'Aprendiendo versiones de JavaScript con @gdnx Oscar Barajas Apple'

const replacedString = string.replace("JavaScript", "TypeScript")
const replacedString2 = string.replace(regex, "TypeScript")
console.log(string) // Aprendiendo versiones de JavaScript con @gdnx Oscar Barajas
console.log(replacedString) // Aprendiendo versiones de TypeScript con @gdnx Oscar Barajas
console.log(replacedString2) // Aprendiendo versiones de JavaScript con @gdnx TyoeScript