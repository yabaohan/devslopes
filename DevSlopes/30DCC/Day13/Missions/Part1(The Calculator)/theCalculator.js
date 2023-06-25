var rs = require('readline-sync');


function calcuation (num1, num2, operation){
    var sol = null;
    if (operation  === '+')
    {sol = num1 + num2 }
    else if (operation === '-')
    {sol = num1 - num2}
    else if (operation === '/')
    {sol = num1/num2}
    else if (operation === '*')
    {sol = num1*num2}
    
  
    return sol;
}

var startCalc = rs.question('What operation would you like to perform?' , {
    limit: ['+', '-' , '*', '/'],
    limitMessage: 'I can\'t calculate that.'
});

if (startCalc) {
    //enter first number
    first = rs.questionInt('Please enter the first number: ' , {
        //if not a number, 'not a number' and re-ask
        limit: /\.txt$/i,
        limitMessage: 'This is not a number. Please input a number.'
    });
    //if valid, enter second number, repeat error handling
    second = rs.questionInt('Please enter the second number: ', {
        limit : /\.txt$/i,
        limitMessage: 'This is not a number. Please input a number...'

    })
}


console.log(`The result is: ${calcuation(first , second, startCalc)}`);

 