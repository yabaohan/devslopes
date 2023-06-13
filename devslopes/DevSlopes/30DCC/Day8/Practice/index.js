//Javascript Arrays
var tvShows = ['Breaking Bad' , 'Kimetsu No Yaiba' , 'Food Wars'];

var userSavedMovies = [];

userSavedMovies.push('Ironheart');
userSavedMovies.push('My Own Private Idaho');
userSavedMovies.push('Kingdom Hearts');

userSavedMovies.pop();
console.log(userSavedMovies);

//Javascript Arrays Part 2

 var students =['Hans', 'Jordan','Elmer'];
 console.log(students);

 var naughtyList = [];
 naughtyList.push(students[0]);

 console.log('before splice: ' + naughtyList);
 var index = naughtyList.indexOf("Hans");

 
 if(index > -1){
    naughtyList.splice(index, 1);
 }
//splice not good for going through list, better for storing data...?
console.log('after splice: ' + naughtyList);

//ES6 Arrays
//Arrays are like a list. There are multiple values stored inside a single variable
//Arrays are declared with square brackets.

let grades = [92, 98 , 84, 87, 93];
//template literal in console.log. You use back tick `
console.log(`My first grade was ${grades[0]}`);

let myStuff =  ['baseball' ,'football' , true, 32, 'Magic Mouse'];
console.log(myStuff.length);

//Array Methods
//POP
let poppedValue = myStuff.pop();

console.log(poppedValue);
console.log(myStuff);

//Push
myStuff.push(poppedValue);
console.log(myStuff);

grades.push(34);
console.log(grades);

//Shift
let shiftedValue =myStuff.shift();
console.log(shiftedValue);
console.log(myStuff);

myStuff.unshift(shiftedValue);
console.log(myStuff);

//Concat
let array1 = [1,3,2];
let array2 = [4,6,5];

let concatArray = array1.concat(array2);
console.log(concatArray);

let array3 = [7,8,9];
let concatArray2 = array1.concat(array2,array3);
console.log(concatArray2);

//Reverse
let reversedArray = concatArray2.reverse();
console.log(reversedArray);

//Sort
let sortedArray = concatArray2.sort();
console.log(sortedArray);

let states = ['Missouri' , 'Arkansas' , 'Arizona' ,'Mississippi' , 'Alabama', 'Birmingham', 'New Jersey'];
let sortedStatesArray = states.sort();
console.log(sortedStatesArray);

let numericArray = [45,34, 14 ,94, 1294];
let numericArray2 = [94,4,21,12,69,32,4,2,14,59]
// AS6 Fat arrow
let sortedNumericArray = numericArray.sort(function(a,b) {
return a-b;
});

let sortedNumericArray2 = numericArray2.sort((a,b) => a-b);

console.log(sortedNumericArray);
console.log(sortedNumericArray2);

//SLICE
//SLice allows you to 'Pull Out' a part of an array. 
//It takes two values, the start and end index. The method will return all values from the start index
//Up to, BUT NOT INCLUDING, the end index.
let slicedStates = sortedStatesArray.slice(2,5);
console.log(slicedStates);