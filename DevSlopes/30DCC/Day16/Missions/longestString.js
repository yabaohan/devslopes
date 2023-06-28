// Write a function that accepts an array of strings. Return the longest string

function longestString (array) {

  let longestWord = "";

  for (let word of array){
    if (word.length > longestWord.length){
      longestWord = word;
    }
  }
  return longestWord;
}

arr = ['Hans', 'Elmer', 'Jennifer'];

console.log(`The longest string is ${longestString(arr)}`);