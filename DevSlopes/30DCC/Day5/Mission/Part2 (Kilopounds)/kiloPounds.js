//Create an algorithm that converts kilograms to pounds
//Formula is: Pounds = Kilograms*2.205

let numKg = 129.27;

function convertToPounds(numKg){
    let pounds = numKg * 2.205;
    return pounds;
};
let message = numKg  + 'kg ' + 'is equal to ' + convertToPounds(numKg).toFixed(2) + 'lbs.' 
console.log(message);