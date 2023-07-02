//Arrow Functions

function sum(a, b) {
  return a + b;
}


const sumBodyOnceToldMe = (a, b) => {
  return a + b;
}


function eatPie(r) {
  const PI = 3.14;
  return PI * r * r;
}


// => is actually an implicity return if return value is one line
const sumBodyOnceToldMeImplicitly = (a, b) => a + b

console.log(sumBodyOnceToldMe(12, 8));
console.log(sumBodyOnceToldMeImplicitly(12, 8));
console.log(eatPie(12));


