//declarando clase
class User{
    //metodo
    greeting(){
        return 'HOLA!!'
    }
}

const dieGO = new User(); //instancia de user
console.log(dieGO.greeting());
const dvloper = new User(); //instancia de user

//Constructor
class Usuario{
    //inicializa lo que contenga al instanciar la clase
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'HOLA!!'
    }
}

const pedroPascal = new Usuario()

//This -> hacemos referencia al valor asignado en el constructor.
class User{
    constructor(name){
        this.name = name
    }
    //metodos
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} my friend ${this.name}`
    }
}

const ellie = new User('ellie')
console.log(ellie.greeting());

//Getters y Setters
class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    //metodos
    #speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} my friend ${this.name}`
    }

    //getters and setters
    get #uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n
    }
}

const lucas = new User('Lucas',23)
console.log(lucas.uAge) // undefined
console.log(lucas.uAge = 32) // 32
console.log(lucas.speak()) // error -> TypeError: lucas.speak is not a function