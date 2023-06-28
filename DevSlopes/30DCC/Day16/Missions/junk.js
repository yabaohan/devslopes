// Create a function that takes a string as a parameter.If the string contains certain symbols, remove the symbols, replace each one  with a space, and then return a new string.

//Symbols to remove: { } [ ] ! < > ( )

function stringCleaner(str) {
  let nonAlphaNumerics = / { } [ ] ! < > ( )/g;

  stringCleaner =
    str.replace(nonAlphaNumerics, " ");

  return stringCleaner;
}

// function stringCleaner(str){
//   const junkSymbols = ["[]","{}", ">", "<", "()"]

//   for (const symbol of junkSymbols){
//     str = str.replace(new RegExp(symbol, "g"), " ");
//   }
//   return str;
// }



console.log(stringCleaner("{this} [a ] !<test>"));
