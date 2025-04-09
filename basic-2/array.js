// array
let arry = [0, 1, 2, 3, 4,];
let arry2 = new Array(2, 5, 8, 0);
console.log(arry2);

let arrayHeroes = ["spiderman", " batman", " homelander", " captain america"];
console.log(arrayHeroes[1], arrayHeroes[2]); // "batman homelander"

const newarray = arrayHeroes.join()
console.log(newarray);


arrayHeroes.push("hulk"); // add to the end
arrayHeroes.pop(); // remove from the end
arrayHeroes.shift(); // remove from the start
arrayHeroes.unshift("thor"); // add to the start
console.log(arrayHeroes);
console.log(arrayHeroes.includes("batman"));
console.log(arrayHeroes.indexOf("homelander"))

// slice, splice

console,log("Real",arry);

const arrynum2 = arry.slice(1, 2)
console.log(arrynum2);

const arrynum = arry.splice(1, 3)
console.log(arrynum); 
