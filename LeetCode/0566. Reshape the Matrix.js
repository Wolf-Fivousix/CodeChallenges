// Easy

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
 

// Example 1:
// https://assets.leetcode.com/uploads/2021/04/24/reshape1-grid.jpg

// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// Example 2:
// https://assets.leetcode.com/uploads/2021/04/24/reshape2-grid.jpg

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// -1000 <= mat[i][j] <= 1000
// 1 <= r, c <= 300

/*
BRUTE FORCE:
Do an early return if the size calculation of Matrix 1 is different than Matrix 2
    Matrix Length * Matrix[0] length
    R * C
    compare both

Define elementCounter as 0
Define resultMatrix as [] (empty array)
Define currentArray as []
Iterate through original matrix ROW

    iterate through original matrix COLUMN
        increase elementCounter by 1
        push current Matrix element into currentArray

        if elementCounter MOD columns (C) is equal to 0, then we know we've reached the end of column
            push the currentArray into resultMatrix
            Reset currentArray to []

return resultMatrix

O(n) Linear Time Complexity, we iterate once through the original matrix and then duplicate the array when saving it to the matrix.
O(n) Linear Space Complexity, because we are creating a new matrix of the same size as the input.
*/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(mat, r, c) {
    if (mat.length * mat[0].length !== r * c) return mat

    let elementCounter = 0
    const resultMatrix = []
    let currentArray = []
    for (let row = 0; row < mat.length; ++row) {
        for (let column = 0; column < mat[row].length; ++column) {
            ++elementCounter
            currentArray.push(mat[row][column])

            if (elementCounter % c === 0) {
                resultMatrix.push(currentArray)
                currentArray = []
            }
        }
    }

    return resultMatrix
};

// Runtime 3 ms Beats 55.60%
// Memory 59.64 MB Beats 30.50%

// This is a very clever implementation using splice to cut off the original array.
// It's a less readable, as it's been clever about what it is doing. But a very consice way of representing the same concept.
var matrixReshape = function(mat, r, c) {
    const flat = mat.flat()
    if (flat.length !== r*c) return mat;
    return [...Array(r)].map(() => flat.splice(0,c)) 
};