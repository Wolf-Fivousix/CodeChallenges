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

}