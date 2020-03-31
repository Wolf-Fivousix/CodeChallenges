// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
// Note: You may not slant the container and n is at least 2.

// https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
// The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example:

// Input: [1,8,6,2,5,4,8,3,7]
// Output: 49

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(heights) {
    let bigArea = 0;
    let currentArea = 0;
    
    for (let i = 0; i < heights.length; ++i) {
        for (let j = i + 1; j < heights.length; ++j) {
            currentArea = calculateArea(heights, i, j);
            if (bigArea < currentArea) bigArea = currentArea;
        }
    }
    
    return bigArea;
};

function calculateArea(heights, i, j) {
    return (j - i) * Math.min(heights[i], heights[j]);
}

// This first approach is a pure bruteforce. It gets the job done, but we are doing a lot of computation.
// The nested loop also forces us into a Polynomial Time Complexity. Not good, not good at all! Let's do better.

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(heights) {
    let maximum = 0;
    let currentArea = 0;
    let leftPilar = 0;
    let rightPilar = heights.length - 1;
    
    while (leftPilar < rightPilar) {
        currentArea = (rightPilar - leftPilar) * Math.min(heights[leftPilar], heights[rightPilar]);
        if (maximum < currentArea) maximum = currentArea;
        
        heights[leftPilar] < heights[rightPilar] ? ++leftPilar : --rightPilar;
    }
    
    return maximum;
};

// Now we have a proper Linear Time Complexity.
// Here is how this works: We start at the boundaries of the array, our largest width and calculate the area.
// Then we pick the smalest pilar and move it inward. We do so that there is a chance for finding a taller pilar that will make up for the lost width;