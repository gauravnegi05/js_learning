// function printName() {
//   console.log("G");
//   console.log("A");
//   console.log("U");
//   console.log("R");
//   console.log("A");
//   console.log("V");
// }

// printName();

// function addTwoNumbers(num1, num2) {  // parameters

//     // let sum = num1 + num2;
//     // console.log(sum); // side effect
//     // return sum;
//   return num1 + num2;
// }

// // addTwoNumbers(3, 5);  // arguments

// let result = addTwoNumbers(10, 15);
// // console.log(result);

// function loginUserMessage(username = "sam") {
//     if (!username) {
//         return "Please enter username";
//     }
//     return `Welcome back, ${username}`;
// }

// console.log(loginUserMessage("Gaurav"));
// console.log(loginUserMessage("negi"));


//----------------------------------------------------------

// function calculateCartPrice (...num1) {    // rest operator
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000));

// const user = {
//     username: "Gaurav",          // parameters
//     pricePerProduct: 200
// }

function handleObject (anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.pricePerProduct}`);
}

// handleObject(user);  // arguments
handleObject({username: "Test User", pricePerProduct: 500});  // arguments

// const myNewArray = [10, 20, 30, 40, 50];  // parameters

function returnArrayElements (getarray) {
    return getarray[2];   // arguments
}

// console.log(returnArrayElements(myNewArray));
console.log(returnArrayElements([100, 200, 300, 400, 500]));  // arguments 
