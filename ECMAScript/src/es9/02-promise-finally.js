const anotherFunction = () => {
    // algo que va a pasar, hoy, mañana o nunca
    return new Promise((resolve, reject)=>{
        // logica necesaria para saber si es un resolve o reject.
        if (false) {
            resolve('HEYY!!')
        }else{
            reject('NAAAAH!!!')
        }
    })
}

anotherFunction()
    .then(response => console.log(response)) //resolve
    .catch(err => console.log(err)) //reject
    .finally(() => console.log('Finally'))