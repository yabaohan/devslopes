//Part 1
//Build a function that can take any number as a parameter and then return the sum of all digits
//within that number
//Example, passing number 412 would return 7

function Digits(num){
    let sum = 0;

    while (num > 0){
        // Get the rightmost digit using modulo
        const digit = num % 10;
        //Add the digit to the sum
        sum+=digit;
        //Remove the rightmost digit from the number
        num = Math.floor(num/10);
    }
    
    return sum;
}

let num = 412;
console.log(412 % 10);
console.log(Digits(num));