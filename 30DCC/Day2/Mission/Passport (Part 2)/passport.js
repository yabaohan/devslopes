var passport = {
    firstName: "Hans Joshua",
    lastName: "Yabao",
    dateOfBirth: "05/18/1999",
    age: 24,
    isOrganDonor: true,
    state: "New Jersey",
    city: "Union",
    zipCode: '07083',
    idNumber: '3144153',
    dateOfIssue: "05/18/2017",
    countriesTraveledTo: ['Spain' , 'Dominican Republic', 'Portugal'],

}

var summary = "Hello, I'm " + passport.firstName + " " + passport.lastName + "." + " I was born on " +
 passport.dateOfBirth + " and I'm now " + passport.age + '. ' + "I currently live in " + passport.city +
 ', ' + passport.state + ". " + "I like to travel. I've been to countries like " 
 + passport.countriesTraveledTo[0] + passport.countriesTraveledTo[1] + ' and ' + passport.countriesTraveledTo[2] + 
 ". I would love to travel more!";

console.log(summary);