//let vs const

const id = 'xyz123';
let highFives = 23;
let isCool = false;

if(highFives > 5) {
    let isCool = true;
    console.log('Inside of the IF', isCool);
}

highFives = 25;

const person = {
    name: 'Jason',
    age: 25,
}

//properties of an object can be reassigned 
person.age = 26;
console.log(highFives);
console.log(isCool);

//Scoping refresher
let width = 100;
const height = 150;
var cheese = 'Gouda';
console.log(cheese);

function eatCheese(){
    var cheese = 'Gouda';
    console.log(cheese);
}

eatCheese()
cheese = 'Cheddar';


//Scoping Refresher



var age = 25;

let newBlock = 'of Cheese';

if (age > 5) {
    let newAge = age + 1;
    console.log('Congrats on your bday! You are ' + newAge + '!');
    if (true){
        console.log('nested block: ' , newAge);
        let newBlock = 'of Cheese';
    }
    console.log('newBlock' , newBlock);
}
