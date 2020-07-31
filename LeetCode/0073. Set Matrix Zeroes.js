// Medium

// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// Example 1:

// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// Example 2:

// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix) {
    const rows = new Set();
    const columns = new Set();
    
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                columns.add(j);
            }
        }
    }
    rows.forEach(row => {
        for (let i = 0; i < matrix[row].length; ++i) {
            matrix[row][i] = 0;
        }
    });
    
    columns.forEach(column => {
        for (let i = 0; i < matrix.length; ++i) {
            matrix[i][column] = 0;
        }
    });
}

// Runtime: 100 ms, faster than 52.61% of JavaScript online submissions for Set Matrix Zeroes.
// Memory Usage: 38.9 MB, less than 54.90% of JavaScript online submissions for Set Matrix Zeroes.

// Linear Time Complexity, as we need to iterate through the matrix 3 times at worse case.
// Linear Space Complexity O(M + N), as the sets will grow as much as many 0's in the matrix.

// For the follow up: How about we had a "flag" number that we'll keep as a marker.
// We iterate through the matrix once and swap the 0's for the marker.
// We iterate a second time, whenever we find a flag, we change the rows and columns to 0.
    // EXCEPET the values marked with a flag.
    // we change the current flag to 0.

// Now we don't use any extra space, and, even though we are iterating multiple times through the matrix,
// we use Linear Space.