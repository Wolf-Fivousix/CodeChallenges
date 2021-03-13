// Easy

// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

// Example 1:
// https://assets.leetcode.com/uploads/2018/10/12/island.png

// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.
// Example 2:

// Input: grid = [[1]]
// Output: 4
// Example 3:

// Input: grid = [[1,0]]
// Output: 4
 

// Constraints:

// row == grid.length
// col == grid[i].length
// 1 <= row, col <= 100
// grid[i][j] is 0 or 1.

/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
Here is KEY statement that changes a lot: and there is exactly one island (i.e., one or more connected land cells).
Since we do not have multiple land masses, we can "brute force" our way through this problem by simply calculating
the perimeter based on how many land masses touch each cell.

Perimeter starts at 0.
Iterate through rows
    Iterate through columns
        Is it water? Add 0.
        How many "land cells" touch horizontal/vertically? Reduce Perimeter by 1 for each.
            Check row - 1, row + 1, column - 1, row - 1.
Return Perimeter.

This iterates through the grid once, and considering the whole grid was a land mass, it would check every adjacent spot once again.
Making it 4 * row * column, which still Linear Time Complexity (N is the grid) with Constant Space Complexity.

Can we do better? Maybe memoization or a recursive function where we pass Perimiter 4 and reduce it for each land cell that touches it... More complex, will bring it down to 1 * Grid, which is quicker, but is it worth the trade off?
*/
function islandPerimeter(grid) {
    
};