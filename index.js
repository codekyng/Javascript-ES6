// Use Arrow Functions to Write Concise Anonymous Functions

//In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

//To achieve this, we often use the following syntax:

// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }

//ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

// const myFunc = () => {
//   const myVar = "value";
//   return myVar;
// }

//When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";

//This code will still return the string value by default.

// const yearsUntilRetirement = (birthYear, firstname) => {
//     const age = 2040 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstname} retires in ${retirement} years`;
// }

// yearsUntilRetirement(1991, "Isaac");

// OBJECTS
// A method a function thats attached to an object
// const isaac = {
//     firstName: "Isaac",
//     lastName: "Wanger",
//     birthYear: 1991,
//     job: "developer",
//     friends: ["John", "Jane", "Joan"],

//     // Method
//     calcAge: function() {
//         return 2037 - this.birthYear;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge} year old ${this.job}.`
//     }


// }

// GUESS MY NUMBER GAME
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
  
    // When there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔️ No number!';
      displayMessage('⛔️ No number!');
  