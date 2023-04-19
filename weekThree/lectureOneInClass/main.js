// Higher Order Functions and Call back functions
// Higher Order Function is a function that takes a function as an argument or returns a function
// Call back function is a function that is passed as an argument to another function

// Base Functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
    return a * b;
    }

function divide(a, b) {
    return a / b;
    }

function calculator(a, b, operator1, operator2) {
  //return subtract(10,5)
  let x = operator1(a, b);
  let y = operator2(a, b);
  console.log(x ,y)
    return null;
}

// calculator(10, 5, add, multiply);

// calculator(10, 5, subtract, divide);


// .map() Higher Order Arrow Function Example
// .map() is a higher order function that takes a function as an argument
// .map() is used to iterate over an array and return a new array


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(number => number * 2);

// console.log(doubledNumbers);

// .filter() Higher Order Arrow Function Example
// .filter() is a higher order function that takes a function as an argument

// const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers);


//array.ptototype.map() definition
// Array.prototype.map = function(callback) {
//   const newArray = [];
//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callback(this[i], i, this));
//   }
//   return newArray;
// };

// array.prototype.length definition
// Object.defineProperty(Array.prototype, 'length', {
//   get: function() {
//     return this._length;
//   },
//   set: function(value) {
//     this._length = value;
//     this.length = value;
//   }
// });










// .map() and .filter() Higher Order Arrow Function Example
// .map() and .filter() are higher order functions that take a function as an argument

// const numbers = [2,4,5,34,18,79];

// const doubledEvenNumbers = numbers.filter(number => number % 2 === 0).map(number => number * 2).filter(number => number > 26);

// console.log(doubledEvenNumbers);




