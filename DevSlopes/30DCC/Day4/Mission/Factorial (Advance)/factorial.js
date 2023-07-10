//ADVANCED: FACTORIAL
console.log('\n-------------------------------\n\nAdvanced:Factorial\n');


// Return the factorial of an integer.
function factorial(p){
    if (p === 0 || p === 1){
        return 1;
    }
    else if ( p > 0 && Number.isInteger(p)) {
        return p * factorial(p-1);
    } else {
        return "Input should be a non-negative interger.";
    }
}

//testing

let numbers = [5, 14 , 54, 35 , 2, 4, 5];

for (let i = 0; i < numbers.length; i++){
    console.log(`The factorial of ${numbers[i]} is ${factorial(numbers[i])}`);

}

        


