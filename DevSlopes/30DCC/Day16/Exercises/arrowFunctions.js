//Write an arrow function that returns the string "Hello Radness"

helloRadness = () => {
  return "Hello Radness";
}

//OR

helloRadnessShort = () => "Hello Radness with less typing";

console.log(helloRadness());
console.log(helloRadnessShort());

// Write an arrow function that expects an array of integers,
// and returns the sum of the elements of the array. 
// Use the built-in method reduce() on the array argument.

const array1 = [1, 2, 3, 4, 5];
const sumArray = (arr) => {
  let result = arr.reduce((acc, curr) => acc + curr)
  return result;
}

console.log(sumArray(array1));


// Run the following code with Node to see the result. Then rewrite the code using arrow functions wherever it makes sense to use them. The function should still work 😉

const Animal = function(animal, sound, delay) {

  this.animal = animal,

    this.sound = sound;

  this.delay = delay;

}

Animal.prototype.greet = function() {

  setTimeout(() => {
    console.log(`Hi, I am a ${this.animal}...${this.sound}`);
  }, this.delay);
};

const dog = new Animal('Dog', 'Bark', 3000);

const cat = new Animal('Cat', 'Meow', 200);

dog.greet();

cat.greet();