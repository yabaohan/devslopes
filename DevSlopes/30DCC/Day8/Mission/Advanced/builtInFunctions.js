//Given the array below, change each element in the array to all upper case - must be done with one line of ode and without using
//bracket notation;

var colors = ['blue','red','green','yellow','black', 'white'];

console.log(colors.map(color => color.toUpperCase()));

//Given the array below, using the 'every' function determine if each item in the aray is greater than zero.
var numbers = [-1,-2,20,60,77];

greaterThanZero = number => number > 0;
console.log(numbers.every(greaterThanZero))
