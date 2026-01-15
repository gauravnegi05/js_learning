// "use strict"; // treat all JS code as newer version

// alert(3 + 3)    // we are using nodejs, not browser

// console.log(3 + 3);

// console.log("Gaurav");


// let name = "Gaurav"  //string

// let age = 20  //integer

// let isLoggedIn = false  //boolean

// null -> standalone value

// undefined -> value not assigned

// symbol -> unique


// object

// console.log(typeof isLoggedIn);


// Premitive 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference type (Non-Premitive) : Array, Objects, Functions

// const heros = ["shatiman", "hanuman", "doga"]  // Array

// let obj = {
//     name: "gaurav",      // object
//     age: 20,
// }

// const myfun = function(){
//     console.log("hii");         //Function
// }


//--------------------------------------------

// Stack (primitive), Heap (Non-Primitive)

let myName = "Negi"

let otherName = myName
otherName = "gaurav"

console.log(myName);
console.log(otherName);

let obj ={
    email: "a@gmi.com",
    upi: "user@n",
}


let user2 = obj

user2.email = "n@g.com"

console.log(obj.email);
console.log(user2.email);

