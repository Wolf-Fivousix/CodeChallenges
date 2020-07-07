// Medium

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

/**
 * @param {number[][]} grid
 * @return {number}
 */
function minPathSum(grid, row = 0, column = 0) {
	if (row > grid.length - 1 || column > grid[row].length - 1) return Number.POSITIVE_INFINITY;
    // console.log("row: ", row, " column: ", column, " - ", grid[row][column]);
	if (row === grid.length - 1 && column === grid[row].length - 1) return grid[row][column];
    
    const right = grid[row][column] + minPathSum(grid, row, column + 1);
	const bottom = grid[row][column] + minPathSum(grid, row + 1, column);

	return Math.min(right, bottom);
}

// Brute Force approach. Does not compute within the time limits.
// How could we use Memoization to avoid duplicate work?