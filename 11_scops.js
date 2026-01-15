

// var c =300
let a = 300;
if (true) {
  let a = 10;
  const b = 20; // block scope
  //   var c = 30;
//   console.log("inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);




// function one () {
//     const username = "gaurav"

//     function two () {
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website)

//     two()  
    
// }
 
// one()


if(true) {
    const username = "gaurav"
    if (username === "gaurav") {
        const website = "youtube"
        //console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)



//-------------------------------------------------------------

//  console.log(addone(5))
function addone (num) {
    return num + 1
}



// const addtwo = function (num) {            // hoisting
    // return num + 2
// }
// addtwo(5)



//-------------------------------------------arrow finction


const user = {
    username: "gaurav",
    price: 999,

    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to website`)
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this)


// function chai () {
//     let username = "gaurav"
//     console.log(this)
//     console.log(this.username)      // undefined
// }

// chai()


// const chai =function () {
//     let username = "gaurav"
//     console.log(this)
//     console.log(this.username)      // undefined
// }

// chai()


const chai = () => {
    let username = "gaurav"
    console.log(this)
}

chai()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addtwo(3, 4))



// const addtwo = (num1, num2) => (num1 + num2)
const addtwo = (num1, num2) => ({username: "gau"})

console.log(addtwo(3, 4))


// const myarr = [1,2,3,4,5]

// myarr.forEach(() =>)

