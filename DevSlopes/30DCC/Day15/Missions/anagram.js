/*
Create a function that takes in two strings as two parameters and
returns a  boolean that indicates whether or not the first string
is an anagram of the  second string. 
*/ 

function checkForAnagram(str1, str2) {
    let word1 = str1.split("").sort().join().toLowerCase();
    let word2 = str2.split("").sort().join().toLowerCase();
    if (word1 == word2){
        return true;
    } else {
        return false;
    }
}
console.log(checkForAnagram("Hello" , "Jello"));
console.log(checkForAnagram("doctorwho" , "torchwood"));


