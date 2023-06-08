const str = "Hello World!"

// const words = str.split(' ');
// console.log(words[0]);

//PART 1: REVERSING STRING WITH BUILT-IN FUNCTIONS
// const chars = str.split('');
// console.log('Part 1: ' + chars[11] + chars[10] + chars[9] + chars[8] + chars[7] + chars[6] + " " + chars[4]
// + chars[3] + chars[2] + chars[1] + chars[0]);

function reverseStringWithBuiltInFunctions(str){
    var splitString = str.split(""); //This takes the strings and puts the individual characters in an array
    var reverseArray = splitString.reverse();
    var concatenateArray = reverseArray.join("");
    return concatenateArray;
};

console.log('Part 1: ' +  reverseStringWithBuiltInFunctions(str));


//PART 2: REVERSING STRING WITHOUT USING BUILT-IN FUNCTIONS
 function reverseStringWithoutBuiltInFunctions(str) {
    var r = "";
    for (var i = str.length - 1; i >= 0; i--)
    {
        r+= str.charAt(i);
    }
    return r;
 }



console.log('Part 2: ' +  reverseStringWithoutBuiltInFunctions(str));
