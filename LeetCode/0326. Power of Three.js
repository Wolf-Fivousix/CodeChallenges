// Easy

// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false
// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    if (n === 0) return false;
    
    while (n % 3 === 0) {
        n = Math.floor(n / 3);
    }
    
    return n === 1;
}

// Runtime: 236 ms, faster than 81.45% of JavaScript online submissions for Power of Three.
// Memory Usage: 46.4 MB, less than 38.46% of JavaScript online submissions for Power of Three.
// Logarithimic Time Complexity.
// Constant Space Complexity.