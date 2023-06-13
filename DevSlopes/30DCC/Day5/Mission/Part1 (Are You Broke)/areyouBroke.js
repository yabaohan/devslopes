let balance = 530.00;
const nintendoSwitch = {
    name:'Nintendo Switch',
    price: 499.99,
};

// const playStation5 = {
//     name:'Playstation 5',
//     price: 799.99,
// };

// const xboxSeriesX = {
//     name: 'Xbox Series X',
//     price: 599.99,
// };

const matchaTea = {
    name:'Matcha Tea',
    price: 35.00,
};

// const burger = {
//     name: 'Baconator',
//     price: 5.99,
// };



if (balance >= nintendoSwitch.price){
    balance -= nintendoSwitch.price;
    console.log('Purchasing ' + nintendoSwitch.name + " for " + nintendoSwitch.price);
    console.log('Current Balance: $' + balance.toFixed(2));
}

else {
    let difference = (nintendoSwitch.price - balance); 
    console.log('Sorry, but you can"t afford the ' + nintendoSwitch.name + '.' + ' You need at least ' + difference + ' more to buy it' );
}

 if (balance >= matchaTea.price){
    balance -= matchaTea.price;
    console.log('Purchasing ' + matchaTea.name + 'for ' + matchaTea.price);
    console.log('Current Balance: $' + balance);
}

else {
    let difference = (matchaTea.price - balance); 
    console.log('Sorry, but you can"t afford the ' + matchaTea.name + '.' + ' You need at least ' + difference.toFixed(2) + ' more to buy it' );
}


