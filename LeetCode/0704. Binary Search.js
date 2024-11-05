// Easy

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

/*

Simple binary search, no description necessary

Logarithmic Time Complexity O(log n)
Constant Space Complexity O(n)
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end ) {
        const mid = Math.floor((end - start) / 2) + start

        if (nums[mid] === target) return mid
        if (target < nums[mid]) end = mid - 1
        else start = mid + 1
    }
    
    return -1
};

// Runtime 0 ms Beats 100.00%
// Memory 53.24 MB Beats 14.65%