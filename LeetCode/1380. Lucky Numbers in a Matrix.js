// Easy

// Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

 

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column
// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 3:

// Input: matrix = [[7,8],[1,2]]
// Output: [7]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= n, m <= 50
// 1 <= matrix[i][j] <= 10^5.
// All elements in the matrix are distinct.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function luckyNumbers(matrix) {
    // The idea:
    // Make an "overhead" row that will hold the value of the greatest element in columns. (row index)
    // Make an "overside" column that will hold the index of the smallest element in the row. (column index)
    // Iterate through the matrix and fill the "overarrays" with the proper element.
    // Define result as an empty array.
    // Iterate through the "overside" and compare the index of the element with the "overhead"
    // indexed BY THE ELEMENT itself.
    // For example:
    // Overside: [0, 0, 0] Overhead: [2, 2, 2]
    // Is the element on index 2,0 (15) of Overside the same as Overhead 0? YES
    
    // Overside: [0, 1, 3] Overhead: [15, 16, 17, 12]
    // Iterate through overside
    // 0,0 = 1  equal to Overhead[0] = 15 ? NO
    // 1,1 = 3  equal to Overhead[1] = 16 ? NO
    // 2,3 = 12 equal to Overhead[3] = 12 ? YES

    const maxColumn = new Array(matrix[0].length).fill(Number.NEGATIVE_INFINITY);
    const minRow = new Array(matrix.length).fill(0);
    
    for (let row = 0; row < matrix.length; ++row) {
        for (let column = 0; column < matrix[row].length; ++column) {
            const currentValue = matrix[row][column];
            if (currentValue < matrix[row][minRow[row]]) minRow[row] = column;
            if (currentValue > maxColumn[column]) maxColumn[column] = currentValue;
        }
    }
    
    const result = [];
    for (let i = 0; i < minRow.length; ++i) {
        const currentIndex = minRow[i];
        const currentValue = matrix[i][currentIndex];
        if (currentValue === maxColumn[currentIndex]) result.push(currentValue);
    }
    
    return result;
}