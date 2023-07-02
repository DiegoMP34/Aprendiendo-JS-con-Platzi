// enhanced object literals
function newUser(user, age, country, uId) {
    // retornamos un objeto, sin necesidade de asignarle su valor
    // ya que este es igual que el anterior
    return {
        user,
        age,
        country,
        id: uId
    }
}
console.log(newUser('Marcos',21,'PE',7));