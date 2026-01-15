// immediately invoked function expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)        // named IIFE
})(); // to execute two IIFE use semicollan

( (name) => {
    console.log(`DB ${name}`)            // unnamed IFFE and Parmeter IIFE
}) ('gaurav')


function one () {
    console.log("one")
}
function two () {
    console.log(two)         //callstack
}
function three () {
    console.log(three)
}

one()
two()
three()
