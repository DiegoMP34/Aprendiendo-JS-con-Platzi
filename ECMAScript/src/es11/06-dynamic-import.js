//buscamos el click del html
const button = document.querySelector('#btn')
const button2 = document.querySelector('#btn2')

// hacemos uso del concepto del import dinamico
button.addEventListener('click', async function (){
    const module = await import('./module.js')
    console.log(module)
    module.saludar()
})

import { saludo } from './module2.js'

button2.addEventListener('click', function (){
    console.log(saludo())
})