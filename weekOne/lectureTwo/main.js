// explain difference of var, let, const

// var
// var a = 1;
// var a = 2;
// console.log(a); // 2

// let
// let b = 1;
// let b = 2; // SyntaxError: Identifier 'b' has already been declared
// console.log(b);

// const
// const c = 1;
// const c = 2; // SyntaxError: Identifier 'c' has already been declared
// console.log(c);

// const
// const d = 1;
// d = 2; // TypeError: Assignment to constant variable.
// console.log(d);

// explain the difference of var, let, const in for loop

// var
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }
// console.log(i); // 3

// let
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }
// console.log(i); // ReferenceError: i is not defined

// const
// for (const i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

// explain the difference of var, let, const in function

// var
// function foo() {
//   var a = 1;
//   var a = 2;
//   console.log(a); // 2
// }
// foo();
// console.log(a); // ReferenceError: a is not defined

// let
// function foo() {
//   let b = 1;
//   let b = 2; // SyntaxError: Identifier 'b' has already been declared
//   console.log(b);
// }
// foo();
// console.log(b); // ReferenceError: b is not defined

// const
// function foo() {
//   const c = 1;
//   const c = 2; // SyntaxError: Identifier 'c' has already been declared
//   console.log(c);
// }
// foo();
// console.log(c); // ReferenceError: c is not defined

// const
// function foo() {
//   const d = 1;
//   d = 2; // TypeError: Assignment to constant variable.
//   console.log(d);
// }
// foo();
// console.log(d); // ReferenceError: d is not defined  

// explain the difference of var, let, const in block

// var
// {
//   var a = 1;
//   var a = 2;
//   console.log(a); // 2
// }
// console.log(a); // 2

// let
// {
//   let b = 1;
//   let b = 2; // SyntaxError: Identifier 'b' has already been declared
//   console.log(b);
// }
// console.log(b); // ReferenceError: b is not defined

// const
// {
//   const c = 1;
//   const c = 2; // SyntaxError: Identifier 'c' has already been declared
//   console.log(c);
// }
// console.log(c); // ReferenceError: c is not defined

// explain the difference of var, let, const in if statement

// var
// if (true) {
//   var a = 1;
//   var a = 2;
//   console.log(a); // 2
// }
// console.log(a); // 2

// let
// if (true) {
//   let b = 1;
//   let b = 2; // SyntaxError: Identifier 'b' has already been declared
//   console.log(b);
// }
// console.log(b); // ReferenceError: b is not defined

// const
// if (true) {
//   const c = 1;
//   const c = 2; // SyntaxError: Identifier 'c' has already been declared
//   console.log(c);
// }
// console.log(c); // ReferenceError: c is not defined

// explain the difference between function declaration and function expression

// function declaration
// function foo() {
//   console.log('foo');
// }
// foo(); // foo

// function expression
// var foo = function() {
//   console.log('foo');
// }
// foo(); // foo

// explain the difference between arrow function and function expression

// function expression
// var foo = function() {
//   console.log('foo');
// }
// foo(); // foo

// arrow function
// var foo = () => {
//   console.log('foo');
// }
// foo(); // foo

// explain the difference between arrow function and function declaration

// function declaration
// function foo() {
//   console.log('foo');
// }
// foo(); // foo

// arrow function
// var foo = () => {
//   console.log('foo');
// }
// foo(); // foo



