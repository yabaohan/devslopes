//CommandLine App Part 1
var rs = require('readline-sync');

//Prompt the name question
//Prompt the favorite hobby
//Ask if there's more hobbies
//Add hobbies to the list
//Store list of user hobbies
//Print uuuuser hobby list at the end
var hobbies = [];

var userName = rs.question('What is your name? ');
console.log('Hi ' + userName + '!');
var favHobby = rs.question('What\'s youre favorite hobby? ')
hobbies.push(favHobby);

var moreHobbies = rs.questionInt('How many other hobbies do you have? ')
if(moreHobbies > 0){
    //add hobbies
    var counter = 0;
    while(counter < moreHobbies){
        var input = rs.prompt();
        hobbies.push(input);
        counter++;

        if (counter < moreHobbies) {
            console.log('-- Awesome! "' + input + '"is cool! What\'s the other ' + (moreHobbies - counter) + '? ');
        } else {
            console.log('I wish I could do ' + hobbies + '...but I\'m not even real.');
        }
    } 

} else {
    var areYouSure = rs.keyInYN('Are you sure?' + hobbies[0] + ' is all you do? ')
}



