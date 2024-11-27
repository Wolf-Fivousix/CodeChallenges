// Easy

// Given a 2D integer array matrix, return the transpose of matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.



 

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:

// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 1000
// 1 <= m * n <= 105
// -109 <= matrix[i][j] <= 109

/*
"BRUTE FORCE":
There's not really a "brute force" approach here, as we have to iterate through the whole matrix to get it's values.
That said, optimizations here would come in the sense of loading a very, very large array into memory.
If the matrix is big enough, we wouldn't be able to load the whole thing in memory and iterate how we are doing. In that case, optimization would be necessary.

That said, this is an Easy problem, so these considerations are not expected.

Linear Time and Space Complexity O(n)

*/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function transpose(matrix) {
    // As many rows as we have columns, so the length of one row becomes the new amount of rows.
    const rowSize = matrix[0].length
    // On the same note, the amount of rows will become columns.
    const columnSize = matrix.length
    const transposedMatrix = new Array(rowSize).fill(0).map(element => new Array(columnSize))

    for (let row = 0; row < transposedMatrix.length; ++row) {
        for (let column = 0; column < transposedMatrix[row].length; ++column) {
            transposedMatrix[row][column] = matrix[column][row]
        }
    }

    return transposedMatrix
};


// Runtime 1 ms Beats 72.87%
// Memory 52.68 MB Beats 38.58%

[
    [[1,2,3],[4,5,6],[7,8,9]],
    [[1,2,3],[4,5,6]],
].forEach(input => {
    console.log(transpose(input))
})