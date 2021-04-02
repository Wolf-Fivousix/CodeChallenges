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
        If land...
            How many "land cells" touch horizontal/vertically? Reduce Perimeter by 1 for each.
                Check row - 1, row + 1, column - 1, row - 1.
Return Perimeter.

This iterates through the grid once, and considering the whole grid was a land mass, it would check every adjacent spot once again.
Making it 4 * row * column, which still Linear Time Complexity (N is the grid) with Constant Space Complexity.

Can we do better? Maybe memoization or a recursive function where we pass Perimiter 4 and reduce it for each land cell that touches it...
 More complex, will bring it down to 1 * Grid, which is quicker, but is it worth the trade off?

Scan the grid until we find a land.
Once land is found, return the perimeter (recursive function)

Perimeter Method:
    What is my perimeter? It is going to be the adition of the perimeters around me.
    But now, unless I somehow mark if a cell already had a perimeter calculated, I will double count something.
The complexity of this will not add much to the performance.
*/
function islandPerimeter(grid) {
    let perimeter = 0;
    for (let row = 0; row < grid.length; ++row) {
        for (let column = 0; column < grid[row].length; ++column) {
            const land = grid[row][column];
            if (land) {
                if(row - 1 < 0 || grid[row - 1][column] === 0) ++perimeter;
                if(row + 1 >= grid.length || grid[row + 1][column] === 0) ++perimeter;
                if(column - 1 < 0 || grid[row][column - 1] === 0) ++perimeter;
                if(column + 1 >= grid[row].length || grid[row][column + 1] === 0) ++perimeter;
            }
            // console.log(`Row: ${row} Column: ${column} - ${land} => ${perimeter}`)  
        }
    }
    return perimeter;
};

// Runtime: 208 ms, faster than 44.11% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 48.7 MB, less than 68.01% of JavaScript online submissions for Island Perimeter.

// Runtime: 184 ms, faster than 91.92% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 49.1 MB, less than 30.98% of JavaScript online submissions for Island Perimeter.

// Runtime: 196 ms, faster than 74.07% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 48.8 MB, less than 53.87% of JavaScript online submissions for Island Perimeter.

// Solution by ghewadesumit
// He flips the land to -1 to mark already calculated cells.
var islandPerimeter = function(grid) {
    if(grid == null || grid.length == 0 || grid[0].length == 0) return 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] == 1) return dfs(i,j,grid); 
        }
    } 
    return 0;
};

let dfs = function(i,j,grid){
    if(i< 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 1;
    if(grid[i][j] == 0) return 1;   
    if(grid[i][j] == -1) return 0;   
    let count =  0;

    grid[i][j] = -1;
    
    count += dfs(i-1,j,grid);
    count += dfs(i,j-1,grid);
    count += dfs(i,j+1,grid);
    count += dfs(i+1,j,grid);
    
    return count;
}
// Runtime: 200 ms, faster than 65.32% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 48.9 MB, less than 43.77% of JavaScript online submissions for Island Perimeter.
// Runtime: 196 ms, faster than 74.07% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 49 MB, less than 35.02% of JavaScript online submissions for Island Perimeter.
// Runtime: 200 ms, faster than 65.32% of JavaScript online submissions for Island Perimeter.
// Memory Usage: 48.9 MB, less than 43.77% of JavaScript online submissions for Island Perimeter.

// As expected, the performance difference is irrelevant.