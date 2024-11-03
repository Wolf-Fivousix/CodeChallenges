// Easy

// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

 

// Example 1:
// https://assets.leetcode.com/uploads/2020/11/04/ex1.jpg

// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: true
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.
// Example 2:
// https://assets.leetcode.com/uploads/2020/11/04/ex2.jpg

// Input: matrix = [[1,2],[2,2]]
// Output: false
// Explanation:
// The diagonal "[1, 2]" has different elements.
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 20
// 0 <= matrix[i][j] <= 99
 

// Follow up:

// What if the matrix is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
// What if the matrix is so large that you can only load up a partial row into the memory at once?


/*
BRUTE FORCE:
We do need to traverse the whole matrix in order to check if the conditions are valid. So best case we have linear time complexity. BUT we will re-check the next row, so it's a little less eficient than a single pass.

Iterate through ROW
    Iterate through COLUMN
        For each element, check if ROW+1 and COLUMN+1 is equal to current element. (Remember to check for the boundaries of the matrix)
        If not, return false

return true

*/


/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
function isToeplitzMatrix(matrix) {
    for (let row = 0; row < matrix.length; ++row) {
        for (let column = 0; column < matrix[row].length; ++column) {
            const currentElement = matrix[row][column]
            if (row + 1 < matrix.length && column + 1 < matrix[row].length) {
                if (currentElement !== matrix[row + 1][column + 1]) return false
            }
        }
    }

    return true
};

// Runtime 1 ms Beats 45.05%
// Memory 50.84 MB Beats 61.58%

// A community solution points out: You don't need to check the boundaries of the matrix if you do the comparison to the top-left row, instead of the down-right.
// That will also make it a single pass.

function isToeplitzMatrix(matrix) {
    for (let row = 1; row < matrix.length; ++row) {
        for (let column = 1; column < matrix[row].length; ++column) {
            const currentElement = matrix[row][column]
            if (currentElement !== matrix[row - 1][column - 1]) return false
        }
    }

    return true
};

// Runtime 0 ms Beats 100.00%
// Memory 51.45 MB Beats 16.28%