// Given the array below, perform the following tasks

var nums = [2,3,4,5,6,7,8,9,10,11,12];

//create a variable named evenTotal
var evenTotal = 0;

//Write code that loops through the nums array, adds only the even numbers, and stores the final result in the evenTotal

for (i = 0 ; i < nums.length; i+=2){
   evenTotal += nums[i];
};

//you also could've written the for loop like this
// for (i = 0; i < nums.length; i++){
//   if(nums[i] % 2 === 0) {
//     evenTotal += nums[i];
//   }
// }
console.log(evenTotal);