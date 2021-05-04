// Disk Space Analysis

// Coinbase = LeetCode 239 (with some slight variation)
// A company is performing an analysis on the computers at its main office. The computers
// are spaced along a single row. For each group of contiguous computers of a certain length,
// that is, for each segment, determine the minimum amount of disk space available on a
// computer. Return the maximum of these values as your answer.
// Example
// n = 4 , the number of computers
// space = [8, 2, 4, 6]
// x = 2 , the segment length
// The free disk space of computers in each of the segments is [8, 2], [2, 4], [4, 6].  The minima
// of the three segments are [2, 2, 4].  The maximum of these is 4.
// Function Description
// Complete the function segment in the editor below.
// segment has the following parameter(s):
//      int x:  the segment length to analyze
//      int space[n]:  the available hard disk space on each of the computers
// Returns:
//      int: the maximum of the minimum values of available hard disk space found while
// analyzing the computers in segments of length x
// Constraints
// 1 ≤ n ≤ 10 6
// 1 ≤ x ≤ n
// 1 ≤ space[i] ≤ 10 9



/*
 * Complete the 'segment' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER x
 *  2. INTEGER_ARRAY space
 */

function segment(x, space) {
    // Brute Force Approach:
    // Min array starts empty.
    // Loop through space array.
        // from I to I + X, find the MIN value and push to Min array.
    // return MAX value in Min array.
    // 9/15. Great start
    // const minArray = [];
    // for (let i = 0; i + x <= space.length; ++i) {
    //     minArray.push(Math.min(...space.slice(i, i + x)));
    // }
    
    // return Math.max(...minArray);
    
    // Let's keep the approach, but instead of slicing, let's work with the indexes and remove the spreads.
    // 12/15. For the last 3 we need to decrease time complexity.
    // Right now we are computing the same sequence multiple times.
    // There must be a way to update it on the fly.
    const minArray = [];
    for (let i = 0; i + x <= space.length; ++i) {
        minArray.push(findMinValueInSequence(space, i, x));
    }
    
    return findMaxValue(minArray);

}

function findMinValueInSequence(array, start, windowSize) {
    let minValue = Number.MAX_VALUE;
    for (let i = 0; i < windowSize; ++i) {
        minValue = Math.min(minValue, array[start + i]);
    }
    
    return minValue;
}

function findMaxValue(array) {
    let max = Number.MIN_SAFE_INTEGER;
    array.forEach(value => { max = Math.max(max, value) });
    
    return max;
}