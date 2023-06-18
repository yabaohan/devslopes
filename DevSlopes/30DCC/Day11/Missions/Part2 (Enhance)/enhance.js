function numbers(range){
    for ( let i = 2; i <= range; i +=2){
        console.count('iterations');
        console.log(i);
    }

};
console.log(numbers(100));