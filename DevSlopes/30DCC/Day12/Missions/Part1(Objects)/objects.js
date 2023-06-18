var vehicles = {
    "Honda" : "Crv",
    "Jeep" : "Wrangler",
    "Chrysler" : "Pacifica",
    "Ford" : "F150"
}


//Before deleting Ford
console.log(`Here is the new object with Ford\n -----------------------------------`)
for (i in vehicles){
    console.log(vehicles[i]);
}


//After Deleting Ford
console.log(`Here is the new object without Ford\n -----------------------------------`)

for (i in vehicles){
    if (i === "Ford"){
        delete vehicle.Ford;
    }
    console.log(vehicles[i]);
}