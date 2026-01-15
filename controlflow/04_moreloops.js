// const coding = ["js", "py", "rb", "cpp"]

// const values = coding.forEach( (item) => {
//     return item
// } )

// console.log(values)

// const mynum = [2, 3, 4, 5, 6, 7, 8, 9];

// const newmynum = mynum.filter((num) => {
//   return num > 4;
// });

// const newnum = []

// mynum.forEach((num) => {
//     if (num > 4) {
//         newnum.push(num)
//     }
// });

// console.log(newnum);

const books = [
    { title: "Book One", author: "Author One", rating: 4.5, genre : "fiction" },
    { title: "Book Two", author: "Author Two", rating: 3.8, genre : "non-fiction" },
    { title: "Book Three", author: "Author Three", rating: 4.2, genre : "fiction" },
    { title: "Book Four", author: "Author Four", rating: 2.9, genre : "non-fiction" },
];

const userbooks = books.filter( (book) => book.genre === "fiction" || book.rating > 4.0 );

console.log(userbooks)