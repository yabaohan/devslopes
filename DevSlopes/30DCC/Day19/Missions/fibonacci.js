//Create a function that takes a parameter named num.Return the sum of all odd 
//Fibonacci numbers that are less than or equal to num.
/*

 The first two numbers in the Fibonacci sequence are 1 and 1. 
 Every additional number in the sequence is the sum of the two previous numbers.
 The first six numbers of theFibonacci sequence are 1, 1, 2, 3, 5 and 8.

 For example, if you pass in 10 the function should return
  10 because all odd  Fibonacci numbers less than or equal to 10 are 1, 1, 3, 
  and 5.

  Return the sum of all odd Fibonacci numbers that are less than or equal to num.

  https://www.mathsisfun.com/numbers/fibonacci-sequence.html 

*/
const num = 21;
const sumFibonacci = (num) => {
    let makeFib = [];
    let n1 = 1;
    let n2 = 0;
    let sum;

    for (let i = 0; i <=  num; i++){
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
        makeFib.push(n2);
    }
    console.log(makeFib);
    console.log(makeFib.filter((a) => a % 2 && a <= num));
    return makeFib
        .filter((a) => a % 2 && a <= num)
        .reduce ((a,b) => a + b);
}

console.log('fib ' + sumFibonacci(num));
 





