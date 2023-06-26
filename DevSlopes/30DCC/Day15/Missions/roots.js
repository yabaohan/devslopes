// //Make a function from scratch that finds the sqrt of a number num.
function Roots(x) {
    if (x<=1) {
        return x;
    }
    for ( let i = 2; i <= x; i++){
        if (i * i === x){
            return i;
        }
        if (i * i >= x) {
            return i - 1;
        }
    }
}


console.log(squareWithoutHelp(100));
