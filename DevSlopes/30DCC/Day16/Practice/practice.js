//Temporal DeadZone
// console.log(name);
// const name = 'Jason';
 
//is Var dead?

/*
Mathias Bynens

1. Use const by default
2. Use let only if rebinding is needed
3. var should not be used in ES6


Kyle Simpson
1. Use var for top-level variables that are shared across many (especially larger) scopes
2. Use let for localized variables in smaller scopes.
3. Refactor let to const only after some code has to be written,
and you're reasonably sure that you've got a case where there shouldn't be variable reassignment.
*/

//Destructuring Objects

const yabaohan = {
  name: "Hans",
  last: "Yabao",
  urls: {
    socials: {
      facebook: 'facebook/yabaohan',
      instagram: 'instagram/hashuablue',
    },
    web: {
      website: 'web/yabaohan',
      blog: 'blog/yabaohan',
    }
  }
}


const {name , last } = yabaohan;
//You can reassign extracted properties
const {facebook: fb, instagram : ig} = yabaohan.urls.socials
const shape = {width: 200, height: 400};
//You can also assign new values into a destructured object
const {width = 100 , height = 100 ,bgColor = 'Red',borderR = '8px'} = shape;

console.log(width);
console.log(height);


console.log(name);
console.log(last);

console.log(ig);
console.log(fb);

