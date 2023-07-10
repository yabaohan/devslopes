//Write a function that returns the total count of integers that are not multiples of either 6 or 15 between a range of 1 and 200
function unMultiple (value1,value2){
    var count = 0;
    for (var i = 1; i <= 200; i++)
    {
        if ((i % value1 != 0) && (i % value2 != 0)){
            count++
        }
    }
    return count;
}


var num1 = 6;
var num2 = 15;
console.log(`The total number of integers between 1 and 200 that are not multiples of ${num1} and ${num2} is ${unMultiple(num1,num2)}`);