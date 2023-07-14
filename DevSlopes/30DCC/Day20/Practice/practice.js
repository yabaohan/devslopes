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

const skaterDude = {
    name: "leroy",
    shoes: ['DC', 'Supra'],
};

skaterDude.shoes = [...skaterDude.shoes, ...skateShoes];

const comments = [
{id: 1, comment: 'You keep shreddin dude, you rock!'},
{id: 2, comment: 'A giraffe skaters better than you.'},
{id: 3, comment: 'You\'re my skater boi.'},
{id: 4, comment: 'I love you!, you rock!'},
];

const id = 3;

const commentIndex = comments.findIndex((comment) => comment.id === id);
const niceComments = [...comments.slice(0,commentIndex), ...comments.slice(commentIndex + 1)];

console.log(skaterDude);
console.log(...skaterDude.shoes[2]);
console.log([...skaterDude.shoes[2]]);
console.log(commentIndex);
console.log(niceComments);


