// // challenge 1 ------------------------
// let person = {
//  name: "sloaner",
//  age: 36,
//  country: "Canada"
// };

// function logData() {
//  console.log(`${person.name} is ${person.age} years old and lives in ${person.country}`);
// }

// logData();


// // challenge 2 ------------------------
// let cost = {
// child: 1.50,
// student: 2,
// adult: 3,
// senior: 1.50
// }

// let price = (age) => {
// if ( age < 6 ) {
//  console.log(`The cost for you is $${cost.child}`);
// } else if ( age > 6 && age < 18 ) {
//  console.log(`The cost for you is $${cost.student}`);
// } else if ( age > 18 && age < 67 ) {
//  console.log(`The cost for you is $${cost.adult}`);
// } else {
//  console.log(`The cost for you is $${cost.senior}`);
// }
// };

// price(70);


// challenge 3 ------------------------
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];
// console.log("The 5 largest countries in the world:");
// function countries() {
// for (let i=0; i<largeCountries.length; i++) {
//  console.log(largeCountries[i]);
// }
// }
// countries();


// challenge 4 ------------------------
// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
// largeCountries.pop();
// largeCountries.push("Pakistan");
// largeCountries.shift();
// largeCountries.unshift("China");
// console.log(largeCountries);


// challenge 5 ------------------------
// let dayOfMonth = 13;
// let weekday = "Friday";

// // today = [dayOfMonth, weekday];
// if (dayOfMonth === 13 && weekday === "Friday") {
//  console.log(`spooky!`);
// }


// challenge 6 ------------------------
// let hands = ["rock", "paper", "scissors"];

// let randomPlay = () => {
//  console.log(hands[Math.floor(Math.random()*hands.length)]);
// }
// randomPlay();


// challenge 7 ------------------------
// let fruit = ["apple", "orange", "apple", "apple", "orange", "banana"];
// let appleShelf = [];
// let orangeShelf = [];

// fruit.forEach(sort);

// function sort(item) { 
//   if (item === "apple") {
//    appleShelf.push("apple");
//   } else if (item === "orange"){
//    orangeShelf.push("orange");
//   }
// }
// console.log(appleShelf);
// console.log(orangeShelf);

//  or...

// function sortFruit() {
//  for (let i=0; i<fruit.length; i++) {
//   if (fruit[i] === "apple") {
//    appleShelf.push("apple");
//   } else if (fruit[i] === "orange") {
//    orangeShelf.push("orange");
//  }
// }
// console.log(appleShelf);
// console.log(orangeShelf);
// }

// sortFruit();


// challenge 8 ------------------------
// box = document.getElementById("box");
// box.addEventListener("click", function() {
//   console.log("opened from event listener");
// })


// challenge 9 ------------------------
// container = document.getElementById("container");
// container.innerHTML = "<button id='btn'>Buy!</button>";

// const button = document.getElementById("btn");
// button.addEventListener("click", buy)

// function buy() {
//   const node = document.createElement("p");
//   const textNode = document.createTextNode("Thank you for buying!");
//   node.appendChild(textNode);
//   container.appendChild(node);
// }


// challenge 10 ------------------------
// const recipient = "James";
// const email = `Hey ${recipient}! How is it going? Cheers, Sloan`
// console.log(email);


// challenge 11 ------------------------
// const recipient = "James";
// const sender = "Sloan";
// const email = 
//     `Hey ${recipient}! 
//     How is it going? 
//     Cheers, ${sender}`
// console.log(email);


// challenge 12 ------------------------
// for persisting data across page refresh:
// localStorage.setItem("key", "value")
// console.log(localStorage.getItem("key"));
// localStorage.clear();
// note: both key and value need to be strings


// challenge 13 ------------------------
// let myLeads = `["www.awesomelead.com"]`;
// myLeads = JSON.parse(myLeads);
// let secondLead = "www.secondlead.com";
// myLeads.push(secondLead);
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);


// challenge 14 ------------------------
// what are the 5 falsy values?
// 0
// ""
// null       -> primitive. how a developer signifies emptiness 
// undefined  -> primitive. how Javascript signifies emptiness
// NaN


// challenge 15 ------------------------
// console.log(Boolean(""));     // false
// console.log(Boolean("0"));    // true
// console.log(Boolean(100));    // true
// console.log(Boolean(null));   // false
// console.log(Boolean([0]));    // true
// console.log(Boolean(-0));     // false


// challenge 16 ------------------------
// function greetUser(greeting, user) {
//   console.log(`${greeting}, ${user}!`)
// };

// greetUser("what's up", "Sloany");


// challenge 17 ------------------------
// function add(num1, num2) {
//   let result =num1 + num2;
//   return result;
// }

// console.log(add(5,10));


// challenge 18 ------------------------
// params when defining variables between parantheses when declaring a function
// arguments when we pass in values into the function when we invoke the function

// challenge 19 ------------------------
// arrays as parameters
// function getFirst(arr) {
//   return arr[0];
// }

// let array = [1,2,3,4,5];
// console.log(getFirst(array));


// challenge 20 ------------------------
// if (hasWon) {
//  console.log(`${player} got ${points} points and won the ${game} game!`);
// } else {
//  console.log(`The winner is ${opponent}! ${player} lost the game.`);
// };


// challenge 21 ------------------------
// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];
// function course(array) {
//  for (let i=0; i<array.length; i++) {
// console.log(array[i]);
// }};
// course(myCourses);


// challenge 22 ------------------------
// localStorage.setItem("key", "value");
// console.log(localStorage.getItem("key"));
// localStorage.clear();


// challenge 23 ------------------------
// let data = [
//  {
//   player: "Jane",
//   score: 52
//  },
//  {
//   player: "Mark",
//   score: 41
//  }
// ];

// const btn = document.getElementById("button");
// btn.addEventListener("click", function() {
//  console.log(data[0].score);
// });



// challenge 24 ------------------------
// function generateSentence(desc, arr) {
//  let baseString = `The ${arr.length} ${desc} are `
//  const lastIndex = arr.length - 1;
//  const secLastIndex = arr.length - 2;
//  for (let i=0; i<arr.length; i++) {
//   if (i=== lastIndex) {
//    baseString += arr[i];
//   } else if (i=== secLastIndex) {
//    baseString += `${arr[i]} and `  ;
//   } else {
//   baseString += `${arr[i]}, `
//   }
//  }
//  return baseString;
// };
// console.log(generateSentence("best video games", ["Red Dead", "FF7", "Last of Us"]));
//-> The 3 best video games are Red Dead, FF7 and Last of Us


// challenge 25 ------------------------
const imgs = [
 "thing1.jpg",
 "thing2.jpg",
 "thing3.jpg",
];

const container = document.querySelector("container");

function renderImages(arr) {
 let imgsDOM = "";
 for (let i=0; i<arr.length; i++) {
  imgsDOM += `<img alt="employee in the company" class="team-img" src="${arr[i]}`;
 }
 container.innerHTML = imgsDOM;
};
renderImages(imgs);