// arrays destructuring
let animals = ['turtle','dog','horse']
let [a,b,c] = animals // rest-spread

console.log(a,b,c);
//another usage
let {0: first, length, [length - 1]: last} = animals 
console.log(first);
console.log(length);
console.log(last);

//objects destructuring
let user = {username: 'McKlopedia', password: 'naruto1234'}
let {username,password} = user //when use in object, have to write key name

console.log(username,password);

//Spread Operator
let person = {name: 'John', age:21}
let country = 'US'

let data = {...person, country} //spread
console.log(data);

//rest operator
function sum(num, ...args) {
    console.log(...args);
    console.log(num + args[0]);
    return num + args[0]
}

sum(2,3,4,5)

//Playground Exercise
let json1 = { name: 'Mr.Michi3', food: 'Meat' }
let json2 = {age :21, color: 'green' }
function solution(json1 = {name: 'Mr.Michi', food: 'Pescado'}, json2 = {age: 12, color: 'Blanco'}) {
    // let jsonA = json1 || { name: 'Mr.Michi', food: 'Pescado' }
    // let jsonB = json2 || { age: 12, color: 'Blanco' }
    return {...json1,...json2}
  }

  console.log(solution());
  console.log(solution(json1,json2));