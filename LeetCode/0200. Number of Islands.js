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
    Once Land is found ("1")
        HELPPER: "shoot" in every direction until we run out of options.
        add 1 to the Island Counter.
        
return IslandCounter


HELPER: Land flipper (matrix, starting position)
Given a position, transform every connected "Land" ("1") into water ("0").

Flip current position. (I do not want to do recursevely, because of very large matrixes)
Define queue with current position.
while queue is NOT empty
    pop from queue.
    look in 4 directions, N, E, S, W
    If the direction is WHITTIN THE MATRIX and "land", add it to the queue.

return void (doesn't return anything).

Worse case (every element is Land) we will traverse the array twice.
Once for flipping, another for scanning.

Linear Time Complexity
Constant Space Complexity
Linear Space Complexity (if we do not modify the input, creating a copy of it first)
*/
const LAND = "1";
const WATER = "0";

function numIslands(grid) {
    let islandCounter = 0;
    
    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[i].length; ++j) {
            const currentPosition = grid[i][j];
            if (currentPosition === LAND) {
                landFlipper(grid, [i, j]);
                ++islandCounter;
            }
        }
    }
    
    return islandCounter;
};

function landFlipper(grid, position) {
    const queue = [position];
    grid[position[0]][position[1]] = WATER;
    
    while (queue.length) {
        const [x, y] = queue.shift();
        // North
        if (x - 1 >= 0 && grid[x - 1][y] === LAND) {
            queue.push([x - 1, y])
            grid[x - 1][y] = WATER;
        }
        // East
        if (y + 1 < grid[x].length && grid[x][y + 1] === LAND) {
            queue.push([x, y + 1])
            grid[x][y + 1] = WATER;
        }
        // South
        if (x + 1 < grid.length && grid[x + 1][y] === LAND) {
            queue.push([x + 1, y])
            grid[x + 1][y] = WATER;
        }
        // West
        if (y - 1 >= 0 && grid[x][y - 1] === LAND) {
            queue.push([x, y - 1])
            grid[x][y - 1] = WATER;   
        }
    }
    
    return null;
}


const grid1 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
const grid2 = [["1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","0","1","0","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","0"],["1","0","1","1","1","0","0","1","1","0","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","0","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","1","1","1","1","1","1","0","1","1","1","0","1","1","1","0","1","1","1"],["0","1","1","1","1","1","1","1","1","1","1","1","0","1","1","0","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","1","1"],["1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["0","1","1","1","1","1","1","1","0","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","0","1","1","1","1","1","1","1","0","1","1","1","1","1","1"],["1","0","1","1","1","1","1","0","1","1","1","0","1","1","1","1","0","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","1","1","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","0","1","1","1","1","0","0"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]];

console.log(numIslands(grid1));
console.log(numIslands(grid2));

// Runtime: 92 ms, faster than 36.26% of JavaScript online submissions for Number of Islands.
// Memory Usage: 41.5 MB, less than 33.60% of JavaScript online submissions for Number of Islands.
// Runtime: 96 ms, faster than 26.14% of JavaScript online submissions for Number of Islands.
// Memory Usage: 41.7 MB, less than 30.86% of JavaScript online submissions for Number of Islands.