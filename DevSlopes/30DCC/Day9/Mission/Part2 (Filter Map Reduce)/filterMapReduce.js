//Given the array below, perform the following tasks

var states = ['alaska', 'alabama', 'arkansas', 'missouri', 'texas', 'nevada', 'california'];

//Use filter to only select states that start with 'a'
var statesFilter = states.filter(function(state) {
  return state.startsWith('a');
  // return state.charAt(0) === 'a';
});
console.log(statesFilter);

//Using method chaining use map and reduce each state to 3 characters
//(ie 'nevada' would turn into 'nev')
var statesMap = states
  .map(function(state, index, array) {
    // var splitState = array[index].split();
    // return splitState;
    return state.substr(0, 3);
  });

console.log(statesMap);

//Using method chaining use reduce to add up the count of characters from the remaining words
let statesReduce = statesMap.reduce(function(acc, val) {
  return acc + val;
});

//Print the final result (which will be a number)
console.log(statesReduce.length);