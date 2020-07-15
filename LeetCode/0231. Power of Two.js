// Easy

// Given an integer, write a function to determine if it is a power of two.

// Example 1:

// Input: 1
// Output: true 
// Explanation: 20 = 1
// Example 2:

// Input: 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: 218
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    while (n > 1) {
        if (n % 2) return false;
        n /= 2;
    }

    return n === 1;
};

// Runtime: 88 ms, faster than 70.35% of JavaScript online submissions for Power of Two.
// Memory Usage: 36.3 MB, less than 28.84% of JavaScript online submissions for Power of Two.

// Logaritimic Time Complexity.
// Constant Space Complexity.