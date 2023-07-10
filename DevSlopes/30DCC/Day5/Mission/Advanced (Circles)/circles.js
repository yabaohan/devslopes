//Given r for radius, write an algorithm to determine the area of a circle.
//Solve for the following values: r15, r128, r7, r6

function calcAreaOfCircle(radius){
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}

let radii = [15,128,6,7];

radii.forEach((radius) => {
    let area = calcAreaOfCircle(radius);
    console.log(`The area of a circle with a radius of ${radius}
    units is approximately ${area.toFixed(2)} square units.}`);
})

