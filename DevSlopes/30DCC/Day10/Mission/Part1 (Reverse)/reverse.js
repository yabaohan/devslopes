// given the array below, perform the following tasks

var words = ["ant", "awkward", "car", "zebra"];

//reverse the array using the built-in reverse function
wordsReverse = words.reverse();
console.log(words);
//reverse the array again, but use a loop instead without a built-in function
wordsReverseReverse = [];
for ( i = words.length - 1; i >=0; i--  )
  {
    wordsReverseReverse.push(wordsReverse[i]);
  };
console.log(wordsReverseReverse);
