// Create a multidimensional array that holds this matrix
//  1  2  3
//  4  5  6

//Create  a second multidimensional array that holds this matrix
//  7  8
//  9  10
//  11 12

//Multiple the two matrices and store the result in a third matrix named result

// final matrix should be
//  58  64
//  139 154

let matrix = [
    [1,2,3],
    [4,5,6],
];

let matrix2 = [
    [7,8],
    [9,10],
    [11,12],
];

let result = [
    [matrix.length],
    [matrix2[0].length]
];

for (var i = 0; i < matrix.length; i++){
    for (var j = 0; j < matrix2[0].length; j++) {
        sum = 0;
        for (var k = 0; k < matrix2.length; k++ ){
            sum+=matrix[i][k] * matrix2[k][j];
        }
        result[i][j] = sum;
    }
    
}

console.log(result);
