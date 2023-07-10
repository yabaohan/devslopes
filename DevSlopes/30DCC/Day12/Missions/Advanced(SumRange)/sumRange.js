//Create a function that takes in an array of 2 numbers as a parameter
//Return the sum of those two numbers, plus all the numbers in between
//Done without any built-in functions
function sumRange (val1,val2){
    var sum = 0;
    if(val1 > val2){
        for (let i = val2; i <= val1; i++){
            sum += i;
        }
        return sum;
    } else if (val1 < val2) {
        for (let i = val1; i <= val2; i++) {
            sum+=i;
        }
        return sum;
    } else {
        return val1 +val2;
    }
};

let val1 = 5;
let val2 = 7;

console.log(`The sum of ${val1} and ${val2} plus all numbers in between are ${sumRange(val1, val2)}`);

