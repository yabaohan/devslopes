//Javascript Objects

 

// var person = {
//     firstName: 'Hans',
//     lastName: 'Yabao',
//     age: 24,
//     hobbies: ['jiu jitsu', 'coding', 'crossfit','hiking'],
//     face: {eyeColor : 'brown',
//     glasses: true,},
//     greeting: function(){
//         return 'My name is ' + this.firstName + ' and I\'m ' + this.age + ' years old.'  }
//         //this keywords refers to the object it belongs to, in this case the global object names person
// }


// console.log(person);
// // console.log(person.face.eyeColor);
// // console.log(person.greeting());

// var person2 = new Object();
// person2.name = 'Jordan';
// person2.age = 25;
// person2.greeting = function(){
//     return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.'
// }


// var person3 = {};

// person3.name = 'Brayan';
// person3.age = 22;
// person3.greeting = function(){
//     return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.'
// }

// //Object constructor
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.greeting = function(){
//         return 'My name is ' + this.name + ' and I\'m ' + this.age + ' years old.'
//     }
// }

// var humans = [];

// humans.push(new Person('James', 26, ));
// humans.push(new Person('Julie', 20, ));
// humans.push(new Person('Jam', 21, ));
// humans.push(new Person('Jack', 22, ));

// for ( var i = 0; i < humans.length; i++){
//     var human = humans[i];
//     console.log(human.greeting());
// }


// console.log(person2);
// console.log(person3);
// console.log(humans);


//Javascript Object Part 2
// var student0 = {
//     firstName : "John",
//     lastName : "Smith",
//     age: 7,
//     grade: 'A',
//     greeting:function(){
//         return 'Hi, I\'m ' + this.firstName + ' and I\'m ' + this.age + ' year old.' ;
//     },
// };

// console.log(student0.greeting());

//Creates a new empty object

// var student1 = new Object();
// student1.firstName = "John";
// student1.lastName = "Lith";
// student1.age = 5;

// var student2 = new Object();
// student2.firstName = "Zeke";
// student2.lastName = "Lita";
// student2.age = 20;

// var student3 = new Object();
// student3.firstName = "King";
// student3.lastName = "Kong";
// student3.age = 15;



// students.push(student1);
// students.push(student2);
// students.push(student3);

// for ( var index = 0; index < students.length; index++){
//     console.log(students[index]);
// }

function student(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greeting = function(){
        return 'Hi, I\'m ' + this.firstName + ' and I\'m ' + this.age + ' year old.' ;
    }
}

var students = [];
var s1 = new student('Johnny' , 'Tsunami' , 5); 
console.log(s1);
console.log(s1.greeting());

students.push(new student('Timmy', 'Turner', '12'));
students.push(new student('Aunt', 'Jemimah', '150'));
students.push(new student('Tina', 'Turner', '42'));

// for(var index = 0; index < students.length; index++){
//     var student = students[index];
//     console.log(student.greeting());
// };

var student = students[0];

for (var x in student) {
    console.log(student[x]);
}

//ES6 Javascript Objects
//an object type containing key value pairs
//things that aren't a premitive in JS are objects

var car = {
    make : 'Dodge',
    model : 'Charger',
    wheels : 4
};

//Bracket Notation
console.log(`I have a ${car['make']} that has ${car['wheels']} wheels` );
//Dot Notation
console.log(`I have a ${car.make} that has ${car.wheels} wheels `);

//Object Literal

var employee = {
    firstName: 'Joe',
    lastName : 'Blow',
    //method
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

//Property
console.log(`Our IT director is ${employee.firstName}`);
console.log(`His full name is ${employee.fullName()}`);

// Object constructor function
function Vehicle (make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.getFullDescription = function() {
        return `${this.year} ${this.make} ${this.model} `
    };
}

let myCar = new Vehicle ('Subaru' ,'Impreza', '2023' );
let mySistersCar = new Vehicle ('Subaru' ,'Outback', '2022' );

console.log(myCar.year , myCar.make, myCar.model)
console.log(mySistersCar.getFullDescription());

// function createVehicle(year,make,model) {
//     return {
//         make: make,
//         model: model,
//         year: year,
//         getFullDescription: function(){
//             return `${year} ${make} ${model}`;
//         }
//     };
// }

// let myCar2 = createVehicle('2023', 'Tesla' , 'Model Y');
// let myFriendsCar = createVehicle('2023', 'Mercedez' , 'E Class');

//ES6 Enhanced Object Literal Syntax
function createVehicle(year,make,model) {
    return {
        make,
        model,
        year,
        getFullDescription: function(){
            return `${year} ${make} ${model}`;
        }
    };
}


let myCar2 = createVehicle('2023', 'Tesla' , 'Model Y');
let myFriendsCar = createVehicle('2023', 'Mercedez' , 'E Class');

let cars = [];
cars.push(myCar2);
cars.push(myFriendsCar);

console.log(cars);

// JavaScript Scope
/* Scope determines the accessibility (visibility) of variable. */

//Global - A global vairbale has global scope
//All scripts and functions on a web page can access it

var user1 = {
    name: 'Bobby',
    age: 28,
    data : 'All the important things....',
}


if (true){
    var name = 'Andre';
};

//Local - Variable delcared within a function
//become LOCAL to a function

// function userBDay(age){
//     var newAge = age + 1;
//     user1.age = newAge;
//     console.log('Happy Birthday ' + user1.name + '! You are ' + newAge + ' years old!' )
// };

// userBDay(user1.age);
// console.log(user1);

/*ES2015 /ES6 */
//Introduced 'let' and 'const'
//These two keywords provide Block Scope Variables (and costants) in JavaScript;

//Variables declared inside a block {} CANNOT be
//accessed from outside the block;

//let
var x = 10;
if (true) {
 let x = 2;
 if (true){
    x = 'Hello';
    for (var i = 0; i < 4; i++){
        x = i; //i was declared in the for loop so it can't be accessed by that console.log
    }
 }
};

console.log(x);
console.log(i);

//const
const animal = 'Racoon';
console.log(animal);
// animal = 'cat'; (console logs uncaught type error. animal declared as racoon)
const user2 = {
    name: 'Rambo',
    age: 73,
}

function userBDay(age){
    const newAge = age + 1;
    user2.age = newAge;
    console.log('Happy Birthday ' + user2.name + '! You are ' + newAge + ' years old!' )
};
userBDay(user2.age);

console.log(user2);

// const is helpful to prevent accidental assignment