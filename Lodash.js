const _ = require("lodash");

// Lodash is a versatile utility library that offers a wide range of useful functions for manipulating arrays, objects, strings, and other data structures.
// Below I have provided some examples on how lodash can be used!

//again, for reading purposes
console.log(" ");

// Here i used the .map function in lodash to take the string of numbers provided and run it through an equation that doubles each number. it then puts them into the doubleNumbers constant which is finally console logged
const numbers = [5, 10, 25, 50, 100];
const doubledNumbers = _.map(numbers, (num) => num * 2);
console.log(doubledNumbers);

//Here i used the .join function in lodash to link up multiple instances in a string with "-"
const list = _.join(["a", "b", "c", "d", "e", "f", "g"], "-");
console.log(list);

// Here I use the .compact function to remove any "falsey" values in the list and keep the valuse that are valid. falsey values include false, null, 0, "", undefined, and NaN
const compact = _.compact([0, 5, null, 6, false, 7, "", 8, NaN, 9]);
console.log(compact);

const initial = _.initial([
  "Ill be logged",
  "Ill be logged aswell!",
  "I won't be logged :(",
]);
console.log(initial);

//look at that, another reading purpose console.log WOOHOO!
console.log(" ");
