const marvelheroes = ["thor", "ironman", "spiderman"];
const dcheroes = ["superman", "flash", "batman"];

// marvelheroes.push(dcheroes);
// console.log(marvelheroes);'

// const allheroes = marvelheroes.concat(dcheroes);
// console.log(allheroes);

const newheroes = [...marvelheroes, ...dcheroes]; // spread operator
console.log(newheroes);

console.log(Array.isArray("thor"));
console.log(Array.from("thor")); // convert string to array
console.log(Array.from({name : "hulk"})); // convert object to array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // convert number to array