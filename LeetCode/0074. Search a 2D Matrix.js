// Medium

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 

// Example 1:
// https://assets.leetcode.com/uploads/2020/10/05/mat.jpg

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:
// https://assets.leetcode.com/uploads/2020/10/05/mat2.jpg

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Finding the target inside a row is a classic Binary Search, no problems there.
// The extra step here is identifying the row we want to BS. Because the rows are also ordered
// we can do this with another Binary Search. This one, however, always returns a row for further searching.
function searchMatrix(matrix, target) {
    const row = binarySearchRow(matrix, target);
    return binarySearchValue(matrix[row], target);
};

function binarySearchRow(matrix, target) {
    let start = 0;
    let end = matrix.length - 1;
    
    while (start < end) {
        const mid = Math.ceil(start + (end - start) / 2);

        if (target < matrix[mid][0]) end = mid - 1;
        else start = mid;
    }
    
    return start;
}

function binarySearchValue(array, target) {
    let start = 0;
    let end = array.length - 1;
    
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        
        if (array[mid] === target) return true;
        else if (target < array[mid]) end = mid - 1;
        else start = mid + 1;
    }
    
    return false;
}

// Runtime: 80 ms, faster than 63.50% of JavaScript online submissions for Search a 2D Matrix.
// Memory Usage: 38.8 MB, less than 48.12% of JavaScript online submissions for Search a 2D Matrix.