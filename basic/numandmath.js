// number

const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const anothernumber = 100.123
console.log(anothernumber.toPrecision(4));

const zeronumber = 1000000000
console.log(zeronumber.toLocaleString('en-IN')); // apke number ko format krne ka best tareeka hai

// math
console.log(Math); // Yeh Math object ko dikhata hai, JS ka tool hai

console.log("Math.abs =", Math.abs(-4)); // Yeh negative ko positive bana deta hai

console.log("Math.round =", Math.round(4.4)); // Yeh decimal number ko round off karta hai, pura number banata hai

console.log("Math.ceil =", Math.ceil(4.1)); // Yeh decimal ko hamesha upar wale pure number mein badalta hai

console.log("Math.floor =", Math.floor(4.9)); // Yeh decimal ko neeche wale pure number mein badalta hai

console.log("Math.min =", Math.min(4, 3, 2, 8)); // Yeh kai numbers mein se sabse chhota chunta hai

console.log("Math.max =", Math.max(4, 3, 2, 8)); // Yeh kai numbers mein se sabse bada chunta hai

console.log((Math.random()));
console.log((Math.random() * 10) + 1 );
console.log(Math.floor(Math.random() * 10) + 1 );

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);