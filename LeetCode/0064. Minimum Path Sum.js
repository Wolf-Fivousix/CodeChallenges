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

function minPathSum(grid) {
	const resultGrid = [];
    
    for (let row = 0; row < grid.length; ++row) {
        const currentRow = [];
        
        for (let column = 0; column < grid[row].length; ++column) {
            let up = row - 1 < 0 ? Number.POSITIVE_INFINITY : resultGrid[row - 1][column];
            const left = column - 1 < 0 ? Number.POSITIVE_INFINITY : currentRow[column - 1];
            
            if (row - 1 < 0 && column - 1 < 0) up = 0;
            currentRow.push(grid[row][column] + Math.min(up, left));
        }

    resultGrid.push(currentRow);
    }

    return resultGrid[resultGrid.length - 1][resultGrid[resultGrid.length - 1].length - 1];
}

// Ok. Now this is much better.
// The catch here is calculating the best optimal path up to the point we are.
// Because the "movement" only happens to the left and down, that is the same pattern
// that we traverse the grid as well. That means that when we reach a point X, Y, we have
// already visited the point X - 1 and Y - 1, allowing us to look those two values and say:
// Which of this paths is better? Once we have a more optimal path, there is no reason for us to
// store the least optimal, so we just throw that computation away and move on.
// When we reach the very last element, we have succesfully calculated the optimal path for both
// positions that leads to the end. Now we just need to pick which one is the best path.

// That makes for Linear Time and Space Complexity.
// If we modify the original grid, we can do with Constant Space.

// Runtime: 76 ms, faster than 56.09% of JavaScript online submissions for Minimum Path Sum.
// Memory Usage: 38.3 MB, less than 32.03% of JavaScript online submissions for Minimum Path Sum.