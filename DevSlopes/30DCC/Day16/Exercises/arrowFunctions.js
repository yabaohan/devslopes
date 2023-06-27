//Write an arrow function that returns the string "Hello Radness"

helloRadness = () => {
    return "Hello Radness";
}

//OR

helloRadnessShort = () => "Hello Radness with less typing";

console.log(helloRadness());
console.log(helloRadnessShort());

// Write an arrow function that expects an array of integers,
// and returns the sum of the elements of the array. 
// Use the built-in method reduce() on the array argument.

const array1 = [1,2,3,4,5];
const sumArray = (arr) => {
    let result = arr.reduce((acc,curr) => acc + curr)
    return result;
}



    console.log(sumArray(array1));
