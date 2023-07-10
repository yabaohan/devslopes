//ADVANCED
//Create a function that takes three integer parameters between 0 and 255. 
//These three numbers will represent the red, green, and blue channel values
// of any given color.
//You are to return the hex string for that color.

// Part 2:  Write code that ensures the numbers passed in
// are between 0-255, otherwise  throw an error.
// Example: 255, 99, 71 would return #FF6347
function rgbToHex(r,g,b){
    if ([r,g,b].some(n => n < 0|| n > 255) ) {
        throw new Error ('Invalid color value. Values must be between 0 and 255.');
    }

    return '#' + [r,g,b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex:hex;
    }).join('');
}

console.log(rgbToHex(4,67,200));
console.log(rgbToHex(255,255,255));
console.log(rgbToHex(0,0,0));
console.log(rgbToHex(255,267,257));






