// Medium

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

// Constraints:

// 1 <= nums.length <= 3 * 10^4
// 0 <= nums[i][j] <= 10^5

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
	let jumps = 0;
	for (let i = 0; i < nums.length; ++i) {
		--jumps;
		jumps = Math.max(jumps, nums[i]);

		if (jumps + i >= nums.length - 1) return true;
		if (jumps < 1) return false;
    }

    return true;
}

// Runtime: 64 ms, faster than 86.04% of JavaScript online submissions for Jump Game.
// Memory Usage: 36.4 MB, less than 55.34% of JavaScript online submissions for Jump Game.

// Linear Time Complexity and Constant Space Complexity.

// Solution by Hongbo-Miao
function canJump(nums) {
    let max = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      if (max < i) return false;  // max steps cannot reach position i
      max = Math.max(nums[i] + i, max);
    }
  
    return true;
}