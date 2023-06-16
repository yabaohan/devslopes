function numbers(){
    let x = 0;
    while (x < 100) {
        x += 2
        console.log(`Even number: ${x}`)
    }
    return x;
};
console.log(numbers());