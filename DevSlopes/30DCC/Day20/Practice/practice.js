//Spread Operator

const skatePants = ['Volcom', 'Matix', 'RCVA'];
const skateShoes = ['Emerica', 'Nike SB', 'Vans'];

console.log(...skatePants);
console.log(...skateShoes);

const combinedIsh = [...skatePants, 'Santa Cruz', ...skateShoes];

//  combinedIsh =  combinedIsh.concat(skatePants);
//  combinedIsh.push('Santa Cruz');
//  combinedIsh = combinedIsh.concat(skateShoes);



console.log(combinedIsh);

//More spread examples