// Easy

// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.

// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

// For example, inverting [0,1,1] results in [1,0,0].
 
// Example 1:
// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// Example 2:
// Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
// Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
// Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
 

// Constraints:

// n == image.length
// n == image[i].length
// 1 <= n <= 20
// images[i][j] is either 0 or 1.

/*
BRUTE FORCE:
Copy the matrix
Iterate through each row and reverse it
Iterate once more and flip each bit

return the modified matrix

Better Approach:
Create an empty matrix of sizes N
Iterate through image rows
    iterate through image columns, from END to START
        using the reverse index, assign the oposite bit to the new matrix

return the new matrix

Linear Time Complexity O(N) - Because we need to iterate at least once through the input
Linear Space Complexity O(N) - Because we're making a copy of it.

We CAN reduce the memory footprint by modifying the input in place (two pointer approach)
*/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
function flipAndInvertImage(image) {
    const modifiedImage = createImageOfSize(image.length)

    for (let i = 0; i < image.length; ++i) {
        for (let j = image[i].length - 1; j >= 0; --j) {
            modifiedImage[i][modifiedImage[i].length - 1 - j] = image[i][j] === 1 ? 0 : 1
        }
    }

    return modifiedImage
};

function createImageOfSize(size) {
    const modifiedImage = new Array(size)
    for (let i = 0; i < size; ++i) {
        modifiedImage[i] = new Array(size)
    }

    return modifiedImage
}

// Runtime 0 ms Beats 100.00%
// Memory 56.07 MB Beats 63.48%
