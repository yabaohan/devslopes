//Mapping

var numbers = [2, 5, 7, 1];

var classRoom = {
  grade: '3rd Grade',
  students: [
    { name: 'James', score: 90 },
    { name: 'Jenny', score: 92 },
    { name: 'Jacob', score: 87 },
    { name: 'Kate', score: 78 },
  ]
};

var helloStudents = classRoom.students.map(function(student, i, array) {
  return `Index ${i}: Hello ${student.name}`;
});

console.log(helloStudents);

//Filter 
//make a callback function that returns the students with scores higher than or equal to 90
var filter = numbers.filter(function(n, i) {
  console.log(i);
  return n <= 5;
});

var gradeAStudents = classRoom.students.filter(function(student) {
  return student.score >= 90;

});
console.log(filter);
console.log(gradeAStudents);

//Reduce
//takes elements of an array and reduce it to a single value
var sum = 0;
for (var n of numbers) {
  sum += n;
};
console.log(sum);

//first argument is the function 
//second argument is where the accumulator starts
// a = 0, c = 2 (first element of the numbers array)=> 2
// a = 2, c = 5 => 7
// a = 7, c = 7 => 14
// a = 14, c = 1 => 15
var sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum);

//first parameter is the parameter that's storing 
//scoreTotal calculates the total score from each student.score
var scoreTotal = classRoom.students.reduce(function(acc, val) {
  return acc + val.score;
}, 0);

console.log(scoreTotal);

classRoom.studentAverage = scoreTotal / classRoom.students.length;
console.log(classRoom);

//Array Method Chaining

var starStudents = classRoom.students
  .filter(function(student,) {
    return student.score >= 80;
  })
  .map(function(value) {
    value.score += 5;
    return value;
  })
  .reduce(function(acc, val, index, array) {
    const total = acc.sum + val.score;
    return {
      sum: total,
      arr: array,
    }
  }, { sum: 0, arr: [] });

var studentAverage = starStudents.sum / starStudents.arr.length
console.log(starStudents, studentAverage);

