// basic string addition
a = "horrid"
b = " coder"
// console.log(a + b + " coding") // that is old school syntax not use this

// use this
console.log(`hello my name is ${a} and my second name is ${b}`);

const gamename = new String("gta 5")

// prototype
console.log(gamename[0])
console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(1))
console.log(gamename.indexOf("g"))

const newstring = gamename.substring(0, 5)
console.log(newstring);

const secondstring = gamename.slice(-5, 5)
console.log(secondstring);

const thirdstring = "   CODER    "
console.log(thirdstring.trim());

const url = "https://goldbrew%24.netlify.app/"
console.log(url.replace('%24.','-'));
console.log(url.includes("netlify"));
