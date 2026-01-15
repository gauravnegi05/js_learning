// // singleton

// // object literals

// const mySym = Symbol("Key1");

// const Jsuser = {
//   name: "Gaurav",
//   "last name": "Negi",
//   [mySym]: "mykey1", // symbol as key
//   age: 20,
//   isLoggedIn: false,
//   lastLoginDayes: ["monday", "tuesday"],
// };

// // console.log(Jsuser.age);
// // console.log(Jsuser["name"]);
// // console.log(Jsuser["last name"]);
// // console.log(Jsuser[mySym]);

// // Jsuser.name = "New Gaurav";
// // console.log(Jsuser.name);
// // // Object.freeze(Jsuser);
// // Jsuser.name = "Another Name";
// // console.log(Jsuser.name); // will not change because object is freezed

// Jsuser.greeting = function () {
//   console.log("Hello JS User");
// };

// console.log(Jsuser.greeting());

// Jsuser.greeting2 = function () {
//   console.log(`Hello Js user, ${this.name}`);
// };

// console.log(Jsuser.greeting2());

// //---------------------------------------------------------

// const tinderUser = new Object();
// tinderUser.name = "Gaurav";
// tinderUser.age = 20;
// tinderUser.isLoggedIn = false;

// // console.log(tinderUser);

// const regularUser = {
//     email: "gaurav@example.com",
//     fullname: {
//         userFullname: {
//             firstname: "Gaurav",
//             lastname: "Negi"
//         }
//     }
// }

// console.log(regularUser.fullname.userFullname.firstname, regularUser?.fullname?.userFullname?.lastname);

// // const obj1 = {1: "a", 2: "b"};
// // const obj2 = {3: "a", 4: "b"};

// // const obj3 = {obj1, obj2}; // nested object
// // const obj4 = Object.assign({},obj1, obj2)
// // const obj5 = {...obj1, ...obj2} // spread operator
// // console.log(obj3);
// // console.log(obj4);
// // console.log(obj5);

// const users = [
//     {
//         userId: 1,
//         userName: "gaurav",
//     },
//     {
//         userId: 2,
//         userName: "test1",
//     },
//     {
//         userId: 3,
//         userName: "test2",
//     }
// ]

// // console.log(users[1]?.userName);
// // console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//---------------------------------------------------------------------

// destructuring

const course = {
  coursename: "React JS",
  price: 999,
  courseInstructor: "Gaurav",
};

const { coursename: name, price: p, courseInstructor: instructor } = course;

console.log(name);
console.log(p);

// {
//     "name": "Gaurav",
//     "age": "20",
//     "email": "gaurav@example.com"
// }

[
  { name: "Gaurav", age: "20", email: "gaurav@example.com" },
  { name: "Test1", age: "21", email: "test1@example.com" },
];
