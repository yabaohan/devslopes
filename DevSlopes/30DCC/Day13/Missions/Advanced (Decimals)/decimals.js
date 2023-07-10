// You are going to Create a terminal-based calculator program using Node.
// Handle remainders properly (modulo).
//  Example : 9 divided by 4 would  print 2.25 
 
//  Make the program more elegant by allowing the user to enter an entire  operation on one line such as: ‘’6 / 6’’ or ‘’5 * 3’’ 
//  (Hint use arguments to  solve this)1. 2.Resources for help: https://www.w3schools.com/nodejs/ref_readline.asp 
// https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/ https://www.codecademy.com/articles/getting-user-input-in-node-js  

var rs = require('readline-sync');

var validResponse = false;
var oneLiner = false;
var userOp = "";
var oneLineIndex = 0;
var answer = 0;
var error = false;

while (!validResponse){
    console.log("Type an entire operation on one line such");
    console.log("as 6/6, 5*3 or just choose an operator below.");
    console.log("/, *, -, +, or % (Division w/ remainder)");
    userOp = rs.question('What operation would you like to perform? ');
    if (userOp === "/" || userOp === "*" || userOp === "-" || userOp === "+" || userOp === "%") {
        validResponse = true;
    } else if (userOp.includes("/") || userOp.includes("*") || userOp.includes("-") || userOp.includes("+") || userOp.includes("%")){
        validResponse = true;
        oneLiner = true;
    } else{
        console.log("That is not a valid operation.");
    }
}

if (!oneLiner){
    var value1 = rs.questionFloat("Please enter the first number: ");
    var value2  = rs.questionFloat("Please enter the second number: ");
} else {
    if (userOp.indexOf("/") != -1 ) {
        oneLineIndex = userOp.indexOf("/");
    } else if (userOp.indexOf("*") != -1 ) {
        oneLineIndex = userOp.indexOf("*"); 
} else if (userOp.indexOf("-") != -1 ) {
    oneLineIndex = userOp.indexOf("-");
} else if (userOp.indexOf("+") != -1 ) {
    oneLineIndex = userOp.indexOf("+");
} else if (userOp.indexOf("%") != -1 ) {
    oneLineIndex = userOp.indexOf("%");
}

value1 = parseFloat(userOp.slice(0,oneLineIndex));
value2 = parseFloat(userOp.slice(oneLineIndex+1));
userOp = userOp[oneLineIndex];
}

switch (userOp){
    case "/":
        if(value2 === 0) {
            error = true;
            console.log("Sorry, youb can't divide by 0!");
        } else {
            answer = value1 /value2;
        }
        break;
        case "*":
            answer = value1 * value2;
            break;
        case "-":
            answer = value1 - value2;
            break;
        case "+":
            answer = value1 + value2;
        case "%":
            userOp = "/";
            answer = `${parseInt(value1/value2)} with a remainder of ${value1 % value2}`;
            break;
        default:
            break;
     
}

if (error) {
    console.log("Program Exiting...")
} else {
    console.log(`${value1} ${userOp} ${value2} equals ${answer}`);
};