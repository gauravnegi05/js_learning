// const mynum = [2, 3, 4, 5, 6, 7, 8, 9];

// const newnum = mynum.map( (num) => num + 10 )

// const newnum = mynum
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 40);
// console.log(newnum);


//------------------------------------reduce

// const mynum = [1,2,3,4,5]

// const mytotal = mynum.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)
// console.log(mytotal)



const mynum = [1,2,3,4,5]

const mytotal = mynum.reduce( (acc, currval) => acc + currval , 0)
console.log(mytotal)



const shoppingCart = [
    { product: "phone", price: 699, quantity: 1 },
    { product: "laptop", price: 999, quantity: 2 },
    { product: "headphones", price: 199, quantity: 3 },
];

const totalAmount = shoppingCart.reduce( (acc, item) => acc + item.price * item.quantity, 0)
console.log(`total ammount ${totalAmount}`)