// Primitive Datatypes
let str = "I am a string";                // string
let num = 42;                             // number
let bigInt = 12345678901234567890n;       // bigint
let isAvailable = true;                   // boolean
let nothing = null;                       // null
let notDefined;                           // undefined

console.log("String:", str);
console.log("Number:", num);
console.log("BigInt:", bigInt);
console.log("Boolean:", isAvailable);
console.log("Null:", nothing);
console.log("Undefined:", notDefined);

// Non-Primitive Datatypes
let arr = [1, 2, 3, 4];                   // array
let obj = {
    name: "Horrid Coder",
    age: 22 }; // object
function greet() {                        // function
    console.log("Hello, OG!");
}

console.log("Array:", arr);
console.log("Object:", obj);
greet();

// typeof
console.log(typeof obj);