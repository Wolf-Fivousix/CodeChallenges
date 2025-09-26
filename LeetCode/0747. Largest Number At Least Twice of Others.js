// Easy

// You are given an integer array nums where the largest integer is unique.

// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

 

// Example 1:
// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

// Example 2:
// Input: nums = [1,2,3,4]
// Output: -1
// Explanation: 4 is less than twice the value of 3, so we return -1.
 

// Constraints:

// 2 <= nums.length <= 50
// 0 <= nums[i] <= 100
// The largest element in nums is unique.

/*
BRUTE FORCE
Scan once, find the index of the largest number

Scan twice, and confirm this number is at least twice larger than every other number

BETTER:
Scan once and keep track of the LARGEST and SECOND-TO-LARGEST numbers
Is the largest double or more than second-to-largest? If it is, return the index

return -1

Linear Time Complexity O(n) - On this one we have 2 scans (find the largest numbers, find the index of the largest number)
Constat Space Complexity O(1)

OPTIMAL:
track greatest number (start as 0)
track index
track condition flag
scan the input
    if element is greater than greatest number
    else if element is NOT twice+ the current

if flag ON, return index, otherwise return -1

This does in ONE pass while keeping constat space. Pretty nice =)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex(nums) {
    let greatestNumber = 0
    let greatestNumberIndex = -1
    let twicePlusFlag = false

    for (let i = 0; i < nums.length; ++i) {
        const num = nums[i]
        if (num > greatestNumber) {
            twicePlusFlag = num >= 2* greatestNumber
            greatestNumber = num
            greatestNumberIndex = i
        }
        else if (!(greatestNumber >= 2 * num)) {
            twicePlusFlag = false
        }
    }
    return twicePlusFlag ? greatestNumberIndex : -1
};

// Runtime 0 ms Beats 100.00%
// Memory 53.58 MB Beats 80.41%
