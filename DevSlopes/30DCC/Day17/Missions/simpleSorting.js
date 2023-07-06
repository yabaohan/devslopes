
// Part 1: Simple Sorting

// Create a function that takes an array of numbers.
// Sort the numbers from lowest to highest (ascending)
// Use built-in functionality to sort the array.
const holla = [14, 2, 1, 12];

const sortNum = numArray => numArray.sort((a, b) => a - b);
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done
// with the sort order of the two values.
console.log(sortNum(holla));

