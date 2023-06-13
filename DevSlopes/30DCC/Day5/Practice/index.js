// //DAY 5 Practice
//Comparison Operators Part 1

// == equal to
// != not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

var currentAccountBalance = 74.98;
var purchase = 74.99;
var freeLavaLampVoucher = true;
if (1 === '1') {
  console.log('Holy smokes it\'s true!!');
} else {
  console.log('You wish...')
}

if (purchase <= currentAccountBalance) {
  console.log('Lava lamps for days...');
} else if (freeLavaLampVoucher) {
  console.log('Free Stuff Rocks!');
}

else {
  console.log('You broke bruh!...');
}

//Comparison Operators Part 2
var myAccountBalance = 300;
var nintendoSwitch = 799.23;
var coupon = 500;

if (nintendoSwitch <= myAccountBalance){
  myAccountBalance -= nintendoSwitch;
  console.log("We just bought a new Switch!");
  console.log("Account Balance: " + myAccountBalance);
} else if (nintendoSwitch - coupon <= myAccountBalance) {
  console.log('You are a cheapskate,but here is your switch!');
  myAccountBalance -= nintendoSwitch - coupon;
  console.log("Account Balance: " + myAccountBalance.toFixed(2));
} else {
  console.log("You're too broke for a game nerd");
}

var age = 23;
var joesAge = "23";

if(age == joesAge) {
  console.log("I'm the same age as Joe!");
}

var val1 = 23;
var val2 = '23';

if (val1 === val2) {
  console.log("These are the same!");
}
  
  else {
    console.log("One of these is not like the other...");
  }
    
  
    
