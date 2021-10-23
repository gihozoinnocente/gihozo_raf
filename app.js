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
// const agesMap = ages.map(num => num * 20);n
// console.log(agesMap);

// 
// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// const agesFilter = ages.filter(num => num > 20);
// console.log(agesFilter);

// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Tech", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Tech", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// console.log(companies.length);
// console.log(companies[4]);

// const company4 = companies[4];
// console.log(company4.name)

// console.log(`${company4.name} started in ${company4.start} and ended in ${company4.end}`)
// const companyName = companies.filter(item => item.name == "Finance");
// console.log(companyName);

// const techCompany = companies.filter(company => company.tech)
// const myArr = [
//     { name: "AAA", age: 20 },
//     { name: "BBB", age: 21 },
//     { name: "AAA", age: 22 },
//     { name: "BBB", age: 23 },
//     { name: "CCC", age: 24 },
//     { name: "DDD", age: 25 }
// ];

// // const namesArr = myArr.filter(item => item.name);
// const namesArr = myArr.filter(item => item.name === "AAA")

// console.log(namesArr);

// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// const techCompanies = companies.filter(item => item.category === "Finance");

// console.log(techCompanies);

// const displayDate = () => {
//     let currentTime = new Date();

//     let time = `${currentTime.getFullYear()}-${currentTime.getMonth()}-${currentTime.getDate()}`;

//     document.getElementById("showDate").innerHTML = `${currentTime}`;
// }


// function switchInStatement(val) {
//     let answer = "";
//     switch (val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         case 4:
//             answer = "delta";
//             break;
//     }

//     return answer;
// }

// console.log(switchInStatement(1));

// const BMI = () => {
//     const height = document.getElementById('h').value;
//     const weight = document.getElementById('w').value;
//     const bmiValue = weight / ((height / 100) * (height / 100));
//     console.log(bmiValue);
//     // document.getElementById('result').innerHTML = `Your BMI is ${bmiValue}`;



//     if (bmiValue < 21) {
//         document.getElementById('result').innerHTML = `Your BMI is ${bmiValue}. You are under weight.`;
//     } else if (bmiValue < 24) {
//         document.getElementById('result').innerHTML = `Your BMI is ${bmiValue}. You are healthy.`;
//     }
//     else {
//         document.getElementById('result').innerHTML = `Your BMI is ${bmiValue}. You are over weight.`;

//     }
// }
// const personOne = {
//     name: "Kyle",
//     age: 24,
//     address: {
//         city: "Kigali",
//         district: "Gasabo"
//     }
// };

// const { name, age, address } = personOne;

// console.log(name);

// const country = {
//     name: "Rwanda",
//     population: 13000000,
//     continent: "Africa",
//     latitude: 29.3,
//     longitude: -1.9,
//     isDeveloped: false
// };

// const { name, population, continent, latitude, longitude, isDeveloped } = country;
// console.log(continent);
// console.log(isDeveloped);


// const title = document.querySelector('.bmiCalc'); // for class
// const title = document.querySelector('#bmiCalc'); // for id
// const title = document.getElementById('calTitle');
// const title = document.getElementByClassName('calTitle');

// console.log(title);

// const arr = [1, 2, 3, 4];

// arr.forEach(item => console.log(item));

// map()
// filter()
// forEach()



// const companies = [
//     { name: "Company One", category: "Finance", start: 1981, end: 2003 },
//     { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
//     { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
//     { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
//     { name: "Company Five", category: "Tech", start: 2009, end: 2014 },
//     { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
//     { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
//     { name: "Company Eight", category: "Tech", start: 2011, end: 2016 },
//     { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
// ];

// companies.forEach(item => console.log(companies));

const myArr = ["Anna", "Kaliza", "Kalisa", "Jeanne", "Gladys"];
myArr.forEach(item => console.log(item));