const regex = /\b(Apple)+\b/g //filtra la palabra apple.
const fruit = 'Apple, Banana, Oranges, Orange'

for (const match of fruit.matchAll(regex)) {
    console.log((match));
}