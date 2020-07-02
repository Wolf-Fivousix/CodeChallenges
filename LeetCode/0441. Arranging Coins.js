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

// Approach 1: Binary Search
// This question is easy in a sense that one could run an exhaustive iteration to obtain the result. That could work, except that it would run out of time when the input becomes too large. So let us take a step back to look at the problem, before rushing to the implementation.

// Assume that the answer is kk, i.e. we've managed to complete kk rows of coins. These completed rows contain in total 1 + 2 + ... + k = \frac{k (k + 1)}{2}1+2+...+k= 
// 2
// k(k+1)
// ​	
//   coins.

// We could now reformulate the problem as follows:

// Find the maximum kk such that \frac{k (k + 1)}{2} \le N 
// 2
// k(k+1)
// ​	
//  ≤N.

// The problem seems to be one of those search problems. And instead of naive iteration, one could resort to another more efficient algorithm called binary search, as we can find in another similar problem called search insert position.

// Implementation


// Complexity Analysis

// Time complexity : \mathcal{O}(\log N)O(logN).

// Space complexity : \mathcal{O}(1)O(1).


// Approach 2: Math
// If we look deeper into the formula of the problem, we could actually solve it with the help of mathematics, without using any iteration.

// As a reminder, the constraint of the problem can be expressed as follows:

// k(k + 1) \le 2Nk(k+1)≤2N

// This could be solved by completing the square technique,

// \left(k + \frac{1}{2}\right)^2 - \frac{1}{4} \le 2N(k+ 
// 2
// 1
// ​	
//  ) 
// 2
//  − 
// 4
// 1
// ​	
//  ≤2N

// that results in the following answer:

// k = \left[\sqrt{2N + \frac{1}{4}} - \frac{1}{2}\right]k=[ 
// 2N+ 
// 4
// 1
// ​	
 
// ​	
//  − 
// 2
// 1
// ​	
//  ]

// Implementation


// Complexity Analysis

// Time complexity : \mathcal{O}(1)O(1).

// Space complexity : \mathcal{O}(1)O(1).