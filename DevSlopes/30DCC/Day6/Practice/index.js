// Javascript Logical Operators Part 1

// === equal to
// !== not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or eequal to

// && and
// || or
// ! not

var skater1 = 9.5;
var skater2 = 9;
var skater3 = 9;
var isJackedUpOnCaffeine = true;

//Multiple logical operators can be combined in a line
if (skater2 < skater3 && skater2 <= skater1 && skater1 < 100){
    console.log('Move skater 2 into next round');
} else if ( skater3 < skater2 
    || skater3 === skater2 
    && skater2 < skater1 
    && !isJackedUpOnCaffeine){
    console.log('skater3 is steppin up their game!');
} else if (!skater3 > 5 && isJackedUpOnCaffeine) {
    console.log('skater 3 takes home the Gold!')
}

//not operator can be placed in front of variable

// //DAY 6 Practice
//Comparison Operators + Logical Operatirs Part 2

// == equal to
// != not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// !== not equal to

// var currentAccountBalance = 74.98;
// var purchase = 74.99;
// var freeLavaLampVoucher = true;
// if (1 === '1') {
//   console.log('Holy smokes it\'s true!!');
// } else {
//   console.log('You wish...')
// }

// if (purchase <= currentAccountBalance) {
//   console.log('Lava lamps for days...');
// } else if (freeLavaLampVoucher) {
//   console.log('Free Stuff Rocks!');
// }

// else {
//   console.log('You broke bruh!...');
// }

//Comparison Operators Part 2
// var myAccountBalance = 300;
// var nintendoSwitch = 799.23;
// var coupon = 500;

// if (nintendoSwitch <= myAccountBalance){
//   myAccountBalance -= nintendoSwitch;
//   console.log("We just bought a new Switch!");
//   console.log("Account Balance: " + myAccountBalance);
// } else if (nintendoSwitch - coupon <= myAccountBalance) {
//   console.log('You are a cheapskate,but here is your switch!');
//   myAccountBalance -= nintendoSwitch - coupon;
//   console.log("Account Balance: " + myAccountBalance.toFixed(2));
// } else {
//   console.log("You're too broke for a game nerd");
// }

// var age = 23;
// var joesAge = "23";

// if(age == joesAge) {
//   console.log("I'm the same age as Joe!");
// }

// var val1 = 23;
// var val2 = '23';

// if (val1 === val2) {
//   console.log("These are the same!");
// }
  
//   else {
//     console.log("One of these is not like the other...");
//   }
    
if (1 === 1 && 3 === 2 || "joe" === "joe") {
    console.log('These are both true');

}

if (true & true) {
    console.log('These are the same');
}
  
if (1 === 3  || "joe" === "joe"){
    console.log('One of these are true');
}

var cat1 = 12;
var cat2 = 5;
var cat3 = 11;
var cat3disabledHandiCap = true;

if ((cat1 > cat2 && cat1 > cat3) && !cat3disabledHandiCap){
    console.log('Cat 1 is the cutest');
}
else if ((cat2 > cat1 && cat2 > cat3) && !cat3disabledHandiCap){
    console.log('Cat 2 is the cutest');
}
else if ((cat3 > cat1 && cat3 > cat2) || cat3disabledHandiCap) {
    console.log("Cat 3 is the cutest");
}
