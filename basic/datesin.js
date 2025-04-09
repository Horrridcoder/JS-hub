let mydate = new Date();
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toString());
console.log(mydate.toTimeString());
console.log(mydate.toUTCString());

// let mycreatedate = new Date (2024, 0, 23)
// let mycreatedate = new Date (2024, 0, 23, 5, 3)
// let mycreatedate = new Date("2024-02-23");
let mycreatedate = new Date("01-23-2025");
console.log(mycreatedate.toLocaleString());

let mytimestamp = Date.now();
console.log(mytimestamp);