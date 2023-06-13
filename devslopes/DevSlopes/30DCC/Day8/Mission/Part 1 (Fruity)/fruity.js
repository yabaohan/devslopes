// Given the array below, perform the following tasks:
// - Remove 'orange' from the array
// - Then remove the last item from the array
// - Then insert 'pear' at the beginning of the array
// - Then remove all elements from the array

var fruit = ["apple","banana","orange","strawberry"];
console.log(fruit);
//finds index of orange in fruit list
var index = fruit.indexOf("orange");
console.log(`Orange is located at index ${index}`);
//removes orange from fruit list in place
if (index > -1){
    fruit.splice(index,1);
}
//Mutated fruit list
console.log(fruit);

//Removes last item in array (strawberry)
fruit.pop();
console.log(fruit);

//inserting pear at beginning of array
fruit.unshift('pear');
console.log(fruit);

//Removing all elements in an array
fruit.splice(0,fruit.length);
console.log(fruit);