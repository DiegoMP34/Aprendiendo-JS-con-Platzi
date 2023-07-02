const entries = new Map([['name','diego'],['age','21'],['country','PE']]);
console.log(entries); // Map(3) { 'name' => 'diego', 'age' => '21', 'country' => 'PE' }
console.log(Object.fromEntries(entries)); // { name: 'diego', age: '21', country: 'PE' }