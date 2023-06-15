//DAY 10

var japaneseCartoons = [
  'Sonic X',
  'PowerPuff Girls Z',
  'Kimetsu No Yaiba',
  'Dragon Ball',
];

userSavedJapaneseCartoons = [];

for (var i = 0; i < japaneseCartoons.length; i++) {
  console.log(japaneseCartoons[i]);
};

// 0 < 3 = true; 0 + 1 = 1
// 1 < 3 = true; 1 + 1 = 2
// 2 < 3 = true; 2 + 1 = 3
// 3 < 3 = false;

var toDos = [
  { title: 'Item 1', completed: true },
  { title: 'Item 2', completed: false },
  { title: 'Item 3', completed: false },
  { title: 'Item 4', completed: true },
];

var completedItems = [];

for (var x = 0; x < toDos.length; x++) {
  if (toDos[x].completed) {
    completedItems.push(toDos[x]);
  }
}

var bottles = 99;

while (bottles > 0) {
  if (bottles !== 1) {
    console.log(bottles + ' bottles of stuff on the wall ');
  }
  else { console.log(bottles + ' bottle of stuff on the wall '); }
  bottles -= 1;
}




console.log(toDos);
console.log(completedItems);

//Loops Part 2

var total = 10;
for (var x = 0; x < total; x++) {
  //Iterate until told not to
  console.log(x);
};


var students = ["John", "Jacob", "Jingle", "Heimer", "Smith"];

for (var index = 0; x < students.length; x++){
  console.log(students[index]);
};


//Arrray.foreach
// forEach() calls a provided callback function once for each element in an array in ascending index order. It is not invoked for index properties that have been deleted or are uninitialized.

// callback is invoked with three arguments:

// 1. the value of the element
// 2. the index of the element
// 3. the Array object being traversed


// If a thisArg parameter is provided to forEach(), it will be used as callback's this value. The thisArg value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

// The range of elements processed by forEach() is set before the first invocation of callback. Elements which are appended to the array after the call to forEach() begins will not be visited by callback. If existing elements of the array are changed or deleted, their value as passed to callback will be the value at the time forEach() visits them; elements that are deleted before being visited are not visited. If elements that are already visited are removed (e.g. using shift()) during the iteration, later elements will be skipped.\

// forEach() executes the callback function once for each array element; unlike map() or reduce() it always returns the value undefined and is not chainable. The typical use case is to execute side effects at the end of a chain.

// forEach() does not mutate the array on which it is called. (However, callback may do so)

//Example

let ratings = [5, 4, 5];
let sum = 0;

let sumFunction = async function (a, b)
{
  return a + b
}

ratings.forEach(async function(rating) {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0

//Multi-Dimensional Arrays
// An array within an array is called a multidimensional array. You can have as many layers of arrays as you like, but it can become complicated very quickly.

// The easiest way to create one is to use the array literal notation.

// let activities = [ ];

// let activities = [
//     ['Work', 9],
//     ['Eat', 1],
//     ['Commute', 2],
//     ['Play Game', 1],
//     ['Sleep', 7]
// ];

// console.table(activities);



// ┌─────────┬─────────────┬───┐
// │ (index) │      0      │ 1 │
// ├─────────┼─────────────┼───┤
// │    0    │   'Work'    │ 9 │
// │    1    │    'Eat'    │ 1 │
// │    2    │  'Commute'  │ 2 │
// │    3    │ 'Play Game' │ 1 │
// │    4    │   'Sleep'   │ 7 │
// └─────────┴─────────────┴───┘

// To access an element you use square bracket notation:

// console.log(activities[0][1]); // 9

// To add elements to a multidimensional array:

// activities.push(['Study',2]);

// console.table(activities);

// ┌─────────┬─────────────┬───┐
// │ (index) │      0      │ 1 │
// ├─────────┼─────────────┼───┤
// │    0    │   'Work'    │ 9 │
// │    1    │    'Eat'    │ 1 │
// │    2    │  'Commute'  │ 2 │
// │    3    │ 'Play Game' │ 1 │
// │    4    │   'Sleep'   │ 7 │
// │    5    │   'Study'   │ 2 │
// └─────────┴─────────────┴───┘