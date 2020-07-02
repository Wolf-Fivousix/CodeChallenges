// Easy

// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.
// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.

/**
 * @param {number} n
 * @return {number}
 */
function arrangeCoins(coins) {
    let steps = 1;
    
    while (coins >= 0) {
        coins -= steps;
        ++steps;
    }
    
    return steps - 2;
};

// Runtime: 100 ms, faster than 50.85% of JavaScript online submissions for Arranging Coins.
// Memory Usage: 38.4 MB, less than 29.28% of JavaScript online submissions for Arranging Coins.