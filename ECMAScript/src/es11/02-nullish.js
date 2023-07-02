let value = null
const validate = value ?? 5
console.log(validate) // 1
// value = null
console.log(validate) // 5 

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);