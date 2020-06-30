// Medium

// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    const newMatrix = [];
    for (let i = 0; i < matrix.length; ++i) {
        newMatrix.push(new Array(matrix.length).fill(0));
    }
    
    for (let row = 0; row < matrix.length; ++row) {
        for (let column = 0; column < matrix.length; ++column) {
            newMatrix[column][matrix.length - 1 - row] = matrix[row][column];
        }
    }
    
    // console.log(newMatrix);
    return newMatrix;
};

// This is not the correct answer, but it manages to flip the matrix.


// Community solutions:

// By AminiCK
// The Idea
// Transpose the matrix
// Reverse each row
var rotate = function(matrix) {
    for (let i=0;i<matrix.length;i++) {
        for (let j=i;j<matrix[0].length;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for (let i=0;i<matrix.length;i++) {
        for (let j=0;j<matrix[0].length/2;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix[0].length-j-1];
            matrix[i][matrix[0].length-j-1] = temp;
        }
    }
};

// By haleyysz

var rotate = function(matrix) {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = i+1; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
        matrix[i] = matrix[i].reverse()
    }
};