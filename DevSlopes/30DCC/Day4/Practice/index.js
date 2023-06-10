//DAY 4 Practice
//NUMBERS PART 1
var totalUsers = 42;
var purchase = 46.99;

var sciNotPos = 123e5;
var sciNotNeg = 123e-5;

//Adding decimals together will output 17 digit decimal, if you multiply and divide by 10, you will get the intended decimal
var numVal = (0.1 * 10 + 0.2 * 10) / 10;


var mod = 128 % 5;

//You can write numbers in strings
// ex. 10 * '5' would output 50 numbeer
// ex 10 + '5' would output 105

//JAVASCRIPT IS ACCURATE UP TO 15 DIGITS

console.log('"NUMBERS PART 1" \n-------------------------------')

console.log(sciNotPos);
console.log(mod);
console.log(numVal);

//NUMBERS PART 2
var sum = 27 + 9;
var sub = 40 - 5;
var mul = 8 * 5;
var div = 12 / 3;
var mod = 10 % 3;

console.log('"NUMBERS PARTS 2" \n-------------------------------')

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);

//NUMBER METHODS
console.log('"NUMBER METHODS" \n-------------------------------')
//toFixed() - returns a numeric string, with the number of specified decimals. GOOD FOR MONEY CONVERSIONS
//Number() - converts JS variable into a number
//parseInt() - parses a string and returns a WHOLE number. Only the first number
//parseFloat() - parses a string and returns a number. Only the first number is returned

const x = 10.46547897984651321321654;
const y = '45';
//if there's a word blocking a number at the beginning of the string, output would be NAN
const z = "30 days later...";
const xy = "290.5 lbs today"


console.log(x.toFixed(3));
console.log(Number(y));
console.log(parseInt(z));
console.log(parseFloat(xy));

//OPERATORS
//THERE ARE 3 TYPES OF OPERATORS
//TERNARY,BINARY, UNARY OPERATORS





console.log('"OPERATORS" \n-------------------------------')
//OPERATORS ARE USED TO ASSIGN VALUES, COMPARE VALUES. PERFORM ARITHMETIC OPERATIONS AND MORE


//One Ternary Operator
//condition ? expr1 : expr2 // expr1 will be evaluated if condition is tru, otherwise expr2 will be evaluated. this takes 3 operands

//Binary operators require two operands
// 1 + 2
// a + b

//Unary Operators
//Requires one operand before or after the operator

let a = 1;
console.log(a++); //prints '1' and THEN INCREMENTS BY 1
console.log(a);
console.log(++a); //increments and THEN PRINTS VALUE

//ARITHMETIC OPERATORS - + * / % take numerical values or variables and return one numerical values.

let total = 32 + 46 - 13; //65
let product = 5 * 5; // 25
console.log(total);
console.log(product);

//Equality checks for equal value
console.log(3 == '3');
//Strict Equality checks for equal value and type
console.log(3 === '3');

let firstName = 'Jack';
let lastName = 'Davis';

console.log(firstName + ' ' + lastName);

console.log(25 % 5);
// ----------------------------------------