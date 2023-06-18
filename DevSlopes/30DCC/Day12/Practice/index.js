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



