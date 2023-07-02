const users = {
    mcKlo: { country: 'PE'},
    ratatuille: { country: 'IT' }
}

console.log(users.mcKlo.country); // PE
console.log(users.ratatuille.age); // undefined
// que pasa si en la base de datos ya no existe un usuario
console.log(users.santa); // undefined
//console.log(users.sante.country); // throw error, ´cause there´s no country for undefined properties
// Podemos obtener un undefined usado optional changing.
console.log(users?.santa?.country); // undefined
