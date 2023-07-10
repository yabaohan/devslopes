const { it } = require("node:test")

//Part 1
// Create a string variable and assign a value to it
// Create a second string variable and assign a value to it
// Using built-in functionality, write code to determine if the second string
// contains any portion of the first string.

var name1 = 'Hans';
var name2 = 'Brayan';

let contain = name2.includes(name1);
console.log(contain);    




//Part 2
// Without using built-in functionality, write code to determine whether the second string contains any portion of the first string

// function stringWithinString (str1, str2){

//   for (i = 0; i >= str2.length-1; i )
  
// }

let contains = false;

for (let i = 0; i <= name2.length - name1.length; i++)
{
    for (let j = 0; j < name1.length; j++)
    {
        if (name2 [i+j] !== name1[j]) {
            break;
        }
        if (j === name1.length - 1){
            contains = true;
        }
    }
    if (contains) break;
}

console.log(`These two strings are ${contains}`);
