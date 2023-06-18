//Exercise: String Sum

// Create a function that takes a String as a parameter.

// Return the sum of any integers that are in the string.

// Example:

// Given "GH2U87A" you would return the value 17 (2 + 8 + 7).

// If there are no numbers in the string return 0.

// Post your solution in the #missions channel of the chatroom

//if string does not contain a number
//return 0
//if string contains
//else

var stringCode = "GH2U87A";
var stringCodeNoNums= "FJFKEORO";

  function stringSum(str) {
    const stringNums = str.match(/[0-9]/g)
  if (stringNums !== null){
     const int = stringNums.map( i => (parseInt(i)));
     const sum = int.reduce((acc, val) => acc + val);
     return sum;
   }
    else {
      return '0';
    }
 }


console.log(stringCode.includes(8));
console.log(stringCode[stringCode.indexOf(8)]);
console.log(stringCode.match(/[0-9]/g));
console.log(stringSum(stringCode));
console.log(stringSum(stringCodeNoNums));