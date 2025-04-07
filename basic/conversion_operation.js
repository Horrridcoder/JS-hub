/*
string = "22"
number = 22
*/
// conver string to number do opposite for number
let score = "22"
console.log(typeof score);
console.log(typeof(score));
let stringinnumber = Number(score) // that is so imortant
console.log(typeof stringinnumber) // output number
console.log(stringinnumber)

// deep dive in string to number
/*
let score = "coder" // output is Nan
let score = null // output is 0
let score = undefinied // output is NaN
let score = true // output is 1
let score = false // output is 0
let score = "" // output is number because "" = 0 and 0 is number
check this code
*/

// Boolean
// true
let js = 1;
let Bool = Boolean(js);
console.log("1 = ",Bool); // true

// false
let sj = 0;
let ean = Boolean(sj);
console.log("0 = ",ean); // false

// null
let yt = null;
let con = Boolean(yt);
console.log("null = ",con); // false because null = 0 and 0 = false

// undefined
let ty = undefined;
let on = Boolean(ty);
console.log("undefined = ",on); // false

// number
let IG = 89;
let off = Boolean(IG);
console.log("8 = ",off); // true

// string
let Vs = "hello";
let gh = Boolean(Vs);
console.log('"hello" = ',gh); // true

// empty string
let GI = "";
let no = Boolean(GI);
console.log('"" = ',no); // false

// change number to string
let a = 23
let b = String(a)
console.log(b)
console.log(typeof b);

// convert Number in negative value
let value = 56
let negvalue = -value
console.log(typeof negvalue);