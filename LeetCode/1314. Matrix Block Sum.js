// Medium

// Given a m * n matrix mat and an integer K, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for i - K <= r <= i + K, j - K <= c <= j + K, and (r, c) is a valid position in the matrix.
 

// Example 1:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 1
// Output: [[12,21,16],[27,45,33],[24,39,28]]
// Example 2:

// Input: mat = [[1,2,3],[4,5,6],[7,8,9]], K = 2
// Output: [[45,45,45],[45,45,45],[45,45,45]]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n, K <= 100
// 1 <= mat[i][j] <= 100

/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
function matrixBlockSum(mat, K) {
    const matrix = [];
    for (let i = 0; i < mat.length; ++i) {
        const row = [];
        for (let j = 0; j < mat[i].length; ++j) {
            row.push(blockSum(mat, i, j, K));
        }
        
        matrix.push(row);
    }
    
    return matrix;
};

function blockSum(matrix, i, j, K) {
    let sum = 0;
    
    for (let column = i - K; column <= i + K; ++column) {
        for (let row = j - K; row <= j + K; ++row) {
            if (column > -1 && column < matrix.length && row > -1 && row < matrix[i].length) sum += matrix[column][row];
        }
    }
    
    return sum;
}

// Runtime: 1012 ms, faster than 5.88% of JavaScript online submissions for Matrix Block Sum.
// Memory Usage: 39 MB, less than 32.14% of JavaScript online submissions for Matrix Block Sum.

// Brute force approach, we just iterate through the matrix and for every position we calculate the sum of the surrounding area.
// I believe this would be O(matrix * K) time complexity, even though K grows a lot faster than matrix.