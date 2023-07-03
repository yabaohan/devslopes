//Arrow Functions--------

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

//If you're working with one parameter, you can omit parenthes when declaring parameter
const pieEater = r => Math.PI * r * r;


// => is actually an implicit return if return value is one line
const sumBodyOnceToldMeImplicitly = (a, b) => a + b


function randomNumber() {
  return Math.random();
};

const randomNum = () => Math.random();

console.log(sumBodyOnceToldMe(12, 8));
console.log(sumBodyOnceToldMeImplicitly(12, 8));
console.log(eatPie(12));
console.log(pieEater(12));
console.log(randomNumber());
console.log(randomNum());




//More Arrow Function Examples --------
const names = ['Jared', 'Jason', 'Nathan'];

// const fullNames = names.map(function(name){
//   return name + ' Brewer';
// });
//fullNames as arrow function
const fullNames = names.map((name) => name + ' Brewer');

const contest = 'THE RELAY';
const skaters = ['Eric Koston', 'Shane Oneil', 'Kevin Bradley'];

// const champions = skaters.map(function(skater,i){
//   return {
//     name: 'skater',
//     contest: contest,
//     rank: i + 1,
//   }
// })

//arrow function with implicity returns
const champions = skaters.map((skater, i) => ({
  name: 'skater',
  contest: contest,
  rank: i + 1,
}));

const trophies = [12, 33, 22, 13, 4, 17];
const champs = trophies.filter(function(num) {
  if (num > 20) {
    return num;
  }
});
//implicit return
trophies.filter((num) => num > 20);

console.log(fullNames);
console.table(champions);
console.log(champs);

//Arrow Functions and 'this'--------

const skaterDude = {
  name: 'Jason',
  stance: 'regular',
  favTrick: '360 Flips',
  doTrick() {
    console.log('Droppin hammers with some ' + this.favTrick);

    const forDayzz = () => {
      console.log('I could do ' + this.favTrick + ' for dayzzz!');
    }
    forDayzz();
  }
}

skaterDude.doTrick();

// https://jason-brewer.medium.com/3-examples-of-when-not-to-use-javascript-arrow-functions-a41432c4e2c6