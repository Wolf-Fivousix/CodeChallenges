// Easy

// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 

// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3
 

// Constraints:

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105
// 0 <= left <= right < nums.length
// At most 104 calls will be made to sumRange.

/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
        this.nums = nums
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let sum = 0
    for (let i = left; i <= right; ++i) {
        sum += this.nums[i]
    }

    return sum
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// Runtime 79 ms Beats 15.75%
// Memory 62.07 MB Beats 71.42%

// As expected, not very performant, but definitly works.
// Let's be a little bit more inteligent!
// Here's the deal: Since we are always summing up a fixed window, we can leverage MATH
// Sum every element in sequence, and knowing the start (left) and end (right) indexes, we can do simple subtraction.
// This will save us all the computing power!

/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums) {
        this.nums = [nums[0]]
        for (let i = 1; i < nums.length; ++i) {
            this.nums.push(this.nums[i - 1] + nums[i])
        }
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    if (left === 0) return this.nums[right]

    return this.nums[right] - this.nums[left - 1]
};

// Runtime 6 ms Beats 76.48%
// Memory 62.52 MB Beats 47.52%

// Much better! =)