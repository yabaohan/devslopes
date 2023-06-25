//CommandLine App Part 1
var rs = require('readline-sync');

//Prompt the name question
//Prompt the favorite hobby
//Ask if there's more hobbies
//Add hobbies to the list
//Store list of user hobbies
//Print uuuuser hobby list at the end
var hobbies = [];
var areYouSure = false;
var moreHobbies = 0;
var userName = rs.question('What is your name? ');

function getHobbyCount(){
    moreHobbies =rs.questionInt('How many other hobbies do you have? ');
}

function addHobbies(numHobbies){
    var counter = 0;
    while(counter < numHobbies){
        var input = rs.prompt();
        hobbies.push(input);
        counter++;

        if (counter < numHobbies) {
            console.log('-- Awesome! "' + input + '"is cool! What\'s the other ' + (numHobbies - counter) + '? ');
        } else {
            console.log('I wish I could do ' + hobbies + '...but I\'m not even real.');
        }
    } 
}


console.log('Hi ' + userName + '!');

var favHobby = rs.question('What\'s youre favorite hobby? ')
hobbies.push(favHobby);
getHobbyCount();


if(moreHobbies > 0){
    console.log('Cool, what are they?')
    //add hobbies
  addHobbies(moreHobbies);

} else {
    var areYouSure = rs.keyInYN('Are you sure? ' + hobbies[0] + ' is all you do? ')
}

if(!areYouSure && hobbies.length <= 1){
    //add hobbies
    getHobbyCount();
    console.log('Cool, what are they?')
    addHobbies(moreHobbies);
} else if (areYouSure) {
    console.log(hobbies + ' is cool, good for you. ');
}



