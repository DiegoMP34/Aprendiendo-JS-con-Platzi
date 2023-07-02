const fnAsincrona = () => {
    return new Promise((resolve, reject)=>{
        (true)
            ? setTimeout(()=> resolve('AsynC!'), 5000)
            : reject(new Error('error :/'))
    })
}

//como trabajar el asincronismo? 
const anotherFn = async () => { // async - identifica a la funcion como asyncrona
    const something = await fnAsincrona()
    console.log(something); // await - indica que espere a que se realize la funcion asincrona
    console.log('HELLO!!')
}   

console.log('BEFORE');
anotherFn();
console.log('AFTER');

//orden de ejecucion
/*
    BEFORE
    AFTER
    AsynC!
    HELLO!!
*/