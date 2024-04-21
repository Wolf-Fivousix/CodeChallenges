// Easy

// You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes.

// Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j).

// We view the projection of these cubes onto the xy, yz, and zx planes.

// A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

// Return the total area of all three projections.

 

// Example 1:
// https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/02/shadow.png

// Input: grid = [[1,2],[3,4]]
// Output: 17
// Explanation: Here are the three projections ("shadows") of the shape made with each axis-aligned plane.
// Example 2:

// Input: grid = [[2]]
// Output: 5
// Example 3:

// Input: grid = [[1,0],[0,2]]
// Output: 8
 

// Constraints:

// n == grid.length == grid[i].length
// 1 <= n <= 50
// 0 <= grid[i][j] <= 50

/*

  grid[0][0] = 1  
  grid[0][1] = 2
  grid[1][0] = 3
  grid[1][1] = 4

  xy = top if there is a square, it counts as 1.
    4
  yz = picks the highest value in X (i) with all Y's (j)
    0,0 or 1,0 = 3
    0,1 or 1,1 = 4
    | x | x x
    | x | x x
    | x | x x
  zx = within each array, which is the biggest value.
    0,0 or 0,1 = 2
    1,0 or 1,1 = 4
    _____
    x x x
    _____
    x x x
    x x x 

Total 17 -- matches

1
2
2
Total 5 -- matches

2
1 + 2
1 + 2
Total 8 -- matches

Okay, this sounds like it can work as expected
The constrains guarantees that we always going to have a square matrix, so we don't have to worry about weird shapes.

To make things simpler, we can do this in 3 N passes/iterations.
1st - Just count the non 0 values.
2nd - Compare all X indexes (i) and pick the biggest one.
    Repeat for all X's.
3rd - Compare all Y indexes (j) (each sub array itself) and pick the biggest one.
    Repeat for all Y's.

This is the bruteforce approach, where we are not saving any data or doing any kind of smart mathematical optimization.
It is Linear Time complexity and Constant Space complexity. Overall not too bad for a simple solution.
*/


/**
 * @param {number[][]} grid
 * @return {number}
 */
function projectionArea(grid) {
    const gridSize = grid.length
    let totalArea = 0;
    // Projection XY
    // Projection ZX
    // These share the same "loop iteration pattern", so we can combine them.
    for (let i = 0; i < gridSize; ++i) {
        let highestProjection = 0
        for (let j = 0; j < gridSize; ++j) {
            const currentValue = grid[i][j]
            totalArea += currentValue ? 1 : 0
            if (highestProjection < currentValue) highestProjection = currentValue
        }
        totalArea += highestProjection
    }
    // Projection YZ
    for (let i = 0; i < gridSize; ++i) {
        let highestProjection = 0
        for (let j = 0; j < gridSize; ++j) {
            const currentValue = grid[j][i]
            if (highestProjection < currentValue) highestProjection = currentValue
        }
        totalArea += highestProjection
    }

    return totalArea
};
// Runtime 54ms
// Beats 85.00% of users with JavaScript
// Memory 48.60MB
// Beats 6.67% of users with JavaScript

// This is a little bit more optimized, now we only iterate ONCE through the grid! Can't get better than this. =P
function projectionArea2 (grid) {
    const gridSize = grid.length
    let totalArea = 0;
    // Projection XY
    // Projection ZX
    // Projection YZ
    // These share the same "loop iteration pattern", so we can combine them.
    for (let i = 0; i < gridSize; ++i) {
        let highestProjection = 0
        let highestYZProjection = 0
        for (let j = 0; j < gridSize; ++j) {
            const currentValue = grid[i][j]
            const YZProjection = grid[j][i]
            totalArea += currentValue ? 1 : 0
            if (highestProjection < currentValue) highestProjection = currentValue
            if (highestYZProjection < YZProjection) highestYZProjection = YZProjection
        }
        totalArea += highestProjection
        totalArea += highestYZProjection
    }

    return totalArea
};

// Runtime 54ms
// Beats 85.00% of users with JavaScript
// Memory 49.14MB
// Beats 6.67% of users with JavaScript
// As a proof of Time Complexity, there is no difference whatsoever in the runtime.
// Of course, the data set is really small, if it was a considerably large data set, this could make a difference.
// Although I would argue the increase in code complexity might not be worth it.
