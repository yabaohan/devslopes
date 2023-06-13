//Given the arrays below, perform the following tasks
var colors = ['blue' ,'red','green', 'yellow', 'black', 'white'];
var moreColors = ['purple' , 'magenta' ,'pink;'];

console.log('Here is the array below, before it is mutated');
console.log(colors);
//remove red, green and yellow using splice
var indexRed = colors.indexOf('red');
var indexGreen = colors.indexOf('green');
var indexYellow = colors.indexOf('yellow');

if((indexRed > -1)
 && (indexYellow > -1)
  && (indexGreen >-1))
  {colors.splice(indexRed,1);
   colors.splice(indexYellow,1);
   colors.splice(indexGreen,1);}
   console.log('Here is the array below, after it is mutated');
   console.log(colors);

// Another soultion could be...
// for (var i = 0; i < moreColors.length, i++){
//     colors.push(moreColors[i]);
// }

//Add entire of moreColors array to the colors array using a single statement
console.log('Here are the two arrays concatenated');
console.log(colors.concat(moreColors));

// Another soultion could be...
// for (var i = 0; i < moreColors.length, i++){
//     colors.push(moreColors[i]);
// }