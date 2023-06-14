//Given the Arrays Below, perform teh following tasks:

var odds = [5, 8, 14, 13, 29, 98];
var evens = [11, 6, 2, 87, 43, 22, 104];
//Use filter function onn the odds array to only store odd numbers
var filterOdds = odds.filter((n) => n % 2 === 1);
console.log(filterOdds);
//Use filter function on the evens array to only store even numbers
var filterEvens = odds.filter((n) => n % 2 === 0);
console.log(filterEvens);
//Add numbers of both arrays and store results in a variable and print it

var filterSum = filterOdds.concat(filterEvens).reduce(function(accumulator , currentValue){
  return accumulator + currentValue;
} , 0);
console.log(filterSum);