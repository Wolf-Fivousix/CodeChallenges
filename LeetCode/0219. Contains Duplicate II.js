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
}

// Runtime: 1232 ms, faster than 12.42% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 38.1 MB, less than 81.20% of JavaScript online submissions for Contains Duplicate II.

// Bruteforce approach.
// "Polinomial" Time Complexity (O Nums * K).
// Constant Space Complexity. We only use 2 variables.

function containsNearbyDuplicate(nums, k) {
    if (!k || nums.length < 2) return false;
    
    const currentNumbers = new Set();
    for (let i = 0; i < nums.length && i <= k; ++i) {
        if (currentNumbers.has(nums[i])) return true;
        currentNumbers.add(nums[i]);
    }
    
    
    for (let i = k + 1; i < nums.length; ++i) {
        currentNumbers.delete(nums[i - k - 1]);
        if (currentNumbers.has(nums[i])) return true;
        currentNumbers.add(nums[i]);
    }
    
    return false;
}

// Runtime: 80 ms, faster than 80.21% of JavaScript online submissions for Contains Duplicate II.
// Memory Usage: 40.8 MB, less than 78.95% of JavaScript online submissions for Contains Duplicate II.

// Linear Time Complexity (size of numbers array).
// Linear Space Complexity (size of K).

// Solution by lifongi
function containsNearbyDuplicate(nums, k) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
      if (map[nums[i]] >= 0 && i - map[nums[i]] <= k) return true;
      map[nums[i]] = i;
    }
    return false;
}