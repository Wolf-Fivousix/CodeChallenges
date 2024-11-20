// Easy

// You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image. You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill:

// Begin with the starting pixel and change its color to color.
// Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel, either horizontally or vertically) and shares the same color as the starting pixel.
// Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches the original color of the starting pixel.
// The process stops when there are no more adjacent pixels of the original color to update.
// Return the modified image after performing the flood fill.

 

// Example 1:
// https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg

// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2

// Output: [[2,2,2],[2,2,0],[2,0,1]]

// Explanation:



// From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.

// Note the bottom corner is not colored 2, because it is not horizontally or vertically connected to the starting pixel.

// Example 2:

// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0

// Output: [[0,0,0],[0,0,0]]

// Explanation:

// The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.

// Constraints:

// m == image.length
// n == image[i].length
// 1 <= m, n <= 50
// 0 <= image[i][j], color < 216
// 0 <= sr < m
// 0 <= sc < n


/*
"BRUTE FORCE":
We are going to use a queue of points (BFS) to traverse the filling.

if the starting point is the same color as new color, return.

Save the original color.
Add the initial point to the queue
Iterate until the queue is empty
    shift the first point
    if the color is the original color,
        modify it
        push all 4 adjacent points into the queue. (do length checks before adding them - CONSTRAINS GUARANTEE THAT THE INITIAL SR and SC ARE VALID)


return the MODIFIED input

Linear Time Complexity O(n) - We might traverse the whole image once.
Constant Space Complexity O(1) - We are modifying the original, so only a couple variables are used repeatedely.
    If we want to be more accurate, we can say that it will be a function of N, since our queue could grow like that. But it will never reach Linear.

*/


/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    const originalColor = image[sr][sc]
    if(originalColor=== newColor) return image

    const queue = [[sr, sc]]
    while (queue.length) {
        const [row, column] = queue.shift()
        if (image[row][column] === originalColor && image[row][column] !== newColor) {
            image[row][column] = newColor

            // Up
            if (row - 1 >= 0) queue.push([row - 1, column])
            // Right
            if (column + 1 < image[row].length) queue.push([row, column + 1])
            // Down
            if (row + 1 < image.length) queue.push([row + 1, column])
            // Left
            if (column - 1 >= 0) queue.push([row, column - 1])
        }
    }

    return image
};

// Runtime 2 ms Beats 30.13%
// Memory 53.93 MB Beats 30.27%