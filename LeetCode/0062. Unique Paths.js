// Medium

// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?


// Above is a 7 x 3 grid. How many possible unique paths are there?

 

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28
 

// Constraints:

// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
    // If we start our algorithm from the robot, we
    // would have to keep track of previously traversed paths.
    // Instead, we start from the finish point, and mover
    // backwards, adding to the possibilities.
    
    // The algorithm goes like this:
    // From finish point, we have 1 possibility: Left and Top.
    // From those points, the possibility space grows as
    // the sum from the possibilities BELLOW and TO THE RIGHT.
    // So for input 2x2, the possibilities are 2.
    if (m === 1 || n === 1) return 1;
    const grid = makeGrid(m, n);
    
    // I'm flipping the finish and start during iteration.
    for (let row = 0; row < m; ++row) {
        for (let column = 0; column < n; ++column) {
            if (!row && !column) {
                grid[0][0] = 1;
                continue;
            }
            
            let sum = 0;
            sum += row - 1 < 0 ? 0 : grid[row - 1][column];
            sum += column - 1 < 0 ? 0 : grid[row][column - 1];
            grid[row][column] = sum;
        }
    }
    
    return grid[m - 1][n - 1];
}

function makeGrid(row, column) {
    const grid = [];
    for (let i = 0; i < row; ++i) {
        const array = [];
        for (let j = 0; j < column; ++j) {
            array.push(0);
        }
        grid.push(array);
    }
    
    return grid;
}

// Runtime: 84 ms, faster than 31.06% of JavaScript online submissions for Unique Paths.
// Memory Usage: 36.9 MB, less than 24.19% of JavaScript online submissions for Unique Paths.

// Linear Time and Space Complexity. We "traverse" the grid (M * N) once. We also take
// that much memory making the grid to calculate possibilities.