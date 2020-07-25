// Easy

// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Example 1:

// Input: [3,0,1]
// Output: 2
// Example 2:

// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

// I actually got this question on my first onsite.

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    const sum = nums.reduce((sum, num) => sum + num, 0);
    let maxSum = 0;
    for (let i = 0; i <= nums.length; ++i) maxSum += i;
    
    return maxSum - sum;
}

// Linear Time Complexity.
// Constant Space Complexity.
// Runtime: 76 ms, faster than 75.41% of JavaScript online submissions for Missing Number.
// Memory Usage: 39.2 MB, less than 21.29% of JavaScript online submissions for Missing Number.