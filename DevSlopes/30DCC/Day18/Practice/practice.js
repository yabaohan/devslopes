//Default Function Arguments-------------------------------------------------

const calcBill = (total,tax = 0.0825,tip = 0.18) => {
    
    return console.log(total + (total * tax) + (total * tip));
}

calcBill(165, undefined, 0.025);

// you can set default values as your parameters


//Template Strings-------------------------------------------------

