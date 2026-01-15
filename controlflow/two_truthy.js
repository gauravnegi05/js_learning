const userEmail = "gaurav@gmail.com"

if (userEmail) {
    console.log("got")
} else {
    console.log("no email")
}




// falsy value

// false, 0, -0, BigInt - 0n, "", null, undefined, NaN

//truthy values

// "0", 1, 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("array is empty")
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty")
}


// Nullish Coalescing Operator (??) : null undefined

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10    // safty check
// val1 = undefined ?? 15

// console.log(val1)




// Ternary operator

// condition ? true : false

const icetea =100

icetea <=80 ? console.log("less than 80") : console.log("more than 80")