// const myArr = [0, 1, 2, 3, 4, 5];
// // const myHeroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

// // const myArr2 = new Array(1, 2, 3, 4);

// // console.log(myArr[1]);


// // // Array methods

// // // myArr.push(6)
// // // myArr.push(7)
// // // myArr.pop()

// // // myArr.unshift(9)
// // myArr.shift()

// // console.log(myArr);

// // console.log(myArr.includes(9));
// // console.log(myArr.indexOf(3));

// // const NewArr = myArr.join('-');
// // console.log(NewArr);


// // slice and splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);
// console.log("Slice ", myn1);
// const myn2 = myArr.splice(1, 3, 9, 8, 7);
// console.log("Splice ", myn2);
// console.log("B ", myArr);

const marvel_heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Captain America'];
const dc_heroes = ['Batman', 'Superman', 'Flash', 'Wonder Woman', 'Aquaman'];

// const all_hero = marvel_heroes.push(dc_heroes)
// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log("1", all_hero);

// console.log("2",all_heroes);

//spread operator

// const all_new_heroes = [...marvel_heroes, ...dc_heroes];

// console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,8];

console.log(another_array.flat());

console.log(Array.isArray("Gaurav"));
console.log(Array.from("Gaurav"));
console.log(Array.from({name: "gaurav"}));  // it will give empty array because object is not iterable

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



