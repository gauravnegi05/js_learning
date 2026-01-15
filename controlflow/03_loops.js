// for loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {              // 1st this condition
//         console.log("5 is best")
//     }
//     console.log(element)      // then this
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`outer loop: ${i}`)
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value ${j} and inner loop ${i}`)
//         console.log(i + '*' + j + '=' + i*j)
//     }
// }


// let myarr = ["hh", "hk", "gh"]
// console.log(myarr.length)
// for (let i = 0; i < myarr.length; i++) {
//     const element = myarr[i];
//     console.log(element)
// }


// break and continue

// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`detected 5`)
//         break                            // stop at 5
//     }
//     console.log(`value of i is ${i}`)
    
// }


// for (let i = 0; i <= 20; i++) {
//     if (i == 5) {
//         console.log(`detected 5`)
//         continue                              // skip
//     }
//     console.log(`value of i is ${i}`)
    
// }


//---------------------------------------- while do while loop

// let i = 0

// while (i <= 10) {
//     console.log(`value of i is ${i}`)
//     i = i + 2
// }

// let myarray = ["ffg", "hh", "ggh"]

// let i = 0
// while (i < myarray.length) {
//     console.log(`value is ${myarray[i]}`)
//     i = i + 1
// }



// let h = 1

// do {
//     console.log(`score is ${h}`)
//     h++
// } while (h <= 10);


//--------------------------for of loop

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const i of arr) {
//     console.log(i)
// }

// const greeting = "hello world"
// for (const i of greeting) {
//     if (i == " ") {
//         console.log("space")
//         continue
//     }
//     console.log(`each char is ${i}`)
// }


//------------------------------Map

// const map = new Map()

// map.set("IN", "India")
// map.set("US", "United States")
// map.set("FR", "France")
// map.set("IN", "India")       // not shown duplicate because map take unique

// // console.log(map)

// for (const [key, value] of map) {
//     console.log(key, '-' ,value)
// }


// const myObj = {
//     'game': 'nfs',
//     'score': 100,
//     'level': 5
// }

// for (const key in myObj) {
//     console.log(`${key} : ${myObj[key]}`)
// }


// const myObj = {
//     js: "javascript",
//     cpp: "C++",
//     rb: "ruby"
// }

// for (const key in myObj) {
//     console.log(`${key} shortcut is for ${myObj[key]}`)
// }


// const programming = ["js", "gg", "hh"]

// for (const key in programming) {
//     console.log(programming[key])
// }



// const map = new Map()

// map.set("IN", "India")
// map.set("US", "United States")
// map.set("FR", "France")
// map.set("IN", "India")       

// for (const key in map) {
//     console.log(key)
// }



//----------------------------------for each loop

// const coding = ["js", "py", "rb", "cpp"]

// coding.forEach(function(item){
//     console.log(item)
// })

// coding.forEach((item) => {
//     console.log(item)
// })


// function printme(item) {
//     console.log(item)
// }

// coding.forEach(printme)

// coding.forEach( (item, index, arr) => {
//     console.log(index,item,arr)
// })


// const mycoding = [
//     {
//         lang: "js",
//         file: ".js"
//     },
//     {
//         lang: "python",
//         file: ".py"
//     },
//     {
//         lang: "ruby",
//         file: ".rb"
//     }
// ]

// mycoding.forEach( (item) => {
//     console.log(item.lang , item.file)
// })