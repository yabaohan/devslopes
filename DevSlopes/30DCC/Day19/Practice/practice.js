const { constants } = require("buffer");

//Destructuring Arrays
const movies = ['Gladiator', 'Elf', 'Maze Runner'];

console.log(movies[0]);
console.log(movies[1]);
console.log(movies[2]);

const [movie1, movie2, movie3] = movies;

const students = ['Nathan', 'Jacob', 'Jeremy', 'Bobby'];

// const studentArray = students.split(',');

// const [dev1,dev2,skater1,skater2] =  students.split(',');

const [dev1, dev2, ...rest] = students;
const [skater1, skater2] = rest;

// console.log(studentArray);
console.log(dev1);
console.log(dev2);
// console.log(rest);
console.log(skater1);
console.log(skater2);
// console.log(skater2);

// console.log(students);
// console.log(movie1);

//Swapping Variavbles in Destructuring

let working = 'Larry';
let onBreak = 'Lisa';

console.log('working- ', working);
console.log('onBreak- ', onBreak);

[working, onBreak] = [onBreak , working];

console.log('--switch--');


console.log('working- ', working);
console.log('onBreak- ', onBreak);


//Destructuring Functions - multiple returns and named defaults

const cryptoConverter = (amount) => {
    const crypto = {
        BTC: amount / 19000,
        ETH: amount / 595,
        LTC: amount / 88,
        XEM: amount / 0.20,
    }
    return crypto;
}

const {BTC, ETH, LTC, XEM} = cryptoConverter(1000);

console.log(ETH);

const myBill = {
    total: 125,
    tax: 0.0825,
    tip: undefined,
}

const calcBill = ({total, tax = 0.0825,tip = 0.20}) => total + (tip * total) + (tax * total);

const finalBill = calcBill(myBill);

console.log(finalBill);