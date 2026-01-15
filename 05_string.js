const name = "gaurav";
const Count = "50";

// console.log(name + Count + " Value");

console.log(`Hello my name is ${name} and my body count is ${Count}`); // string interpolation

const gameName = new String("Gaurav-N-egi");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf("a"));

const gname = gameName.substring(0, 4);
console.log(gname);

const ggname = gameName.slice(-8, 3);
console.log(ggname);

const gtname = "   negi";
console.log(gtname.trim());

const url = "www.google.com";

console.log(url.replace(".", "-"));

console.log(url.includes("google"));

console.log(gameName.split('-'));


