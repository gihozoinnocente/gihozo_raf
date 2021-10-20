// const myArray = [1, 2, 3, 4, 5];
// console.log(myArray);

// function sum(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }
// sum(5, 78);

// const user = {
//     name: "Innocente",
//     city: "Kigali",
//     gender: "Female",
//     age: 24,

// }
// console.log(user);
// console.log(`The username is ${user.name} and she is a ${user.gender} with ${user.age}`);

// const name = "Innocente";
// const age = 24;
// console.log("My user name is " + name + " and i am " + age + " old");
// console.log(`My username is ${name} and am ${age} years old`);

// function multiplication(num1, num2) {

//     return num1 * num2;
// }
// console.log(multiplication(2, 5));

// const square = (num) => {
//     return num * num;
// }
// console.log(square(4));
// console.log(square(10));

// var myStr = "This is the first sentence.";
// myStr += "This is the second sentence.";
// console.log(myStr);


// let value = prompt("blue,red,white or none");

// function favoriteColor(value) {
//     if (value == "blue") {
//         console.log("I like a blue jeans");
//     }
//     else if (value == "red") {
//         console.log("I like red sweather");
//     }
//     else {
//         console.log("You need to enter your favorite color");
//     }

// }
// favoriteColor(value);


// function genderSelector(params) {
//     if (params == "male") {
//         console.log("Your gender is male");
//     }
//     else {
//         console.log("Your gender is Female");
//     }

// }
// genderSelector("female");

// let params = prompt("Enter number betweem 0 and 1");
// function myGrades(params) {
//     if (params >= 0.8) {
//         console.log("Your grades is A");
//     }
//     else if (params >= 0.7) {
//         console.log("Your grades is B");
//     } else {
//         console.log("Your grades is F");

//     }
// }
// myGrades(params);

// function isLess(a, b) {
//     return a < b;
// }
// console.log(isLess(30, 40));

// function power(a, b) {
//     return Math.pow(a, b);
// }
// console.log(power(2, 5));

// function squareRoot(num) {
//     return Math.sqrt(num);
// }
// console.log(squareRoot(5));

// const myArray = ["A", "B", "C", "D"];
// console.log(myArray[-1]);
// const arrayLength = myArray.length;
// console.log(`My array lenght is ${arrayLength}`);

// console.log(myArray[-1]);

// const users = [
//     {
//         name: "Kalisa",
//         age: 25,
//         location: "Kigali",
//     },
//     {
//         name: "Uwayo",
//         age: 28,
//         location: "Huye",
//     },
//     {
//         name: "Fils",
//         age: 30,
//         location: "Gisagara",
//     }
// ]
// const oneUser = users[1];
// console.log(oneUser.name);


// let params = prompt("Enter a number");
// function myNumber(params) {
//     if (params > 0) {
//         console.log("Your number is POSITIVE");
// }
//     else if (params < 0) {
//         console.log("Your number is NEGATIVE");
//     }
//     else {
//         console.log("Your number is ZERO");
//     }
// }
// myNumber(params);

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// for (let j = 5; j >= 1; j--) {
//     console.log(j);
// }

// for (i = 0; i <= 5; i++) {
//     for (let j = 0; j <= 5; j++) {
//         console.log(i, j)
//     }
// }

// const num = 5;

// for (let i = 1; i <= num; i++) {
//     console.log(i);
// }

// const users = ["AAA", "BBB", "CCC", "DDD"];

// console.log(users.length); // 4
// console.log(users[2]);

// for (let i = 1; i <= users.length; i++) {
//     console.log(i);
// }
// const users = ["AAA", "BBB", "CCC", "DDD"];

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// const country = {
//     name: "Rwanda",
//     population: 13000000,
//     latitude: 29.3,
//     longitude: -1.9,
//     isDeveloped: false
// };

// console.log(country);


// const country = {
//     name: "Rwanda",
//     population: 13000000,
//     continent: "Africa",
//     latitude: 29.3,
//     longitude: -1.9,
//     isDeveloped: false
// };

// const countryJSON = JSON.stringify(country);
// console.log(countryJSON);

// const country = {
//     name: "Rwanda",
//     population: 13000000,
//     continent: "Africa",
//     latitude: 29.3,
//     longitude: -1.9,
//     isDeveloped: false
// };

// const country1 = JSON.stringify(country);

// const country2 = JSON.parse(country1);
// console.log(country2);

// const items = [
//     { name: 'Bike', price: 100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 },
// ];

// console.log(items);

// Array methods


// const arr = [1, 2, 3];

// const newArr = arr.map(num => num * 2);

// console.log(newArr);

// const arr = [
//     { name: "AAA", age: 20 },
//     { name: "BB", age: 22 },
//     { name: "CCC", age: 25 }
// ];

// const newArr = arr.map(item => item.name);

// console.log(newArr)

// const arr = [
//     { name: "AAA", age: 20 },
//     { name: "BB", age: 22 },
//     { name: "CCC", age: 25 }
// ];

// const newArr = arr.map(item => item.age);

// console.log(newArr)

// const items = [
//     { name: 'Bike', price: 100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 },
// ];

// const names = items.map(item => item.name)
// console.log(names);

// const items = [
//     { name: 'Bike', price: 100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 },
// ];

// const itemNames = items.map(item => item.name);

// const itemPrices = items.map(item => item.price);
// console.log(itemPrices);


// const arr = [1, 2, 3, 4, 5, 6];

// const newArr = arr.filter(num => num >3);

// console.log(newArr);


// const arr = [1, 2, 3, 4, 5, 6];
// const newArr = arr.filter(num => num > 4);
// console.log(newArr);

// const items = [
//     { name: 'Bike', price: 100 },
//     { name: 'TV', price: 200 },
//     { name: 'Album', price: 10 },
//     { name: 'Book', price: 5 },
//     { name: 'Phone', price: 500 },
//     { name: 'Computer', price: 1000 },
//     { name: 'Keyboard', price: 25 },
// ];

// const filteredPrices = items.filter(item => item.price > 100);

// console.log(filteredPrices);

// const name = "hello"; // olleh
// const splittedName = name.split(""); // "o", "l", "l", "e", "h"

// // console.log(splittedName);
// const reversed = splittedName.reverse()
// const reversedName = reversed.join("")
// // console.log(reversed);
// console.log(reversedName);

// const name = "ABCDEFG";
// const result = name.split("").reverse().join("");

// console.log(result)


// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// const agesMap = ages.map(num => num * 20);
// console.log(agesMap);


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const agesFilter = ages.filter(num => num > 20);
console.log(agesFilter);







