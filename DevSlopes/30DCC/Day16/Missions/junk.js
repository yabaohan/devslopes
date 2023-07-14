// Create a function that takes a string as a parameter.If the string contains certain symbols, remove the symbols, replace each one  with a space, and then return a new string.

//Symbols to remove: { } [ ] ! < > ( )

// function stringCleaner(str) {
//   let nonAlphaNumerics = / { } [ ] ! < > ( )/g;

//   stringCleaner =
//     str.replace(nonAlphaNumerics, " ");

//   return stringCleaner;
// }

const specialChars = "{}[]!<>()";
let junkString = "I(love)to<code>everyday. [Do!youlike!(cats?)]"

// const replaceJunk = (string) =? string.replace(/[{\!<>()}]/g, " ");

// function stringCleaner(str){
//   const junkSymbols = ["[]","{}", ">", "<", "()"]

//   for (const symbol of junkSymbols){
//     str = str.replace(new RegExp(symbol, "g"), " ");
//   }
//   return str;
// }



console.log(replaceJunk(junkString));
