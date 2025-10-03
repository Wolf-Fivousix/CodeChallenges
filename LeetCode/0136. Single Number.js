// Easy

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints:
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/*
If we could use memory, we would keep a hash map of the element that have appeared before.
If we could do in non-linear fashion, we could "bubble sort" search the array for each element.
Sorting also takes N Log N, so no dice here...
How do we do without extra memory and in linear time?

Num - Binary - XOR (with above)
2 - 10
2 - 10 -> 00
1 - 01 -> 01
3 - 11 -> 10
3 - 11 -> 01

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let uniqueNumber = 0
    nums.forEach(num => uniqueNumber = uniqueNumber ^ num)

    return uniqueNumber
};

// Runtime 0 ms Beats 100.00%
// Memory 56.97 MB Beats 47.25%

// We can also use reduce:
function singleNumber(nums) {
    return nums.reduce((acc, num) => acc ^ num)
};

// Runtime 0 ms Beats 100.00%
// Memory 56.35 MB Beats 65.19%
