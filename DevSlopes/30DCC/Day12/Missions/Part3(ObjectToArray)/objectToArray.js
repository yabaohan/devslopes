

let students = {
  'Jon' : {
    age:27,
    online: false
  },
  'Jack' : {
    age:32,
    online:true
  },
  'Jenn' : {
    age:48,
    online:false
  },
  'Liz':{
    age:19,
    online:true,
  }

};

let studentsKeys = Object.keys(students);
console.log(studentsKeys);

let studentArray = [];

for (key in students){
  studentArray.push(key);
  for(nestKey in students[key]){
    studentArray.push(nestKey);
  }
};


console.log(studentArray);

// function createVideoGame(title,rating,esrbRating){
//   return {
//   title,
//   rating,
//   esrbRating,
// };
// }

// let cod =  createVideoGame('Call of Duty', 70, 'M');
// let botw = createVideoGame('The Legend of Zelda: Breath of the Wild' , 98, 'T');


// let videoGamesArray = [];
// videoGamesArray.push(cod);
// videoGamesArray.push(botw);



// let videoGamesKeys = [];
// console.log(videoGamesArray);
// for ( key in videoGamesArray){
//  videoGamesKeys.push(key)
// };

// console.log(videoGamesKeys);

