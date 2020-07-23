// Easy

// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function containsNearbyDuplicate(nums, k) {
    for (let i = 0; i < nums.length; ++i) {
        for (let j = i + 1; j < nums.length && j <= i + k; ++j) {
            if (nums[i] === nums[j]) return true;
        }
    }
    
    return false;
};

// Runtime: 1232 ms, faster than 12.42% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 38.1 MB, less than 81.20% of JavaScript online submissions for Contains Duplicate II.

// Bruteforce approach.
// "Polinomial" Time Complexity (O Nums * K).
// Constant Space Complexity. We only use 2 variables.