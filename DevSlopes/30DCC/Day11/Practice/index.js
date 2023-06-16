//Javascript functions

var warrior = {
  name: 'Bubble Buddy',
  attack: 60,
  defence: 13,
  mana: 324
}

function levelUp(prop, val) {
  warrior[prop] += val;
}

levelUp('attack', 2)
levelUp('defence', 8)
levelUp('mana', 17)

console.log(warrior);

function toCelsius(f) {
  var temp = ((5 / 9) * (f - 32));
  return temp.toFixed(2);
};

var cel = toCelsius(46);
var weather = 'The temperature outside is ' + cel + ' celsius!';
console.log(cel);
console.log(weather);


function calcArea(l, w) {
  return l * w;
};

var kitchenArea = calcArea(18, 15);
var bedroomArea = calcArea(12, 10);

//Javascript Functions Part 2
//DRY D.ONT R.EPEAT Y.OURSELF

var length1 = 15;
var width1 = 10;

rectArea = calcArea(length1, width1);
console.log(`Area of the rectangle is ${rectArea} !`);

var rectanglesAreas = []
rectanglesAreas.push(calcArea(10, 15));
rectanglesAreas.push(calcArea(14, 2));
rectanglesAreas.push(calcArea(13, 4));
rectanglesAreas.push(calcArea(7, 5));

console.log(rectanglesAreas);

var bankBalance = 500;

function makeTransaction(priceOfSale) {
  if (priceOfSale <= bankBalance) {
    bankBalance -= priceOfSale;
    console.log("Purchase Successful");
  } else {
    console.log("Insufficient Funds");
  }

}
console.log(bankBalance);

makeTransaction(79.00);
console.log(bankBalance);

makeTransaction(2.32);
console.log(bankBalance);

makeTransaction(10.45);
console.log(bankBalance);

makeTransaction(450.00);
console.log(bankBalance);

var transaction = function(priceOfSale) {
  if (priceOfSale <= bankBalance) {
    bankBalance -= priceOfSale;
    console.log("Purchase Successful");
  } else {
    console.log("Insufficient Funds");
  }
}

transaction(400);
console.log(bankBalance);

var printCustomerName = function(first, last) {
  console.log("First Name: " + first + " Last Name: " + last);
}

var applyForCreditCard = function(creditScore, soul) {
  //call some functions to process application
}

//you can push function calls into an array
bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);

