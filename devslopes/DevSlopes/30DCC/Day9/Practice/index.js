//Mapping

var numbers = [2, 5, 7, 1];

var classRoom = {
    grade: '3rd Grade' ,
    students: [
        {name: 'James' , score: 90},
        {name: 'Jenny' , score: 92},
        {name: 'Jacob' , score: 87},
        {name: 'Kate' , score: 78},
    ]
};

var helloStudents = classRoom.students.map(function(student ,i , array){
    return `Index ${i}: Hello ${student.name}`;
});6

console.log(helloStudents);

//Filter 
// returns the indexes of each object in an array
var filter = numbers.filter(function(n , i){
    console.log(i);
    return n <= 5;
});

//make a callback function that returns the students with scores higher than or equal to 90
var gradeAStudents = classRoom.students.filter(function(student){
    return student.score >= 90;
    
});
console.log(filter);
console.log(gradeAStudents);

//Reduce
//takes elements of an array and reduce it to a single value
var sum = 0;
for (var n of numbers) {
    sum+= n;
};
console.log(sum);


