function numbers(range){
    for (let n = 1; n <= range; n++)
    {  console.count('iterations');
        if (n%2 === 0){
            console.log(n);
          
        }
    }
}
console.log(numbers(100));