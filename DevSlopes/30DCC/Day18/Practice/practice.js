//Default Function Arguments-------------------------------------------------

const calcBill = (total,tax = 0.0825,tip = 0.18) => {
    
    return console.log(total + (total * tax) + (total * tip));
}

calcBill(165, undefined, 0.025);

// you can set default values as your parameters


//Template Strings-------------------------------------------------

const name = 'Hickory Dickory Dock';
const skyscraper = false;

console.log(name + ' is the  tallest person I know');

//template literals
console.log(`${name} is the longest \nperson I know`);
console.log(`${name} is ${6 + 66} years old!`);
console.log(`${name} is the ${skyscraper ? 'tallest' : 'shortest'} person I know`);
console.log('\n' + name + ' is the tallest \nperson I knew!\n');
console.log(`
${name} is the ${skyscraper ? 'tallest' : 'shortest'} 
person I know
`);


//New String Methods that we're introduced in ES6

// .startsWith()
// .endsWith()
// .includes()
// .repeat()

const devslopes = 'Week1 Web Academy';
const devslopes1 = 'Week1 IOS Academy';
const acctNum = '123456789SAV-0001';
const monkey = "redRum";

const academy = 'Web';
const numWeeks = '16';
const exp = 'Beginner';
const padLeft = (str, pad = 12) => `${' '.repeat(pad - str.length)} ${str}`

// console.log(devslopes.startsWith('IOS', 6)); 
// console.log(acctNum.endsWith('SAV', 12));
// console.log(acctNum.endsWith('SAV'));
// console.log(acctNum.includes('1'));
// console.log(devslopes.includes('1'));
// console.log(devslopes.includes('ade'));
// console.log(monkey.repeat(10));

console.log(padLeft(academy));
console.log(padLeft(numWeeks));
console.log(padLeft(exp));

