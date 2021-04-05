// Medium

// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.

/**
 * @param {character[][]} grid
 * @return {number}
 */

/*
Diagonals are not considered "connections", that means I only need to check 4 directions.
I'm going to modify the original input, but if that is not desired, we can make a copy of it in Linear Time.

Define IslandCounter at 0.
Iterate through the matrix
    Once earth is found ("1")
        HELPPER: "shoot" in every direction until we run out of options.
        add 1 to the Island Counter.
        
return IslandCounter


HELPER: Earth flipper (matrix, starting position)
Given a position, transform every connected "earth" ("1") into water ("0").

Flip current position. (I do not want to do recursevely, because of very large matrixes)
Define queue with current position.
while queue is NOT empty
    pop from queue.
    look in 4 directions, N, E, S, W
    If the direction is WHITTIN THE MATRIX and "land", add it to the queue.

return void (doesn't return anything).

Worse case (every element is Earth) we will traverse the array twice.
Once for flipping, another for scanning.

Linear Time Complexity
Constant Space Complexity
Linear Space Complexity (if we do not modify the input, creating a copy of it first)
*/
function numIslands(grid) {
    
};