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

// Polynomial Time and Space Complexity. We "traverse" the grid (M * N) once. We also take
// that much memory making the grid to calculate possibilities.

// Solution by jianchao-li
// C++
// The interesting here is that he is able to compact the code by initialize every member to 1.
// As well as improve the memory space to Linear from M * N to only N. Which is a big improvement.

// Since the robot can only move right and down, when it arrives at a point, it either arrives from left or above. If we use dp[i][j] for the number of unique paths to arrive at the point (i, j), then the state equation is dp[i][j] = dp[i][j - 1] + dp[i - 1][j]. Moreover, we have the base cases dp[0][j] = dp[i][0] = 1 for all valid i and j.

// class Solution {
// public:
//     int uniquePaths(int m, int n) {
//         vector<vector<int>> dp(m, vector<int>(n, 1));
//         for (int i = 1; i < m; i++) {
//             for (int j = 1; j < n; j++) {
//                 dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
//             }
//         }
//         return dp[m - 1][n - 1];
//     }
// };
// The above solution runs in O(m * n) time and costs O(m * n) space. However, you may have noticed that each time when we update dp[i][j], we only need dp[i - 1][j] (at the previous row) and dp[i][j - 1] (at the current row). So we can reduce the memory usage to just two rows (O(n)).

// class Solution {
// public:
//     int uniquePaths(int m, int n) {
//         vector<int> pre(n, 1), cur(n, 1);
//         for (int i = 1; i < m; i++) {
//             for (int j = 1; j < n; j++) {
//                 cur[j] = pre[j] + cur[j - 1];
//             }
//             swap(pre, cur);
//         }
//         return pre[n - 1];
//     }
// };
// Further inspecting the above code, pre[j] is just the cur[j] before the update. So we can further reduce the memory usage to one row.

// class Solution {
// public:
//     int uniquePaths(int m, int n) {
//         vector<int> cur(n, 1);
//         for (int i = 1; i < m; i++) {
//             for (int j = 1; j < n; j++) {
//                 cur[j] += cur[j - 1];
//             }
//         }
//         return cur[n - 1];
//     }
// };
// Now, you may wonder whether we can further reduce the memory usage to just O(1) space since the above code seems to use only two variables (cur[j] and cur[j - 1]). However, since the whole row cur needs to be updated for m - 1 times (the outer loop) based on old values, all of its values need to be saved and thus O(1)-space is impossible. However, if you are having a DP problem without the outer loop and just the inner one, then it will be possible.