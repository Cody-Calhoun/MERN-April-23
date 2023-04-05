// // strings
// var str = "Hello World's best student's said 'John Doe'";

// var anotherStr = 'Hello World\'s best students';

// var aThirdStr = `One time ${str}`

// console.log(aThirdStr);

// // numbers
// var num = 1;

// var float = 1.1;

// console.log(num + float);

// // booleans
// var bool = true;

// // arrays
// var arr = [1, "unicorn", 3];

// console.log(arr[1]);

// // objects
// var obj = {
//     name: "John",
//     age: 30
// };

// // console.log(obj.name);
// console.log(obj.age);
// console.log(obj["name"]);

// // undefined
// var undef = undefined;

// // null
// var nul = null;



// Create an array with 5 itmes
var arr = [1, 2, 3, 4, 5];

// var firstValue = arr[0]

// destructure first element of array
var [first] = arr;

// destructure second element of array
var [, second] = arr;

// destructure third element of array
var [, , third] = arr;

console.log(third)

// use rest operator to get remaining elements
var [, , , ...rest] = arr;

// use spread operator to combine arrays
var arr2 = [...arr, 6, 7, 8];

// console.log(arr2);




// Create an object with 3 properties
var obj = {
    name: "John",
    age: 30,
    city: "New York"
};

// destructure name property
var { name:firstName, city } = obj;
console.log(city, firstName);

console.log(obj)
