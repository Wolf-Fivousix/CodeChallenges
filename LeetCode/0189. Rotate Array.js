// Easy

// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 

// Constraints:

// 1 <= nums.length <= 2 * 10^4
// It's guaranteed that nums[i] fits in a 32 bit-signed integer.
// k >= 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    k = k % nums.length;
    for (let i = 0; i < k; ++i) {
        nums.unshift(nums.pop());
    }
};

// Runtime: 100 ms, faster than 52.37% of JavaScript online submissions for Rotate Array.
// Memory Usage: 36.5 MB, less than 55.76% of JavaScript online submissions for Rotate Array.

// Linear Time Complexity with Constant Space.
// I wonder if JS does some array reassigning under the hood whenever Pop or Shift/Unshift are called on it.

function rotate(nums, k) {
    k = k % nums.length;
    for (let i = 0; i < k; ++i) {
        let temp = null;
        for (let currentIndex = i + k; currentIndex < nums.length; currentIndex += k) {
            console.log(i, nums);
            temp = nums[currentIndex];
            nums[currentIndex] = nums[i];
            nums[i] = temp;
            
        }
    }
};

// I'm trying to figure out a way to swap the itens in place manually by looping through the array.
