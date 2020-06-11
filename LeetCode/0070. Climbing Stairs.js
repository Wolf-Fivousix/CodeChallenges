// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n <= 1) return 1;
    return climbStairs(n-1) + climbStairs(n-2);
};

// Bruce force way, does not execute within time limit.

// The catch to solving this problem (one of them), is figuring out that the amount of variations
// you can take at any N depends on the variations for (N - 1) + (N - 2).
// That is the same thing as Fibonacci. So we can build an array taking that into consideration.