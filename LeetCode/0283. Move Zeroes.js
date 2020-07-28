// Easy

// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Define a Zero Counter that starts at 0.
// Iterate through the sequence once. (loop until the length - Zero Counter)
// if we find a 0, increase the counter by 1 and DECREASE our index by 1 (we want to repeat the work with the current index.)
// else move TO the current index the element from index + ZeroCounter. (we could add a ZeroCounter check here to prevent unnecessary moving in case of an input that has no zeroes.)

// Iterate from nums length - zero counter until the end of array and change those elements to be 0.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
	let zero = 0;

	for (let i = 0; i < nums.length - zero; ++i) {
		if (nums[i + zero] === 0) {
			++zero;
            nums[i] = 1;
			--i;
			
        }
        else {
            if (zero) nums[i] = nums[i + zero];
        }
    }

    for (let i = nums.length - zero; i < nums.length; ++i) {
        nums[i] = 0;
    }

    return null;
}

// Runtime: 84 ms, faster than 48.15% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 38.3 MB, less than 16.35% of JavaScript online submissions for Move Zeroes.

// Linear Time Complexity.
// Constant Space Complexity.